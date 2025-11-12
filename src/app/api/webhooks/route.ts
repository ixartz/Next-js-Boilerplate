import type { DeletedObjectJSON, UserJSON, WebhookEvent } from '@clerk/nextjs/server';
import type { NextRequest } from 'next/server';
import { verifyWebhook } from '@clerk/nextjs/webhooks';
import { eq } from 'drizzle-orm';
import { db } from '@/libs/DB';
import { users } from '@/models/Schema';

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req) as WebhookEvent;
    const eventType = evt.type;

    console.warn(`Received webhook with event type: ${eventType}`);

    // Handle different webhook events
    switch (eventType) {
      case 'user.created':
        await handleUserCreated(evt.data);
        break;
      case 'user.updated':
        await handleUserUpdated(evt.data);
        break;
      case 'user.deleted':
        await handleUserDeleted(evt.data);
        break;
      default:
        console.warn(`Unhandled event type: ${eventType}`);
    }

    return new Response('Webhook received', { status: 200 });
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error verifying webhook', { status: 400 });
  }
}

/**
 * Handle user.created webhook event
 * Extracts essential user data from Clerk and inserts into database
 */
async function handleUserCreated(evt: UserJSON) {
  try {
    const { id, email_addresses, first_name, last_name } = evt;

    if (!id || !email_addresses[0]?.email_address) {
      console.error('Missing required fields for user creation');
      return;
    }

    // Construct full name
    const name = [first_name, last_name].filter(Boolean).join(' ') || null;

    // Insert new user into database
    await db.insert(users).values({
      id, // Clerk user ID - essential for syncing
      email: email_addresses[0]?.email_address,
      name,
    });

    console.warn(`User created in database: ${id}`);
  } catch (error) {
    console.error('Error handling user.created:', error);
    throw error;
  }
}

/**
 * Handle user.updated webhook event
 * Updates existing user data in database
 */
async function handleUserUpdated(evt: UserJSON) {
  try {
    const { id, email_addresses, first_name, last_name } = evt;

    if (!id) {
      console.error('Missing user ID for update');
      return;
    }

    // Construct full name
    const name = [first_name, last_name].filter(Boolean).join(' ') || null;

    // Update user in database
    const updateData: any = {};
    if (email_addresses[0]?.email_address) {
      updateData.email = email_addresses[0]?.email_address;
    }
    if (name !== null) {
      updateData.name = name;
    }

    if (Object.keys(updateData).length > 0) {
      await db.update(users).set(updateData).where(eq(users.id, id));
      console.warn(`User updated in database: ${id}`);
    }
  } catch (error) {
    console.error('Error handling user.updated:', error);
    throw error;
  }
}

/**
 * Handle user.deleted webhook event
 * Removes user from database
 */
async function handleUserDeleted(evt: DeletedObjectJSON) {
  try {
    const { id } = evt;

    if (!id) {
      console.error('Missing user ID for deletion');
      return;
    }

    // Delete user from database
    await db.delete(users).where(eq(users.id, id));

    console.warn(`User deleted from database: ${id}`);
  } catch (error) {
    console.error('Error handling user.deleted:', error);
    throw error;
  }
}

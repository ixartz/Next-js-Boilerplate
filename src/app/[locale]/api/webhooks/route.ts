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
    const { id, primary_email_address_id, first_name, last_name, email_addresses } = evt;

    if (!id || !primary_email_address_id || !email_addresses?.length) {
      console.error('Missing required fields for user creation');
      throw new Error('Missing required fields for user creation');
    }

    // Find the primary email address
    let emailObj = email_addresses.find(email =>
      email.id === primary_email_address_id,
    );

    // Fallback to any verified email if the primary_email_address_id doesn't match
    if (!emailObj) {
      emailObj = email_addresses.find(email => email.verification?.status === 'verified') || email_addresses[0];
    }

    if (!emailObj?.email_address) {
      console.error('No valid email address found for user');
      throw new Error('No valid email address found for user');
    }

    // Construct full name
    const name = [first_name, last_name].filter(Boolean).join(' ') || null;

    // Insert new user into database
    await db.insert(users).values({
      id, // Clerk user ID - essential for syncing
      email: emailObj.email_address,
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
    const { id, primary_email_address_id, first_name, last_name, email_addresses } = evt;

    if (!id) {
      console.error('Missing user ID for update');
      return;
    }

    // Construct full name
    const name = [first_name, last_name].filter(Boolean).join(' ') || null;

    // Update user in database
    const updateData: any = {};

    // Only try to update email if we have email addresses and a primary email ID
    if (primary_email_address_id && email_addresses?.length) {
      let emailObj = email_addresses.find(email =>
        email.id === primary_email_address_id,
      );

      // Fallback to any verified email if the primary_email_address_id doesn't match
      if (!emailObj) {
        emailObj = email_addresses.find(email => email.verification?.status === 'verified') || email_addresses[0];
      }

      if (emailObj?.email_address) {
        updateData.email = emailObj.email_address;
      } else {
        console.warn('No valid email address found for user update, skipping email update');
      }
    }

    if (name) {
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
      throw new Error('Missing user ID for deletion');
    }

    // Delete user from database
    await db.delete(users).where(eq(users.id, id));

    console.warn(`User deleted from database: ${id}`);
  } catch (error) {
    console.error('Error handling user.deleted:', error);
    throw error;
  }
}

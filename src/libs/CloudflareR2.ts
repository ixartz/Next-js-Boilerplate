import { Buffer } from 'node:buffer';
import { Env } from './Env';

export class CloudflareR2Service {
  private publicUrl: string;

  constructor() {
    this.publicUrl = Env.CLOUDFLARE_R2_PUBLIC_URL;
  }

  private getSignedUrl(key: string): string {
    // For now, we'll use the public URL directly
    // In production, you might want to implement proper signed URLs
    return `${this.publicUrl}/${key}`;
  }

  async uploadImage(imageData: Buffer, filename: string): Promise<string> {
    const key = `images/${filename}`;

    try {
      const response = await fetch(`${this.publicUrl}/${key}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'image/png',
        },
        body: imageData as any,
      });

      if (!response.ok) {
        throw new Error(`Failed to upload image: ${response.statusText}`);
      }

      return this.getSignedUrl(key);
    } catch (error) {
      console.error('Error uploading image to R2:', error);
      throw error;
    }
  }

  async uploadVideo(videoData: Buffer, filename: string): Promise<string> {
    const key = `videos/${filename}`;

    try {
      const response = await fetch(`${this.publicUrl}/${key}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'video/mp4',
        },
        body: videoData as any,
      });

      if (!response.ok) {
        throw new Error(`Failed to upload video: ${response.statusText}`);
      }

      return this.getSignedUrl(key);
    } catch (error) {
      console.error('Error uploading video to R2:', error);
      throw error;
    }
  }

  async deleteFile(url: string): Promise<void> {
    try {
      const key = url.replace(`${this.publicUrl}/`, '');

      const response = await fetch(`${this.publicUrl}/${key}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Failed to delete file: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error deleting file from R2:', error);
      throw error;
    }
  }

  async uploadBase64Image(base64Data: string, filename: string): Promise<string> {
    // Remove data URL prefix if present
    const base64 = base64Data.replace(/^data:image\/[a-z]+;base64,/, '');
    const imageBuffer = Buffer.from(base64, 'base64');

    return this.uploadImage(imageBuffer, filename);
  }

  generateFilename(type: 'image' | 'video', userId: string): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    const extension = type === 'image' ? 'png' : 'mp4';

    return `${userId}_${timestamp}_${random}.${extension}`;
  }
}

// Export singleton instance
export const cloudflareR2Service = new CloudflareR2Service();

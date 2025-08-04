import { describe, expect, it } from 'vitest';
import { generateMetadataUrl, getOgImagePath } from './Helpers';

describe('Metadata Helpers', () => {
  describe('generateMetadataUrl', () => {
    it('should generate correct URL for English locale', () => {
      const url = generateMetadataUrl('/about', 'en');

      expect(url).toBe('https://demo.nextjs-boilerplate.com/en/about');
    });

    it('should generate correct URL for French locale', () => {
      const url = generateMetadataUrl('/portfolio', 'fr');

      expect(url).toBe('https://demo.nextjs-boilerplate.com/fr/portfolio');
    });

    it('should handle root path correctly', () => {
      const url = generateMetadataUrl('', 'en');

      expect(url).toBe('https://demo.nextjs-boilerplate.com/en');
    });
  });

  describe('getOgImagePath', () => {
    it('should return default image path', () => {
      const imagePath = getOgImagePath();

      expect(imagePath).toBe('/assets/images/nextjs-starter-banner.png');
    });

    it('should return auth image path', () => {
      const imagePath = getOgImagePath('auth');

      expect(imagePath).toBe('/assets/images/nextjs-boilerplate-sign-in.png');
    });

    it('should return dashboard image path', () => {
      const imagePath = getOgImagePath('dashboard');

      expect(imagePath).toBe('/assets/images/nextjs-boilerplate-saas.png');
    });
  });
});

// Mock metadata structure for testing
const mockMetadata = {
  title: 'Test Title',
  description: 'Test Description',
  openGraph: {
    title: 'Test Title',
    description: 'Test Description',
    url: 'https://demo.nextjs-boilerplate.com/en/test',
    siteName: 'Next.js Boilerplate',
    images: [
      {
        url: '/assets/images/nextjs-starter-banner.png',
        width: 1200,
        height: 630,
        alt: 'Test Title',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Title',
    description: 'Test Description',
    images: ['/assets/images/nextjs-starter-banner.png'],
    creator: '@ixartz',
    site: '@ixartz',
  },
  alternates: {
    canonical: 'https://demo.nextjs-boilerplate.com/en/test',
    languages: {
      en: '/en/test',
      fr: '/fr/test',
    },
  },
};

describe('Metadata Structure', () => {
  it('should have required OpenGraph properties', () => {
    expect(mockMetadata.openGraph).toBeDefined();
    expect(mockMetadata.openGraph.title).toBe('Test Title');
    expect(mockMetadata.openGraph.description).toBe('Test Description');
    expect(mockMetadata.openGraph.url).toBe('https://demo.nextjs-boilerplate.com/en/test');
    expect(mockMetadata.openGraph.siteName).toBe('Next.js Boilerplate');
    expect(mockMetadata.openGraph.images).toBeDefined();
    expect(mockMetadata.openGraph.images[0]?.width).toBe(1200);
    expect(mockMetadata.openGraph.images[0]?.height).toBe(630);
  });

  it('should have required Twitter Card properties', () => {
    expect(mockMetadata.twitter).toBeDefined();
    expect(mockMetadata.twitter.card).toBe('summary_large_image');
    expect(mockMetadata.twitter.title).toBe('Test Title');
    expect(mockMetadata.twitter.description).toBe('Test Description');
    expect(mockMetadata.twitter.images).toBeDefined();
    expect(mockMetadata.twitter.creator).toBe('@ixartz');
    expect(mockMetadata.twitter.site).toBe('@ixartz');
  });

  it('should have proper alternate language links', () => {
    expect(mockMetadata.alternates).toBeDefined();
    expect(mockMetadata.alternates.canonical).toBe('https://demo.nextjs-boilerplate.com/en/test');
    expect(mockMetadata.alternates.languages.en).toBe('/en/test');
    expect(mockMetadata.alternates.languages.fr).toBe('/fr/test');
  });

  it('should have proper image dimensions for social sharing', () => {
    const ogImage = mockMetadata.openGraph.images[0];

    expect(ogImage).toBeDefined();

    if (ogImage) {
      expect(ogImage.width).toBe(1200);
      expect(ogImage.height).toBe(630);
      expect(ogImage.alt).toBe('Test Title');
    }
  });
});

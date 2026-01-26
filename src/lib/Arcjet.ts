import arcjet, { shield } from '@arcjet/next';

// Create a base Arcjet instance which can be imported and extended in each route.
export default arcjet({
  // Get your site key from https://launch.arcjet.com/Q6eLbRE
  // Use `process.env` instead of Env to reduce bundle size in middleware
  key: process.env.ARCJET_KEY ?? '',
  // Identify the user by their IP address
  characteristics: ['ip.src'],
  rules: [
    // Protect against common attacks with Arcjet Shield
    shield({
      mode: 'LIVE', // will block requests. Use "DRY_RUN" to log only
    }),
    // Other rules are added in different routes
  ],
});

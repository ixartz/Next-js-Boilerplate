// Import `defineConfig` from unlighthouse create import error

export default {
  scanner: {
    maxRoutes: 2, // Increase this number to test more routes
  },
  ci: {
    budget: 80, // Fail if the score is below the budget for any lighthouse category
  },
};

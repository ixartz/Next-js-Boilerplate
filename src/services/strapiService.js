import axios from 'axios';

const STRAPI_API_URL = process.env.STRAPI_API_URL;
const TOKEN = process.env.TOKEN;

const strapiService = {
  async getPostByCategoryAndSlug(slug, category) {
    const url = `${STRAPI_API_URL}posts?filters[category][slug][$eq]=${category}&filters[slug][$eq]=${slug}`;

    console.log(`Fetching URL: ${url}`);

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('API Response:', response.data);

      if (
        response.data &&
        Array.isArray(response.data.data) && // Changed from response.data to response.data.data
        response.data.data.length > 0
      ) {
        return response.data.data[0];
      } else {
        throw new Error('Post not found');
      }
    } catch (error) {
      console.error(`Error fetching post from ${url}:`, error);
      throw error;
    }
  },
};

export default strapiService;

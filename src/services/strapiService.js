import axios from 'axios'

const STRAPI_API_URL = process.env.STRAPI_API_URL
const TOKEN = process.env.STRAPI_TOKEN

const strapiService = {
  async getPostByCategoryAndSlug(slug, category) {
    const url = `${STRAPI_API_URL}posts?filters[category][slug][$eq]=${category}&filters[slug][$eq]=${slug}`

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
        },
      })

      if (
        response.data &&
        Array.isArray(response.data.data) &&
        response.data.data.length > 0
      ) {
        return response.data.data[0].attributes
      } else {
        throw new Error('Post not found')
      }
    } catch (error) {
      console.error(`Error fetching post from ${url}:`, error)
      throw error
    }
  },

  async getAllPosts() {
    const url = `${STRAPI_API_URL}posts`

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
        },
      })

      if (
        response.data &&
        Array.isArray(response.data.data) &&
        response.data.data.length > 0
      ) {
        return response.data.data.map((post) => post.attributes)
      } else {
        throw new Error('No posts found')
      }
    } catch (error) {
      console.error(`Error fetching posts from ${url}:`, error)
      throw error
    }
  },
}

export default strapiService

import strapiService from '~/services/strapiService';

export default {
  async asyncData({ params }) {
    console.log(
      'Fetching post for category:',
      params.category,
      'and slug:',
      params.slug
    );
    try {
      const post = await strapiService.getPostByCategoryAndSlug(
        params.slug,
        params.category
      );
      console.log('Fetched post:', post);
      return { post };
    } catch (error) {
      console.error('Error fetching post:', error);
      return { post: null };
    }
  },
  data() {
    return {
      post: {},
    };
  },
};

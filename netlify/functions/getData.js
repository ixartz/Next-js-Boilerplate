// netlify-functions/getData.js
exports.handler = async () => {
  try {
    const response = await fetch('https://api.example.com/data'); // Replace with your actual API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const jsonData = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(jsonData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),
    };
  }
};

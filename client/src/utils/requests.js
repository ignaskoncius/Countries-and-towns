const axios = require('axios');

const allItemsBaseUrl = 'http://localhost:4000/allPosts';

export const getAllItems = async () => {
  try {
    const allItems = await axios.get(allItemsBaseUrl);
    console.log(allItems.data);
    return allItems.data;
  } catch (error) {
    console.log(error);
  }
};

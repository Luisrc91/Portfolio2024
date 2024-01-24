import axios from 'axios';

const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

export const getStarredRepositories = async () => {
  try {
    const response = await githubAPI.get('/user/starred');
    return response.data;
  } catch (error) {
    console.error('Error fetching starred repositories:', error);
    throw error;
  }
};

export const getRepositoryDetails = async (owner, repo) => {
  try {
    const response = await githubAPI.get(`/repos/${owner}/${repo}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for ${owner}/${repo}:`, error);
    throw error;
  }
};

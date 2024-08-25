import axios from 'axios';

export const fetchProjects = async () => {
  const response = await axios.get('https://admin.naxa.com.np/api/projects');
  return response.data;
};
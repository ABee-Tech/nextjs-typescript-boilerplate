import axios from '@utils/axios';

export const fetchTests = async () => {
  let { data } = await axios.get('/posts');

  data = data.slice(0, 2);

  return data;
};

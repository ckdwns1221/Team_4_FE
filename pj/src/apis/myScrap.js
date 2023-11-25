import axios from './config';
import tokenConfig from './headerConfig';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getMyScrap(category, queries) {
    return axios.get(`my/${category}/posts`, queries, tokenConfig());
  },
  getSearchScrap(queries) {
    return axios.get(`my/posts`, queries, tokenConfig());
  },
};

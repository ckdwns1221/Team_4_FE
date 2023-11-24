import axios from './config';
import tokenConfig from './headerConfig';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  postLike(postId) {
    return axios.get(`likes/posts/${postId}`, tokenConfig());
  },
  deleteLike(postId) {
    return axios.get(`likes/posts/${postId}`, tokenConfig());
  },
  getLike(postId) {
    return axios.get(`likes/posts/${postId}`, tokenConfig());
  },
};

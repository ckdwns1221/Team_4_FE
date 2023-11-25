import axios from 'axios';

axios.defaults.baseURL = 'https://www.twoneone.store/api/';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

export default axios;

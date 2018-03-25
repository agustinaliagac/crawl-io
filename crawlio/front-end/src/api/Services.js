/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const http = {
  search: term => axios.get(`${process.env.REACT_APP_API_HOST}/api/search?searchTerm=${term}`),
};

export {
  http,
};

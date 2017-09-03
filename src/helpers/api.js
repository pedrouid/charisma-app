import axios from 'axios';

/**
 * Configuration for  api instance
 * @type axios instance
 */
const api = axios.create({
  baseURL: '/api',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

/**
 * @desc submits email subscription to Mailchimp
 * @param  {String} [email='']
 * @param  {String} [password='']
 * @return {Promise}
 */
export const apiSubscribe = (email = '') => api.post('/session', { email });

// utils/API.js
import axios from 'axios';
import { API_BASE } from '../config/constants';

export default axios.create({
  baseURL: `${API_BASE}`,
});

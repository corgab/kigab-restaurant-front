import apiClient from './axios';

export const fetchGalleries = () => apiClient.get('/galleries');

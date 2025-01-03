import apiClient from './axios';

// Recupera tutte le sezioni
export const fetchSections = () => apiClient.get('/sections');

// Recupera singola sezione
export const fetchSection = (sectionSlug) =>
  apiClient.get(`/sections/${sectionSlug}`);

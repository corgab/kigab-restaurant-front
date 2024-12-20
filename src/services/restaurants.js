import apiClient from './axios';

// Recupera tutti gli utenti
export const fetchRestaurants = () => apiClient.get('/restaurants');

// Crea un nuovo ristorante
export const createRestaurant = (restaurantData) =>
  apiClient.post('/restaurants', restaurantData);

// Elimina un ristorante
export const deleteRestaurant = (restauratId) =>
  apiClient.delete(`/users/${restauratId}`);

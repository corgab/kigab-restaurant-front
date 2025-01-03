import apiClient from './axios';

// Recupera tutti gli utenti
export const fetchRestaurants = () => apiClient.get('/restaurants');

// Crea un nuovo ristorante
// export const createRestaurant = (restaurantData) =>
//   apiClient.post('/restaurant', restaurantData);

// Per ora da usare questo show
export const fetchRestaurant = () => apiClient.get('/restaurants/1');

// Elimina un ristorante
export const deleteRestaurant = (restauratId) =>
  apiClient.delete(`/users/${restauratId}`);

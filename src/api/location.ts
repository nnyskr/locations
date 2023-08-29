const API_URL = 'https://6033c4d8843b15001793194e.mockapi.io/api';

export const endpoints = {
  locations: `${API_URL}/locations`,
};

export const getLocations = async () => fetch(endpoints.locations);

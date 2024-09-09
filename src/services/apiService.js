// filename: ./src/services/apiService.js


// No se usò exponential backoff sino linial para comodidad de quien pruebe la app. En exponencial se usarìa 500 ms, 1000 ms, 2000 ms, 4000 ms etc, dependiendo de criterio de cliente o PM uncon con maxAttempts.

import { getProducts } from '../data/mockAPI';

export const fetchAPI = async ({ categoryId = null, productId = null } = {}) => {
  let attempts = 0;
  const maxAttempts = 3;

  const tryFetch = async () => {
    attempts++;
    try {
      const dataPromise = getProducts({ categoryId, productId });
      const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 3000));

      const data = await Promise.race([dataPromise, timeoutPromise]);
      return { data };
    } catch (error) {
      return attempts < maxAttempts ? { retry: true } : { fail: true };
    }
  };

  for (let delay of [500, 1000, 2000]) {
    const result = await tryFetch();

    if (result.data) {
      return result.data;
    }

    if (result.fail) {
      return { fail: true };
    }

    console.warn(`Intento fallido para conectar con el servidor. Reintentando en ${delay*1000} segundos...`);
    await new Promise(res => setTimeout(res, delay));
  }

  return { fail: true };
};

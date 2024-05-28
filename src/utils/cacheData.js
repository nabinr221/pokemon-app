import axios from 'axios';

/**
 * Cleans up localStorage by removing the oldest entries if quota is exceeded.
 */

const cleanUpLocalStorage = () => {
  const keys = Object.keys(localStorage).map((key) => ({
    key,
    timestamp: JSON.parse(localStorage.getItem(key)).timestamp,
  }));

  // Sort keys by timestamp
  keys.sort((a, b) => a.timestamp - b.timestamp);

  // Remove the oldest entries until we are within the quota
  while (keys.length > 0) {
    localStorage.removeItem(keys.shift().key);
    if (localStorage.length < 5 * 1024 * 1024) break; // Check if within quota (5MB)
  }
};

/**
 * Fetches data from cache or makes a network request if not cached or expired.
 * @param {string} key - The cache key.
 * @param {string} url - The API endpoint.
 * @param {number} ttl - Time-to-live for cache in seconds.
 * @returns {Promise<any>} - The fetched data.
 */
export const fetchWithCache = async (key, url, ttl = 3600) => {
  const now = Date.now();
  const cached = JSON.parse(localStorage.getItem(key));

  if (cached && now - cached.timestamp < ttl * 1000) {
    return cached.data;
  }

  try {
    const response = await axios.get(url);
    const data = response.data;

    try {
      localStorage.setItem(key, JSON.stringify({ data, timestamp: now }));
    } catch (error) {
      if (error.name === 'QuotaExceededError') {
        cleanUpLocalStorage();
        localStorage.setItem(key, JSON.stringify({ data, timestamp: now }));
      } else {
        throw error;
      }
    }

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

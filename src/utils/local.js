const TokenKey = 'token';

export const setLocal = function(data) {
  for (const key in data) {
    localStorage.setItem(key, data[key]);
  }
};

export function getToken() {
  return localStorage.getItem(TokenKey);
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token);
}

export function removeToken() {
  return localStorage.removeItem(TokenKey);
}

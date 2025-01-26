import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const customBaseQuery = (baseUrl: string) => fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    headers.set("ngrok-skip-browser-warning", "*");
    headers.set('Accept', '*/*');
    headers.set('Access-Control-Allow-Origin', '*');
    return headers;
  },
});

export const baseQueryWithReauth = (baseUrl: string) => async (args: any, api: any, extraOptions: any) => {
  let result = await customBaseQuery(baseUrl)(args, api, extraOptions);

  // Если получаем 401, пробуем обновить токен
  if (result.error && result.error.status === 401) {
    const refreshResult = await customBaseQuery(baseUrl)({
      url: 'auth/refresh',
      method: 'POST',
    }, api, extraOptions);

    // Если обновление токена прошло успешно
    if (refreshResult.data) {
      // Обновите токен в localStorage, если это необходимо
      const newToken = refreshResult.data.token; // Предположим, что новый токен возвращается в этом поле
      const refreshToken = refreshResult.data.refreshToken; // Предположим, что новый токен возвращается в этом поле
      localStorage.setItem('token', newToken);
      localStorage.setItem('refreshToken', refreshToken);

      // Повторите исходный запрос с новым токеном
      result = await customBaseQuery(baseUrl)(args, api, extraOptions);
    } else {
      // Если обновление токена также вернуло 401, редиректим на страницу входа
      localStorage.clear();
      window.location.href = '/login';
    }
  }

  return result;
};


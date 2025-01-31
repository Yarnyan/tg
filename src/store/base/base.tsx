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

  if (result.error && result.error.status === 401) {
    const userId = localStorage.getItem('userId'); 
    const accessToken = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');

    const body = {
      userId: userId ? parseInt(userId, 10) : 0,
      accessToken: accessToken || '',
      refreshToken: refreshToken || '',
    };

    const refreshResult = await customBaseQuery(baseUrl)({
      url: 'auth/refresh-token',
      method: 'POST',
      body, 
    }, api, extraOptions);

    if (refreshResult.data) {
      const newToken = refreshResult.data.accessToken; 
      const newRefreshToken = refreshResult.data.refreshToken; 
      localStorage.setItem('token', newToken);
      localStorage.setItem('refreshToken', newRefreshToken);

      result = await customBaseQuery(baseUrl)(args, api, extraOptions);
    } else {
      localStorage.clear();
      window.location.href = '/login';
    }
  }

  return result;
};
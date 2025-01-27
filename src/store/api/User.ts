import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '../base/base'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: baseQueryWithReauth('http://localhost:5199/api'),
    endpoints: (builder) => ({
        getUserByUsername: builder.query({
            query: (username) => ({
                url: `User/getUserByUsername?username=${username}`,
                method: 'GET',
            }),
        }),
        getUserByPhone: builder.query({
            query: (phone) => ({
                url: `User/getUserByPhone?phone=${phone}`,
                method: 'GET',
            }),
        }),
    }),
})

export const { useGetUserByUsernameQuery, useGetUserByPhoneQuery } = userApi
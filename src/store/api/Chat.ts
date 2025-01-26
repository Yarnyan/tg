import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '../base/base'

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: baseQueryWithReauth('http://localhost:5199/api'),
  endpoints: (builder) => ({
    getMessage: builder.query({
      query: (data) => ({
        url: 'Chat/messages',
        method: 'GET',
        // body: data
      })
    }),
    sendMessage: builder.mutation({
      query: (data) => ({
        url: 'Chat/sendMessage',
        method: 'POST',
        body: data
      })
    })
  }),
})

export const { useSendMessageMutation, useGetMessageQuery } = chatApi
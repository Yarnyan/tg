import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '../base/base'

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: baseQueryWithReauth('http://localhost:5199/api'),
  endpoints: (builder) => ({
    getMessage: builder.query({
      query: () => ({
        url: 'Chat/messages',
        method: 'GET',
      })
    }),
    sendMessage: builder.mutation({
      query: (data) => ({
        url: 'Chat/sendMessageUser',
        method: 'POST',
        body: data
      })
    }),
    sendMessageChat: builder.mutation({
      query: (data) => ({
        url: 'Chat/sendMessageChat',
        method: 'POST',
        body: data
      })
    }),
    getChats: builder.query({
      query: () => ({
        url: 'Chat/chats',
        method: 'GET',
        // body: data
      })
    }),

  }),
})

export const { useSendMessageMutation, useGetMessageQuery, useGetChatsQuery, useSendMessageChatMutation } = chatApi
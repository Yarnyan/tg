import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '../base/base'

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: baseQueryWithReauth('http://localhost:5199/api'),
  tagTypes: ['Messages'],
  endpoints: (builder) => ({
    getMessage: builder.query({
      query: (data) => ({
        url: `Chat/messages?chatId=${data}&isSecret=false`,
        method: 'GET',
      }),
      providesTags: ['Messages'],
    }),
    sendMessage: builder.mutation({
      query: (data) => ({
        url: 'Chat/sendMessageUser',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Messages'],
    }),
    sendMessageChat: builder.mutation({
      query: (data) => ({
        url: 'Chat/sendMessageChat',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Messages'],
    }),
    getChats: builder.query({
      query: () => ({
        url: 'Chat/chats',
        method: 'GET',
      }),
      providesTags: ['Messages'],
    }),
  }),
})

export const { useSendMessageMutation, useGetMessageQuery, useGetChatsQuery, useSendMessageChatMutation } = chatApi
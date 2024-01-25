import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from 'common/core/axios-base-query'
import { GlobalFeed } from './dto/globalFeedIn'

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api',
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlobalFeed, any>({
      query: () => ({
        url: '/articles',
        method: 'get',
      }),
    }),
  }),
})

export const { useGetGlobalFeedQuery } = feedApi

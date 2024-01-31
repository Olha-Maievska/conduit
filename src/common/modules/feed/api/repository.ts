import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from 'core/axios-base-query'
import { GlobalFeed } from './dto/globalFeedIn'
import { FEED_PAGE_SIZE } from '../consts'
import { PopularTags } from './dto/popular-tags.in'

interface GlobalFeedParams {
  page: number
  tag: string | null
}

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api',
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlobalFeed, GlobalFeedParams>({
      query: ({ page, tag }) => ({
        url: '/articles',
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
          tag,
        },
      }),
    }),
    getPopularTags: builder.query<PopularTags, any>({
      query: () => ({
        url: '/tags',
      }),
    }),
  }),
})

export const { useGetGlobalFeedQuery, useGetPopularTagsQuery } = feedApi

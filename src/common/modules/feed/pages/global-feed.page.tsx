import { FC } from 'react'
import Banner from 'common/components/banner/banner.components'
import Feed from '../components/feed/feed.components'
import { useGetGlobalFeedQuery } from '../api/repository'
import { useSearchParams } from 'react-router-dom'

interface GlobalFeedPageProps {}

export const GlobalFeedPage: FC<GlobalFeedPageProps> = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 0
  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get('tag'),
  })

  return (
    <>
      <Banner />
      <Feed
        data={data}
        error={error}
        isLoading={isLoading}
        isFetching={isFetching}
      />
    </>
  )
}

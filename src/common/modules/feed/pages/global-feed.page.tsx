import { FC } from 'react'
import Banner from 'common/components/banner/banner.components'
import Feed from '../components/feed/feed.components'

interface GlobalFeedPageProps {}

export const GlobalFeedPage: FC<GlobalFeedPageProps> = () => {
  return (
    <>
      <Banner />
      <Feed />
    </>
  )
}

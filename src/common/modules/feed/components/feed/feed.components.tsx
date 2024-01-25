import Container from 'common/components/container/container.components'
import { FC } from 'react'
import ArticleList from '../articleList/articleList.components'
import FeedToggle from '../feedToggle/feedToggle.components'
import { useGetGlobalFeedQuery } from '../../api/repository'

interface FeedProps {}

const Feed: FC<FeedProps> = () => {
  const { data, error, isLoading } = useGetGlobalFeedQuery('')

  if (isLoading) {
    return <Container>Feed loading...</Container>
  }

  if (error) {
    return <Container>Error while loading feed...</Container>
  }

  return (
    <Container>
      <FeedToggle />
      <div className="flex">
        <ArticleList list={data?.articles} />
        <div className="w-1/4 inline-block columns-2xs"> dfgfzfgz</div>
      </div>
    </Container>
  )
}

export default Feed

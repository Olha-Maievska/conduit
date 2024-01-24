import Container from 'common/components/container/container.components'
import { FC } from 'react'
import ArticleList from '../articleList/articleList.components'
import FeedToggle from '../feedToggle/feedToggle.components'

interface FeedProps {}

const Feed: FC<FeedProps> = () => {
  return (
    <Container>
      <FeedToggle />
      <div className="flex">
        <ArticleList />
        <div className="w-1/4 inline-block columns-2xs"> dfgfzfgz</div>
      </div>
    </Container>
  )
}

export default Feed

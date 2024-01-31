import Container from 'common/components/container/container.components'
import { FC, useState } from 'react'
import ArticleList from '../articleList/articleList.components'
import FeedToggle from '../feedToggle/feedToggle.components'
import { useGetGlobalFeedQuery } from '../../api/repository'
import ReactPaginate from 'react-paginate'
import { FEED_PAGE_SIZE } from '../../consts'
import { useSearchParams } from 'react-router-dom'
import { serializeSearchParams } from 'utils/router'
import { TagCloud } from '../tagCloud/tagCloud.components'

interface FeedProps {}

const Feed: FC<FeedProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [page, setPage] = useState(
    searchParams.get('page') ? Number(searchParams.get('page')) : 0
  )

  const handlePage = ({ selected }: { selected: number }) => {
    setPage(selected)
    setSearchParams(serializeSearchParams({ page: String(selected) }))
  }

  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get('tag'),
  })

  if (isLoading || isFetching) {
    return <Container>Feed loading...</Container>
  }

  if (error) {
    return <Container>Error while loading feed...</Container>
  }

  return (
    <Container>
      <FeedToggle />
      <div className="flex">
        <div className="w-3/4">
          <ArticleList list={data?.articles || []} />
          <nav className="my-6">
            <ReactPaginate
              pageCount={Math.ceil((data?.articlesCount || 0) / FEED_PAGE_SIZE)}
              pageRangeDisplayed={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
              previousLabel={null}
              nextLabel={null}
              containerClassName="flex"
              pageLinkClassName="text-theme-green p-2 bg-white border border-theme-green -ml-px hover:bg-theme-green hover:text-white group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(2)]:rounded-r"
              pageClassName="group"
              activeClassName="active group"
              activeLinkClassName="group-[.active]:bg-theme-green group-[.active]:text-white group-[.active]:border-theme-green"
              onPageChange={handlePage}
              forcePage={page}
            />
          </nav>
        </div>
        <div className="w-1/4 pl-3">
          <TagCloud />
        </div>
      </div>
    </Container>
  )
}

export default Feed

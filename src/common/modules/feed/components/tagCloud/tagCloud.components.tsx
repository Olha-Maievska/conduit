import { FC } from 'react'
import TagList from '../tagList/tagList.compnents'
import { useGetPopularTagsQuery } from '../../api/repository'
import Container from 'common/components/container/container.components'

interface TagCloudProps {}

export const TagCloud: FC<TagCloudProps> = () => {
  const { data, isFetching, isLoading, error } = useGetPopularTagsQuery('')

  if (isLoading || isFetching) {
    return (
      <div className="p-3 pt-1.5 bg-theme -dark">
        <p className="mb-2">Loading popular tags</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-3 pt-1.5 bg-theme -dark">
        <p className="mb-2">Error while loading popular tags</p>
      </div>
    )
  }

  return (
    <div className="bg-gray-200 p-4 pt-1.5 rounded-2xl">
      <p className="mb-2">Popular tags</p>
      <TagList list={data?.tags} itemStyle="DARK" itemAs="a" />
    </div>
  )
}

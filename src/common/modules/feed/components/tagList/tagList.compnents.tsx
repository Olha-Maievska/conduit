import { FC } from 'react'

interface TagListProps {
  list: string[]
}

const TagList: FC<TagListProps> = ({ list }) => {
  return (
    <ul className="flex">
      {list.map((tag) => (
        <li
          className="font-light text-date border border-theme-gray text-theme-blue mr-1 mb-0.2 px-tag rounded-tag"
          key={tag}
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default TagList

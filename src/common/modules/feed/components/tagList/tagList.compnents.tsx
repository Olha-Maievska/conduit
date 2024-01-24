import { FC } from 'react'

interface TagListProps {}

const TagList: FC<TagListProps> = () => {
  return (
    <ul className="flex">
      <li className="font-light text-date border border-theme-gray text-theme-blue mr-1 mb-0.2 px-tag rounded-tag">
        dg
      </li>
      <li className="font-light text-date border border-theme-gray text-theme-blue mr-1 mb-0.2 px-tag rounded-tag">
        dg
      </li>
      <li className="font-light text-date border border-theme-gray text-theme-blue mr-1 mb-0.2 px-tag rounded-tag">
        dg
      </li>
    </ul>
  )
}

export default TagList

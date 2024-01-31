import { FC } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

enum TagListStyle {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

interface TagListProps {
  list: string[] | undefined
  itemStyle?: keyof typeof TagListStyle
  itemAs?: 'li' | 'a'
}

const TagList: FC<TagListProps> = ({
  list = [],
  itemStyle = TagListStyle.LIGHT,
  itemAs = 'li',
}) => {
  const itemClasses = clsx(
    'text-date border mr-1 mb-1 px-tag rounded-tag font-normal',
    {
      'border-theme-gray text-theme-dark': itemStyle === TagListStyle.LIGHT,
      'bg-theme-green border-theme-green text-white hover:bg-teal-950 hover:border-teal-950':
        itemStyle === TagListStyle.DARK,
      'hover:text-white hover:no-underline':
        itemStyle === TagListStyle.DARK && itemAs === 'a',
    }
  )
  return (
    <ul className="flex flex-wrap">
      {list.map((tag) => {
        return itemAs === 'li' ? (
          <li className={itemClasses} key={tag}>
            {tag}
          </li>
        ) : (
          <Link to={`/?tag=${tag}`} className={itemClasses} key={tag}>
            {tag}
          </Link>
        )
      })}
    </ul>
  )
}

export default TagList

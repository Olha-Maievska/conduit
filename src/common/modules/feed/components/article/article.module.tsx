import { FC } from 'react'
import { Link } from 'react-router-dom'
import FavoriteButton from '../favoriteBtn/favoriteButton.components'
import TagList from '../tagList/tagList.compnents'
import { FeedArticle } from '../../api/dto/globalFeedIn'
import { DateTime } from 'luxon'

interface ArticleProps extends FeedArticle {}

const Article: FC<ArticleProps> = ({
  author,
  createdAt,
  favoritesCount,
  title,
  description,
  tagList,
}) => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex justify-between">
          <div className="flex">
            <Link to={`/@${author.username}`}>
              <img
                src={author.image}
                alt={`${author.username} avatar`}
                className="inline-block h-8 w-8 rounded-full"
              />
            </Link>
            <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col">
              <Link to={`/@${author.username}`} className="font-medium">
                {author.username}
              </Link>
              <span className="text-theme-blue text-date">
                {DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_FULL)}
              </span>
            </div>
          </div>
          <FavoriteButton count={favoritesCount} />
        </div>
        <Link to="/" className="hover:no-underline">
          <h1 className="mb-1 font-semibold text-2xl text-theme-dark">
            {title}
          </h1>
          <p className="text-theme-blue font-light mb-1">{description}</p>
          <div className="flex justify-between">
            <span className="text-theme-teal font-light text-date font-normal">
              Read more
            </span>
            <TagList list={tagList} />
          </div>
        </Link>
      </div>
    </article>
  )
}

export default Article

import { FC } from 'react'
import { Link } from 'react-router-dom'
import FavoriteButton from '../favoriteBtn/favoriteButton.components'
import TagList from '../tagList/tagList.compnents'

interface ArticleProps {}

const Article: FC<ArticleProps> = () => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex">
          <Link to="/@nekwin">
            <img
              src=""
              alt="nekwin"
              className="inline-block h-8 w-8 rounded-full"
            />
          </Link>
          <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col">
            <Link to="" className="font-medium">
              Olha Maievska
            </Link>
            <span className="text-theme-blue text-date">9 october, 2022</span>
          </div>
          <FavoriteButton />
        </div>
        <Link to="/" className="hover:no-underline">
          <h1 className="mb-1 font-semibold text-2xl text-theme-dark">
            Some title
          </h1>
          <p className="text-theme-blue font-light mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate
            cupiditate assumenda eius quos! Eum sequi deserunt adipisci, ad
            ducimus dolorum soluta nihil temporibus hic suscipit et! Voluptate,
            saepe harum?
          </p>
          <div className="flex justify-between">
            <span className="text-theme-teal font-light text-date">
              Read more
            </span>
            <TagList />
          </div>
        </Link>
      </div>
    </article>
  )
}

export default Article

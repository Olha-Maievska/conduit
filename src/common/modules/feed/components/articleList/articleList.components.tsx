import { FC } from 'react'
import Article from '../article/article.module'
import { FeedArticle } from '../../api/dto/globalFeedIn'

interface ArticleListProps {
  list: FeedArticle[]
}

const ArticleList: FC<ArticleListProps> = ({ list }) => {
  return (
    <div className="w-3/4 ">
      {list.map((article) => (
        <Article key={article.slug} {...article} />
      ))}
    </div>
  )
}

export default ArticleList

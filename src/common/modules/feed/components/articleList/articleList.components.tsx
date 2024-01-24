import { FC } from 'react'
import Article from '../article/article.module'

interface ArticleListProps {}

const ArticleList: FC<ArticleListProps> = () => {
  return (
    <div className="w-3/4 ">
      <Article />
      <Article />
      <Article />
    </div>
  )
}

export default ArticleList

import { FC } from 'react'
import Header from './common/components/header/header.components'
import Banner from 'common/components/banner/banner.components'
import Article from 'common/modules/feed/components/article/article.module'

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className="content">
      <Header />
      <Banner />
      <Article />
    </div>
  )
}

export default App

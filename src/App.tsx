import { FC } from 'react'
import Header from './common/components/header/header.components'
import Banner from 'common/components/banner/banner.components'
import Feed from 'common/modules/feed/components/feed/feed.components'

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className="content">
      <Header />
      <Banner />
      <Feed />
    </div>
  )
}

export default App

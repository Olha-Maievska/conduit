import { FC } from 'react'
import Header from './common/components/header/header.components'
import Banner from 'common/components/banner/banner.components'

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className="content">
      <Header />
      <Banner />
    </div>
  )
}

export default App

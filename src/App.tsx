import { FC } from 'react'
import Header from './common/components/header/header.components'

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className="content">
      <Header />
    </div>
  )
}

export default App

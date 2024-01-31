import { FC } from 'react'
import Header from './common/components/header/header.components'
import { Route, Routes } from 'react-router-dom'
import { GlobalFeedPage } from 'common/modules/feed/pages/global-feed.page'
import { ProfilePage } from 'common/modules/profile/pages/profile.page'

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className="content mb-8">
      <Header />
      <Routes>
        <Route path="/" element={<GlobalFeedPage />} />
        <Route path="/@:profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App

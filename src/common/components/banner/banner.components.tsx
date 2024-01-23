import { FC } from 'react'
import Container from '../container/container.components'

interface BannerProps {}

const Banner: FC<BannerProps> = () => {
  return (
    <div className="bg-theme-green shadow-banner text-theme-gray p-8 mb-8">
      <Container>
        <h1 className="font-titilium drop-shadow-logo text-center text-logo pb-2">
          conduit
        </h1>
        <p className="text-center fort-light">
          A place to share your knowledge.
        </p>
      </Container>
    </div>
  )
}

export default Banner

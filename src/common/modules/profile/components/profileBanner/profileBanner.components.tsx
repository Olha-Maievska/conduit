import Container from 'common/components/container/container.components'
import { FC } from 'react'
import FollowBtn from '../followBtn/followBtn.components'

interface ProfileBannerProps {}

export const ProfileBanner: FC<ProfileBannerProps> = () => {
  return (
    <div className="bg-gray-100 pt-8 pb-4">
      <Container>
        <div>
          <img
            className="w-25 h-25 rounded-full mx-auto mb-4"
            src=""
            alt="name avatar"
          />
          <h2 className="text-center font-bold text-2xl">some name</h2>
        </div>
        <div className="flex justify-end">
          <FollowBtn />
        </div>
      </Container>
    </div>
  )
}

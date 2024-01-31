import { FC } from 'react'
import { ProfileBanner } from '../components/profileBanner/profileBanner.components'

interface ProfilePageProps {}

export const ProfilePage: FC<ProfilePageProps> = () => {
  return (
    <>
      <ProfileBanner />
    </>
  )
}

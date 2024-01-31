import { FC } from 'react'
import IonIcon from '@reacticons/ionicons'

interface FollowBtnProps {}

const FollowBtn: FC<FollowBtnProps> = () => {
  return (
    <button className="text-center text-theme-teal flex items-center cursor-pointer select-none py-1 px-2 text-sm rounded-buttonSm border border-theme-teal hover:bg-theme-teal hover:text-theme-green hover:border-theme-green focus:border-theme-green active:border-theme-green">
      <IonIcon name="add-outline"></IonIcon>
      <span className="mr-1"> FollowBtn John</span>
    </button>
  )
}

export default FollowBtn

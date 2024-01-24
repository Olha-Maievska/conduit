import { FC } from 'react'
import IonIcon from '@reacticons/ionicons'

interface FavoriteButtonProps {}

const FavoriteButton: FC<FavoriteButtonProps> = () => {
  return (
    <button className="text-theme-green border border-theme-green flex items-center cursor-pointer select-none py-1 px-2 text-sm rounded-buttonSm hover:text-white hover:bg-theme-green">
      <IonIcon name="heart"></IonIcon>
      <span className="ml-1 font-normal">70</span>
    </button>
  )
}

export default FavoriteButton

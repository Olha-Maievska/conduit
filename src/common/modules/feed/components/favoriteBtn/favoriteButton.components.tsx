import { FC } from 'react'
import IonIcon from '@reacticons/ionicons'

interface FavoriteButtonProps {
  count: number
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ count }) => {
  return (
    <button className="text-theme-green border border-theme-green flex items-center cursor-pointer select-none py-1 px-2 text-sm rounded-buttonSm hover:text-white hover:bg-theme-green">
      <IonIcon name="heart" />
      <span className="ml-1 font-normal">{count}</span>
    </button>
  )
}

export default FavoriteButton

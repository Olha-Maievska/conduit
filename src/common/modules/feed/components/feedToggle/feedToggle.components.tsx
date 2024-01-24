import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface FeedToggleProps {}

const FeedToggle: FC<FeedToggleProps> = () => {
  return (
    <div className="h-8">
      <ul className="flex">
        <li>
          <NavLink
            to="/"
            className="bg-white border-theme-green border-b-2 py-2 px-4"
          >
            Global feed
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default FeedToggle

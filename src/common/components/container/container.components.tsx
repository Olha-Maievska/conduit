import { FC, PropsWithChildren } from 'react'
interface ContainerProps {}

const Container: FC<PropsWithChildren<ContainerProps>> = ({ children }) => {
  return <div className="max-w-screen-xl mx-auto">{children}</div>
}

export default Container

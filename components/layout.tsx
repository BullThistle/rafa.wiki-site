import { Navbar } from './navbar'

export const Layout = ({
  children
}: {
  children: JSX.Element | JSX.Element[]
}) => (
  <div className={`h-screen`}>
    <Navbar />
    {children}
  </div>
)

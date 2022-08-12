import { Navbar } from './navbar'

export const Layout = ({
  children
}: {
  children: JSX.Element | JSX.Element[]
}) => (
  <div
    className={`
			h-screen
			bg-white dark:bg-black
			text-black dark:text-white
		`}>
    <Navbar />
    {children}
  </div>
)

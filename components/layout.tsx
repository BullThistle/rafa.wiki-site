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
			text-slate-700 dark:text-white
		`}>
    <Navbar />
    {children}
  </div>
)

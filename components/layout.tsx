export const Layout = ({
  children
}: {
  children: JSX.Element | JSX.Element[]
}) => (
  <div
    className={`
			h-screen flex
			bg-white dark:bg-slate-800
			text-slate-700 dark:text-white
	`}>
    <div className='max-w-sm mx-auto mt-10'>{children}</div>
  </div>
)

import { Companies } from '../components/resume/companies'
import { RightColumnItems } from '../components/resume/right-column-items'

const Resume = () => (
  <div className='flex justify-center'>
    <div className='mb-20 max-w-4xl sm:flex sm:flex-auto sm:flex-nowrap'>
      <div className='max-w-2xl flex-auto px-8'>
        <p className='top-16 left-7 text-2xl font-bold'>RAFAEL FURRY</p>
        <p className='text-sm'>Full Stack Developer</p>
        <p className='mt-5 font-bold'>PROFILE</p>
        <p className='ml-3 mt-2 text-sm'>
          User focused full stack developer with four years of professional
          experience. I enjoy working closely with product and design,
          optimizing tooling, and automating away repetition for myself and
          others.
        </p>
        <p className='mt-3 font-bold'>EXPERIENCE</p>
        <div className='ml-5 text-sm'>
          <Companies />
        </div>
      </div>
      <div
        className={`
					mt-3 pl-8 sm:mt-0 sm:flex-1  sm:flex-col sm:border-l-2 sm:border-light-gray
					sm:pl-3 sm:pr-8 sm:dark:border-gray
				`}>
        <RightColumnItems />
      </div>
    </div>
  </div>
)

export default Resume

import { Companies } from '../components/resume/companies'
import { RightColumnItems } from '../components/resume/right-column-items'

const Resume = () => (
  <div className='justify-center flex'>
    <div className='sm:flex sm:flex-auto sm:flex-nowrap max-w-4xl mb-20'>
      <div className='flex-auto max-w-2xl pr-8 pl-8'>
        <p className='text-2xl font-bold top-16 left-7'>RAFAEL FURRY</p>
        <p className='text-sm'>Full Stack Developer</p>
        <p className='mt-5 font-bold'>PROFILE</p>
        <p className='ml-3 mt-2 text-sm'>
          User focused full stack developer with four years of professional
          experience. I enjoy working closely with product and design,
          optimizing tooling, and automating away repetition for myself and
          others.
        </p>
        <p className='font-bold mt-3'>EXPERIENCE</p>
        <div className='ml-5 text-sm'>
          <Companies />
        </div>
      </div>
      <div
        className={`
					pl-8 mt-3 sm:pl-3 sm:mt-0  sm:flex-1 sm:flex-col sm:pr-8
					sm:border-l-2 sm:border-light-gray sm:dark:border-gray
				`}>
        <RightColumnItems />
      </div>
    </div>
  </div>
)

export default Resume

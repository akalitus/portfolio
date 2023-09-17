import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaGitAlt, FaNodeJs, FaNpm, FaSass } from 'react-icons/fa'

const Skills = () => {
  return (
    <section
      className="max-w-[1040px] m-auto md:pl-40 p-4"
      id='skills'>
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Skills</h1>

      <ul className="grid sm:grid-cols-3 gap-12 py-8">
        <li className='relative flex items-center justify-center min-h-[100px] w-full shadow-xl shadow-gray-400 rounded-xl'>
          <FaHtml5 className='rounded-xl' size={40} />
        </li>

        <li className='relative flex items-center justify-center min-h-[100px] w-full shadow-xl shadow-gray-400 rounded-xl'>
          <FaCss3Alt className='rounded-xl' size={40} />
        </li>

        <li className='relative flex items-center justify-center min-h-[100px] w-full shadow-xl shadow-gray-400 rounded-xl'>
          <FaSass className='rounded-xl' size={40} />
        </li>

        <li className='relative flex items-center justify-center min-h-[100px] w-full shadow-xl shadow-gray-400 rounded-xl'>
          <FaJs className='rounded-xl' size={40} />
        </li>

        <li className='relative flex items-center justify-center min-h-[100px] w-full shadow-xl shadow-gray-400 rounded-xl'>
          <FaReact className='rounded-xl' size={40} />
        </li>

        <li className='relative flex items-center justify-center min-h-[100px] w-full shadow-xl shadow-gray-400 rounded-xl'>
          <FaNodeJs className='rounded-xl' size={40} />
        </li>

        <li className='relative flex items-center justify-center min-h-[100px] w-full shadow-xl shadow-gray-400 rounded-xl'>
          <FaNpm className='rounded-xl' size={40} />
        </li>

        <li className='relative flex items-center justify-center min-h-[100px] w-full shadow-xl shadow-gray-400 rounded-xl'>
          <FaGitAlt className='rounded-xl' size={40} />
        </li>

        <li className='relative flex items-center justify-center min-h-[100px] w-full shadow-xl shadow-gray-400 rounded-xl'>
          <FaFigma className='rounded-xl' size={40} />
        </li>
      </ul>
    </section>
  )
}

export default Skills

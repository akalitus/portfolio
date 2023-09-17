import mainBg from '../assets/images/main-bg.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaInstagram, FaLinkedinIn, FaTelegram, FaGithub } from 'react-icons/fa'
import contactData from '../data/contactData'

const Home = () => {
  return (
    <section id='home'>
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={mainBg} />

      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">

        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='text-center sm:text-5xl text-4xl font-bold text-gray-800'>
            I&apos;m Sergey Ladorski
          </h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            I&apos;m a

            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'Coder',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>

          <ul className='flex justify-between pt-6 max-w-[200px] w-full'>
            <li>
              <a
                href={contactData.linkedin}>
                <FaLinkedinIn className='cursor-pointer' size={20} />
              </a>
            </li>

            <li>
              <a
                href={contactData.telegram}>
                <FaTelegram className='cursor-pointer' size={20} />
              </a>
            </li>

            <li>
              <a
                href={contactData.instagram}>
                <FaInstagram className='cursor-pointer' size={20} />
              </a>
            </li>

            <li>
              <a
                href={contactData.github}>
                <FaGithub className='cursor-pointer' size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Home

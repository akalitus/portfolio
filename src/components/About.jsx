import { FaFileDownload } from "react-icons/fa"
import cv from '../assets/Sergey_Ladorski_Frontend_developer_CV.pdf'
import aboutData from "../data/aboutData"


const About = () => {
  return (
    <section
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16"
      id='about'>
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">About Me</h1>

      <p className="text-center py-8">
        {aboutData}
      </p>

      <a
        className="flex gap-8 justify-center items-center bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg cursor-pointer"
        href={cv}
        download
      >
        Download My CV
        <FaFileDownload size={20} />
      </a>
    </section>
  )
}

export default About

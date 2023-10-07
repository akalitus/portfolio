import { FaFileDownload } from "react-icons/fa"
import cv from '../assets/pdf/Sergey_Ladorski_Frontend_developer_CV.pdf'
import aboutData from "../data/aboutData"


const About = () => {
  return (
    <section
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-8 md:py-16"
      id='about'>
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">About Me</h1>

      {aboutData.map((item, idx) => (
        <p className="text-center first-of-type:pt-8 last-of-type:pb-8"
          key={idx}
        >
        {item}
        </p>
      ))}

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

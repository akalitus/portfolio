import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail
} from "react-icons/ai"
import { GrProjects } from "react-icons/gr"
import { BsPerson, BsStack } from "react-icons/bs"

const SideNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden" />
      {
        nav
          ? (
            <nav
              className="md:hidden fixed w-full h-screen bg-white/90 flex justify-center items-center z-20">

              <ul className="w-full flex flex-col justify-center items-center">
                <li className="w-full flex justify-center">
                  <a
                    onClick={handleNav}
                    className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    href="#home">
                    <AiOutlineHome size={20} />

                    <span className="pl-4">
                      Home
                    </span>
                  </a>
                </li>

                <li className="w-full flex justify-center">
                  <a
                    onClick={handleNav}
                    className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    href="#about">
                    <BsPerson size={20} />

                    <span className="pl-4">
                      Resume
                    </span>
                  </a>
                </li>

                <li className="w-full flex justify-center">
                  <a
                    onClick={handleNav}
                    className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    href="#skills">
                    <BsStack size={20} />

                    <span className="pl-4">
                      Skills
                    </span>
                  </a>
                </li>

                <li className="w-full flex justify-center">
                  <a
                    onClick={handleNav}
                    className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    href="#projects">
                    <AiOutlineProject size={20} />

                    <span className="pl-4">
                      Projects
                    </span>
                  </a>
                </li>

                <li className="w-full flex justify-center">
                  <a
                    onClick={handleNav}
                    className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    href="#work">
                    <GrProjects size={20} />

                    <span className="pl-4">
                      Work
                    </span>
                  </a>
                </li>

                <li className="w-full flex justify-center">
                  <a
                    onClick={handleNav}
                    className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    href="#contact">
                    <AiOutlineMail size={20} />

                    <span className="pl-4">
                      Contacts
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          )
          : (
            ""
          )
      }

      <nav className="md:block hidden fixed top-[25%] z-10">
        <ul className="flex flex-col">
          <li className="flex">
            <a
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              href="#home"
            >
              <AiOutlineHome size={20} />
            </a>
          </li>

          <li className="flex">
            <a
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              href="#about"
            >
              <BsPerson size={20} />
            </a>
          </li>

          <li className="flex">
            <a
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              href="#skills"
            >
              <BsStack size={20} />
            </a>
          </li>

          <li className="flex">
            <a
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              href="#projects"
            >
              <AiOutlineProject size={20} />
            </a>
          </li>

          <li className="flex">
            <a
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              href="#work"
            >
              <GrProjects size={20} />
            </a>
          </li>

          <li className="flex">
            <a
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              href="#contact"
            >
              <AiOutlineMail size={20} />
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default SideNav

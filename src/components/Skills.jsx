import skillsData from '../data/skillsData'

const Skills = () => {
  return (
    <section
      className="max-w-[1040px] m-auto md:pl-40 p-4"
      id='skills'>
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Skills</h1>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 py-8">
        {skillsData.map((item, idx) => (
          <li className='relative flex flex-col gap-4 items-center justify-center min-h-[100px] w-full shadow-xl shadow-gray-400 rounded-xl'
            key={idx}>
            <img
              className='rounded-xl w-[50px]'
              src={item.img}
              alt={item.title} />

            <p>
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills

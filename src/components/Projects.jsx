import projectData from "../data/projectData"
import ProjectItem from "./ProjectItem"

const Projects = () => {
  return (
    <section
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16"
      id='projects'>
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>

      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quod, accusamus voluptates doloribus perferendis dicta deleniti in nostrum consectetur, exercitationem eaque optio laborum numquam eligendi fugit nemo, eveniet iste tenetur!
      </p>

      <div className="grid sm:grid-cols-2 gap-12">

        {projectData.map((item, idx) => (
          <ProjectItem
            key={idx}
            img={item.img}
            title={item.title}
            link={item.link}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects

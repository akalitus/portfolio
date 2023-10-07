import workData from '../data/workData'
import WorkItem from './WorkItem'


const Work = () => {
  return (
    <section id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-8 md:py-16'>
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>

      {workData.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </section>
  )
}

export default Work

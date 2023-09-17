import PropTypes from 'prop-types';

const ProjectItem = ({ img, title, link }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
      <img
        className='rounded-xl group-hover:opacity-10'
        src={img}
        alt={title} />

      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
          {title}

          <p className='pb-4 pt-2 text-white text-center'>
            React JS
          </p>

          <a href={link || "#"}>
            <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>
              More Info
            </p>
          </a>
        </h3>
      </div>
    </div>
  )
}

ProjectItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default ProjectItem

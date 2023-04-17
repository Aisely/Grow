import React from 'react'
import CourseNav from '../../components/courses/CourseNav/CourseNav'
import CourseModule from '../../components/courses/Modules/CourseModule/CourseModule'
import Modules from '../../components/courses/Modules/Modules'

const Courses = () => {
  return (
    <div className=''>
      <CourseNav />
      <div className='px-10 container mx-auto pt-10'>
        <div>
          <div className=' flex justify-between  items-center'>
            <div>
              <p className='font-semibold text-2xl ml-1'>Entry-level web Developer</p>
              <h1 className='text-6xl font-semibold mt-2'>Syllabus</h1>
            </div>
            <div>
              <button className="bg-[#20BF55] text-white px-3 py-2 rounded">
                        Enroll now
                      </button>
            </div>
          </div>
            <div className='py-10'>
              <p className='text-'>Welcome to the Entry-level Web Developer course! This course is designed to help you gain the skills and knowledge you need to start your career in web development. Whether you are a complete beginner or have some experience, this course will teach you the fundamentals of web development and give you hands-on experience creating web applications.</p>
            </div>
            <Modules />
        </div>
      </div>
    </div>
  )
}

export default Courses
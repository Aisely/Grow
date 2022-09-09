import {useEffect} from 'react'

function Programs(){
    return(
        <section id="programs">
            <div className="container mx-auto mt-12 space-y-12">
                <h2 className="text-center font-bold text-6xl">
                    Courses
                </h2>
                <div className="flex flex-col mt-10 text-center">
                    <div className='text-justify px-10 m-4 space-y-5'>
                        <div className='program-head text-2xl cursor-pointer font-semibold flex flex-row justify-between'>
                            <h2> Entry-level Developer</h2>
                            <span>+</span>
                        </div>
                        <div className='program-body m-auto p-5 font-medium'>
                            <p>Android Developer Bootcamp</p>
                            <p>Web Developer Bootcamp</p>
                        </div>
                        <hr className='mx-auto'/>
                    </div>

                    <div className='text-justify px-10 m-4 space-y-5'>
                        <div className='program-head text-2xl cursor-pointer font-semibold flex flex-row justify-between'>
                            <h2> Junior Developer</h2>
                            <span>+</span>
                        </div>
                        <div className='program-body m-auto p-5 font-medium hidden'>
                            <p>Android Developer Bootcamp</p>
                            <p>Frontend Developer Bootcamp</p>
                            <p>Backend Developer Bootcamp</p>
                            <p>Fullstack Developer Bootcamp</p>
                        </div>
                        <hr className='mx-auto'/>
                    </div>

                    <div className='text-justify px-10 m-4 space-y-5'>
                        <div className='program-head text-2xl cursor-pointer font-semibold flex flex-row justify-between'>
                            <h2> Intermediate Developer</h2>
                            <span>+</span>
                        </div>
                        <div className='program-body m-auto p-5 font-medium hidden'>
                            <p>Android Developer Bootcamp</p>
                            <p>Frontend Developer Bootcamp</p>
                            <p>Backend Developer Bootcamp</p>
                            <p>Fullstack Developer Bootcamp</p>
                        </div>
                        <hr className='mx-auto'/>
                    </div>

                    <div className='text-justify px-10 m-4 space-y-5'>
                        <div className='program-head text-2xl cursor-pointer font-semibold flex flex-row justify-between'>
                            <h2> Senior Developer</h2>
                            <span>+</span>
                        </div>
                        <div className='program-body m-auto p-5 font-medium hidden'>
                            <p>Android Developer Bootcamp</p>
                            <p>Frontend Developer Bootcamp</p>
                            <p>Backend Developer Bootcamp</p>
                            <p>Fullstack Developer Bootcamp</p>
                        </div>
                        <hr className='mx-auto'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Programs
import React from 'react'
import Link from 'next/link'

function Community(){
    return(
        <section id="community">
            <div className="container flex flex-col mx-auto mt-10 space-y-12 text-center md:space-y-0">
                <h2 className="mt-20 text-center font-bold text-4xl md:mt-30">
                    Join Our Community
                </h2>
                <p className="text-center p-5 text-md md:text-lg md:p-10 md:m-6">
                    Be part of the leading community of French-speaking developers 
                    that we're building. You'll get access to tons of developer resources, 
                    opportunities, events and helpful talks for your developer journey.
                </p>
                <div className="flex justify-center">
                    <Link href='/'>
                        <span className='font-bold startedBtn cursor-pointer'>
                            Join Now
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Community
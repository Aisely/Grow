import Image from 'next/image'
import React from 'react'
import accenture from '../../public/accenture.jpg'
import microsoft from '../../public/microsoft.png'
import ibm from '../../public/ibm.png'
import google from '../../public/google.png'
import stripe from '../../public/stripe.png'

const Companies = () => {
  return (
    <section id='companies' className="z-20 bg-white">
        <div className="container mx-auto py-20">
            <div className="flex p-5 justify-center pb-10 mt-10 text-center">
                <p>Our training will equip you with top-level coding skills needed to land a job in leading companies</p>
            </div>
            <div className="flex p-5 items-center space-x-6 justify-center">
                <div className="w-[150px]">
                    <Image  priority src={accenture} />
                </div>
                <div className="w-[200px]">
                <Image priority  src={microsoft} />
                </div>
                <div className="w-[150px]">
                <Image priority  src={google} />
                </div>
                <div className="w-[150px]">
                <Image priority  src={stripe} />
                </div>
                <div className="w-[130px]">
                <Image  priority src={ibm} />
                </div>
            </div>
        </div>
    </section >
  )
}

export default Companies
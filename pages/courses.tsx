import React from 'react'
import Banner from '../components/landingpage/Banner'
import Footer from '../components/landingpage/Footer'
import Navbar from '../components/landingpage/Navbar'
import Programs from '../components/landingpage/Programs'

function courses() {
  return (
    <>
    <Navbar />
    <Programs/>
    {/*
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
      <h2 className="text-6xl font-bold text-center">
        Courses
      </h2>
    </div>*/}
    <Banner />
    <Footer />
    </>
  )
}

export default courses
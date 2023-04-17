import React from 'react'

const FormLabel = ({label, type, placeholder}) => {
  return (
    <div className='flex flex-col mb-4 '>
        <label className=' text-xs'>{label}</label>
        <input className='border py-3 px-3 text-xs' type={type} placeholder={placeholder}/>
    </div>
  )
}

export default FormLabel
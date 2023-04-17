import React from 'react'
import PlayButton from '../../../icons/PlayButton'

const Topic = ({type, desc}) => {
  return (
    <div className='flex  w-full py-4 px-4'>
        <div className='flex w-1/4 items-center gap-10'>
            <div>
                <PlayButton w="29" h="29" fill="#1a202c"/>
            </div>
            <div>{type}</div>
        </div>
        <div className='flex items-center'>
            {desc}
        </div>
    </div>
  )
}

export default Topic
import React, {useState} from 'react'
import { TopicsUtils } from './Topics.Utils'
import Topic from './Topic'

const Topics = () => {
    const [topics, setTopics] = useState(TopicsUtils)
  return (
   <div className='mt-10'>
    {
        topics.map((topic, index) => (
            <Topic key={index} type={topic.type} desc={topic.desc} />
        ))
    }
   </div>
  )
}

export default Topics
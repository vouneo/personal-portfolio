import React from "react";
import work from '../data/work'
import WorkItem from "./WorkItem";
import Title from './Title';

function Work() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Work</Title>
        {work.map(item => (
          <WorkItem 
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>  
  )
}

export default Work;
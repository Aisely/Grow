import React, { useState } from "react";
import CourseModule from "./CourseModule/CourseModule";
import { ModulesUtils } from "./Modules.utils";

const Modules = () => {
    const [module, setModule] = useState(ModulesUtils);
    console.log(module)
  return (
    <div className="gap-7 flex flex-col ">
      {ModulesUtils().map((x, index) => (
        <CourseModule 
        key={x.id} 
        num={x.num} 
        topic={x.topic}
        description={x.description}
        />
      ))}
    </div>
  );
};

export default Modules;

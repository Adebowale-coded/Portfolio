import React, { useState } from 'react'

export interface ProjectProps {
    imgSrc: string;
    projectName: string;
  }

const Project = ({ imgSrc, projectName }: ProjectProps) => {
  return (
    <div>
      <img src={imgSrc} alt={projectName} />
      <div className='pt-[10px]'>
        <label htmlFor="" className=' '>Project Name: </label>
        <label htmlFor="" >{projectName}</label>
      </div>  
    </div>
  );
};

export default Project;

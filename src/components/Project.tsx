import React from 'react'
import { motion } from "framer-motion"
import icon from "../assets/imgs/Icon.png"


interface props {
  imgsrc?: any
  ProjectName?: string
  description?: string
  technologies?: string[]
  link?: string
}
const Project = ({ imgsrc, ProjectName, description, technologies, link }: props) => {
 
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ amount: 0.5 }}
    >
      <div className='bg-[#333] grid grid-cols-1 md:grid-cols-2 gap-[15px] mx-auto p-[30px] rounded-[20px] mt-[20px] max-w-[1000px]'>
        <div className="flex justify-center xl:justify-start md:justify-start">
          <img src={require(`../assets/imgs/${imgsrc}`)} alt={ProjectName} className='h-auto w-full md:w-auto rounded-lg' />
        </div>

        <div className='flex flex-col'>
          <h2 className='text-[18px] font-[500] text-[#66fcf1] mb-[10px]'>{ProjectName}</h2>

          <p className='text-[14px] text-[#fff] mb-[20px]'>{description}</p>

          <div className='flex flex-wrap gap-[10px]'>
            {technologies?.map((tech, index) => (
              <span key={index} className='bg-[#444] text-[#fff] px-[10px] py-[5px] rounded-full text-[12px]'>{tech}</span>
            ))}
          </div>

          <a href={link}>
            <div className='p-[10px] flex pt-[20px] gap-[10px]' >
              <label htmlFor="" className='text-white cursor-pointer'>Preview</label>
              <img src={icon} alt="" />
            </div>

          </a>



        </div>
        </div>
    </motion.div >



  )
}

export default Project
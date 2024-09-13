import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import bg from "../assets/imgs/darkImg.jpg"
import portfolioImg from "../assets/imgs/coding.jpg"
import cloud from "../assets/imgs/cloud.jpg"
import phone from "../assets/imgs/phone.png"
import web from "../assets/imgs/web.png"
import whatsapp from "../assets/imgs/whatsapp.jpg"
import portfolio from "../assets/imgs/portfolio.png"
import Path from "../assets/imgs/Path.png"
import Oval from "../assets/imgs/Oval.png"
import Shape from "../assets/imgs/Shape.png"
import Project from '../components/Project'


const Home = () => {

  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const changeNavbarBg = () => {
      if (window.scrollY >= 30) {  // Check if scroll passed the hero section
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener('scroll', changeNavbarBg);

    return () => {
      window.removeEventListener('scroll', changeNavbarBg); // Clean up
    };
  }, []);

  const [active, setActive] = useState({
    All: true,
    Design: false,
    Coding: false,
  })

  const AllclickHandler = () => {
    setActive({
      All: !active.All,
      Design: false,
      Coding: false,/* */
    })

    //   setActive((prev) => (
    //     {
    //       ...prev,
    //       All:!prev.All,

    //     }
    //   ))
    //   setActive({
    //     All: false,
    //   })
  }
  return (
    <>
      <Navbar bg={navbarBg ? 'bg-[#333]' : 'bg-transparent'}/>
      <section className=' h-screen bg-cover bg-center bg-dark-background text-center text-white pt-[250px] lg:pt-[250px] leading-[45px] lg:leading-[85px] font-[poppins]'>
        <span className='text-[30px] lg:text-[60px] font-[100] '>Hello, I'm</span>
        <h1 className='text-[35px] lg:text-[80px] font-[1000] text-[#66fcf1]'>Adeoti Adebowale.</h1>
        <p className='font-[300]'>fRoNt EnD dEvElOpEr | dESiGnEr </p>
      </section>


      <section className='bg-[#222] pt-[50px] justify-center font-[poppins]'>
        <h1 className='text-center text-[30px] text-white pb-[24px]'>About <strong className='font-[1100]'>Me</strong> </h1>
        <div className='leading-[25px] px-[20px] md:px-[50px] lg:px-[180px] text-center'>
          <span className='text-white text-center text-[16px] '>
            As a young professional in the dynamic field of technology, I am driven by a passion for innovation and a
            commitment to making a meaningful impact. My journey in the tech industry has been characterized by
            continuous learning, adaptability, and a relentless pursuit of excellence. Committed to staying abreast of
            emerging technologies, contributing to technological excellence, and driving business growth.
          </span>
          <div className='py-[32px] '>
            <button className='bg-[#66fcf1] p-[10px] text-center items-center'>Download CV</button>
          </div>

        </div>

      </section>


      <section className=' bg-[#222] font-[poppins] p-[40px]'>
        <h1 className='text-center text-[30px] text-white'>My <strong className='font-[1100]'>Services</strong> </h1>

        <div className='justify-center grid grid-cols-1 md:w-[75%] lg:grid-cols-3  gap-[20px] text-left mx-auto text-white pt-[50px]'>
          <div className='bg-[#333] p-[30px] border-4 border-transparent rounded-[7px]'>
            <img src={phone} alt="smartphone--v1" className='mb-[10px]' />
            <h3 className='text-[#66fcf1] text-[20px]'>Design</h3>
            <p className='text-[13px]'>Specializing in creative graphic design.</p>
          </div>
          <div className='bg-[#333] p-[30px] border-4 border-transparent rounded-[7px]'>
            <img src={web} alt="" className='mb-[10px]' />
            <h3 className='text-[#66fcf1] text-[20px]'>Web Development</h3>
            <p className='text-[13px]'>Designing dynamic visuals for web development</p>
          </div>

          <div className='bg-[#333] p-[30px] border-4 border-transparent rounded-[7px]'>
            <img src={phone} alt="" className='mb-[10px]' />
            <h3 className='text-[#66fcf1] text-[20px]'>Branding</h3>
            <p className='text-[13px]'>Designing dynamic visuals for web development</p>
          </div>
        </div>
      </section>

      {/* <section className='h-screen bg-[#222] font-[poppins] p-[40px]'>
        <h1 className='text-center text-[30px] text-white'>My <strong className='font-[1100]'>Resume</strong> </h1>

        <div className='justify-center grid grid-cols-2 gap-[20px] text-left mx-auto text-white pt-[50px]'>
          <div className='bg-[#333] p-[30px] border-4 border-transparent rounded-[7px]'>
            <span className='mb-[10px] font-[700] text-[#fff]'>February - Present</span>
            <h3 className='text-[#66fcf1] text-[20px]'>Frontend Development Intern</h3>
            <p></p>
          </div>
          <div className='bg-[#333] p-[30px] border-4 border-transparent rounded-[7px]'>
            <span className='mb-[10px] font-[700] text-[#fff]'>February - Present</span>
            <h3 className='text-[#66fcf1] text-[20px]'>Asst. Creative Director</h3>
            <li>Demonstrated strong communication skills in conveying client requirements to artisans and vice versa.</li>
            <li>Monitored and tracked the progress of ongoing projects to ensure adherence to timelines and milestones</li>
            <li>Conceptualized and produced engaging video content for Instagram Reels to promote products/services.</li>
            <li> Created visually compelling and engaging graphic designs for weekly social media posts.</li>
          </div>
        </div>
      </section> */}

      <section className=' bg-[#222] font-[poppins] p-[40px]'>
        <h1 className='text-center text-[30px] text-white'>Featured <strong className='font-[1100]'>Portfolio</strong> </h1>
        <div className='text-center gap-[30px] flex justify-center mt-[20px]'>
          <a href='#' onClick={AllclickHandler} className={`${active.All && 'text-[#66fcf1]'} font-[1000]`}>All</a>
          <a href='#' onClick={AllclickHandler} className='text-white '>Design</a>
          <a href='#' className='text-white '>Coding</a>
        </div>

        <div className='justify-center grid lg:grid-cols-3 gap-[20px] text-center text-white pt-[50px]'>
          <Project imgSrc={portfolio} projectName="WhatsApp Redesign" />
          <Project imgSrc={portfolio} projectName="Portfolio Website" />
          <Project imgSrc={portfolio} projectName="Creative Portfolio" />

          <Project imgSrc={portfolio} projectName="WhatsApp Redesign" />
          <Project imgSrc={portfolio} projectName="Portfolio Website" />
          <Project imgSrc={portfolio} projectName="Creative Portfolio" />
        </div>
      </section>

      <section className='bg-[#222] font-[poppins] p-[40px]'>
        <div className='flex flex-col lg:flex-row gap-[20px]'>
          <div className='bg-[#333] p-[20px] lg:w-[50%]'>
            <form action="" className='p-[20px]'>
              <h1 className='text-[24px] font-[500] text-[#66fcf1]'>Get In Touch</h1>
              <div className='pt-[12px]'>
                <input type="text" placeholder='Name' className='p-[15px] w-[100%] border border-black bg-transparent text-[#fff]' />
              </div>

              <div className='pt-[12px]'>
                <input type="text" placeholder='Email' className='p-[15px] w-[100%] border border-black bg-transparent text-[#fff]' />
              </div>

              <div className='pt-[12px]'>
                <input type="text" placeholder='Message' className='p-[15px] w-[100%] border border-black bg-transparent text-[#fff]' />
              </div>

              <div className='pt-[20px]'>
                <button className='bg-[#66fcf1] p-[15px] font-[1100px]'>Submit</button>
              </div>
            </form>
          </div>

          <div className='lg:w-[50%]'>
            <h3 className='text-[#66fcf1]'>CONTACT</h3>
            <h2 className='text-[35px] text-[#fff]'>Contact me</h2>
            <p className='text-[#fff] pt-[10px]'>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
            <div className='pt-[30px] flex gap-[20px]'>
              <img src={Path} alt="" className='h-[23px]' />
              <p className='text-[#fff]'>Lagos, Nigeria</p>
            </div>

            <div className='pt-[30px] flex gap-[20px]'>
              <img src={Path} alt="" className='h-[23px]' />
              <p className='text-[#fff]'>(+234) 902-9663-936</p>
            </div>

            <div className='pt-[30px] flex gap-[20px]'>
              <img src={Shape} alt="" className=' h-[23px]' />
              <p className='text-[#fff]'>adeotiadebowale@gmail.com</p>
            </div>

          </div>
        </div>

      </section>



      <footer className="bg-[#333]">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Adebowale</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">Portfolio</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">Resume</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024. All Rights Reserved.</span>
        </div>
      </footer>

    </>
  )
}

export default Home
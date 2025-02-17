import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
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
import reactLogo from "../assets/imgs/icon-react.png"
import tailwindLogo from "../assets/imgs/icon-tailwindcss.png"
import typescriptLogo from "../assets/imgs/icon-typescript.png"
import gitLogo from "../assets/imgs/icon-git.png"
import PhotoshopLogo from "../assets/imgs/photoshop-logo.png"
import illustrator from "../assets/imgs/illustrator.png"
import canva from "../assets/imgs/canva.png"
import github from "../assets/imgs/git.png"
import Linkedin from "../assets/imgs/linkedin.png"
import Behance from "../assets/imgs/behance.png"
import Picture from "../assets/imgs/Picture.png"
import img1 from "../assets/imgs/port1.png"
import icon from "../assets/imgs/Icon.png"
import whatsappImg from "../assets/imgs/whatsappImg.png"
import engraced from "../assets/imgs/engraced.png"
import figma from "../assets/imgs/figma.png"
import inspira from "../assets/imgs/inspiracomp.png"
import vogue from "../assets/imgs/vogcomp.png"
import ProjectData from '../data/data'

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

  const [activeSimple, setActiveSimple] = useState('All')

  const simpleChanger = (category:string) => {
    setActiveSimple(category)
  };

  const filteredProjects = activeSimple === 'All' ? ProjectData: ProjectData.filter((item) => item.category === activeSimple);

  



  const AllclickHandler = (name: string) => {


    /* setActive({
      All: !active.All,
      Design: false,
      Coding: false,
    })
 */

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
      <Navbar bg={navbarBg ? 'bg-[#333]' : 'bg-transparent'} />
      <section className=' h-screen bg-cover bg-center bg-dark-background text-center text-white pt-[250px] lg:pt-[250px] leading-[45px] lg:leading-[70px] font-[poppins]'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ amount: 0.5 }}
        >
          <span className='text-[30px] lg:text-[60px] font-[100] '>Hello, I am</span>
          <h1 className='text-[35px] lg:text-[80px] font-[1000] text-[#66fcf1] '>Adeoti Adebowale.</h1>
          <p className='font-[300] '>fRoNt EnD dEvElOpEr | dESiGnEr </p>

          <div className='flex justify-center items-center p-[4px] bg-[#333] w-[100px] mx-auto rounded-[20px]'>
            <a href="https://github.com/Adebowale-coded"><img src={github} alt="" className='h-[30px]' /></a>
            <a href="https://www.linkedin.com/in/adeotiadebowale/"><img src={Linkedin} alt="" className='h-[20px]' /></a>
            <a href="https://www.behance.net/adebowaleadeoti#"><img src={Behance} alt="" className='h-[35px]' /></a>
          </div>
        </motion.div>

      </section>


      <section className='bg-[#222] pt-[50px] justify-center font-[poppins] border-b border-[#333]'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ amount: 0.5 }}
        >
          <div className='flex justify-center pb-[20px]'>
            <label className='text-[13px] text-white p-[13px] bg-[#333] rounded-[25px] font-[1000]'>About Me</label>
          </div>

          <div className='leading-[25px] px-[20px] md:px-[50px] lg:px-[180px] text-center'>
            <span className='text-white text-center text-[16px] '>
              As a young professional in the dynamic field of technology, I am driven by a passion for innovation and a
              commitment to making a meaningful impact. My journey in the tech industry has been characterized by
              continuous learning, adaptability, and a relentless pursuit of excellence. Committed to staying abreast of
              emerging technologies, contributing to technological excellence, and driving business growth.
            </span>
            <div className='py-[32px] '>
              <button className='bg-[#66fcf1] p-[10px] text-center items-center rounded-[20px] font-[500]'>Download CV</button>
            </div>

          </div>
        </motion.div>


      </section>


      <section className=' bg-[#222] font-[poppins] p-[40px] border-b border-[#333]'>

        <div className='flex justify-center'>
          <label className='text-[13px] text-white p-[13px] bg-[#333] rounded-[25px] font-[1000]'>My Services</label>
        </div>


        <div className='justify-center grid grid-cols-1 md:w-[75%] lg:grid-cols-3  gap-[20px] text-left mx-auto text-white pt-[50px]'>
          <div className='bg-[#333] p-[30px] border-4 border-transparent rounded-[20px] hover:bg-[#161313]  hover:scale-105 transition duration-300 ease-in-out'>
            <img width="40" height="40" src="https://img.icons8.com/color/48/design--v1.png" alt="design--v1" />
            <h3 className='text-[#66fcf1] text-[20px] pt-[10px]'>Design</h3>
            <p className='text-[13px]'>Specializing in creative graphic design.</p>
          </div>
          <div className='bg-[#333] p-[30px] border-4 border-transparent rounded-[20px] hover:bg-[#161313] hover:scale-105 transition duration-300 ease-in-out'>
            <img width="30" height="30" src="https://img.icons8.com/fluency/30/web.png" alt="web" />
            <h3 className='text-[#66fcf1] text-[20px] pt-[10px]'>Web Development</h3>
            <p className='text-[13px]'>Develop dynamic visuals that enhance User interaction.</p>
          </div>

          <div className='bg-[#333] p-[30px] border-4 border-transparent rounded-[20px] hover:bg-[#161313] hover:scale-105 transition duration-300 ease-in-out'>
            <img width="30" height="30" src="https://img.icons8.com/stickers/50/tag.png" alt="tag" />
            <h3 className='text-[#66fcf1] text-[20px] pt-[10px]'>Branding</h3>
            <p className='text-[13px]'>Create dynamic visuals that define and elevate your brand identity.</p>
          </div>
        </div>
      </section>

      <section className=' bg-[#222] font-[poppins] p-[40px] border-b border-[#333]'>
        <div className='flex justify-center'>
          <label className='text-[13px] text-white p-[13px] bg-[#333] rounded-[25px] font-[1000]'>Skills</label>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ amount: 0.5 }}
        >
          <div className='flex flex-wrap justify-center items-center pt-[30px] gap-[30px]'>
            <div className='flex flex-col items-center justify-center gap-[10px]'>
              <img src={reactLogo} alt="" />
              <p className='text-white'>React</p>
            </div>

            <div className='flex flex-col items-center justify-center gap-[10px]'>
              <img src={typescriptLogo} alt="" />
              <p className='text-white'>TypeScript</p>
            </div>

            <div className='flex flex-col items-center justify-center gap-[10px]'>
              <img src={tailwindLogo} alt="" />
              <p className='text-white'>Tailwind</p>
            </div>

            <div className='flex flex-col items-center justify-center gap-[10px]'>
              <img src={gitLogo} alt="" />
              <p className='text-white'>Git</p>
            </div>

            <div className='flex flex-col items-center justify-center gap-[10px]'>
              <img src={PhotoshopLogo} alt="" className='h-[70px]' />
              <p className='text-white'>Photoshop</p>
            </div>

            <div className='flex flex-col items-center justify-center gap-[10px]'>
              <img src={illustrator} alt="" className='h-[70px]' />
              <p className='text-white'>Illustrator</p>
            </div>

            <div className='flex flex-col items-center justify-center gap-[10px]'>
              <img src={canva} alt="" className='h-[70px]' />
              <p className='text-white'>Canva</p>
            </div>

            <div className='flex flex-col items-center justify-center gap-[10px]'>
              <img src={figma} alt="" className='h-[70px]' />
              <p className='text-white'>Figma</p>
            </div>
          </div>
        </motion.div>


      </section>

      <section className=' bg-[#222] font-[poppins] p-[40px]'>
        <div className='flex justify-center pb-[20px]'>
          <label className='text-[13px] text-white p-[13px] bg-[#333] rounded-[25px] font-[1000]'>Works</label>
        </div>
        <div className='text-center gap-[30px] flex justify-center mt-[20px]'>
          <span onClick={() => simpleChanger('All')} className={`${activeSimple === 'All' ? 'text-[#66fcf1] font-[1000]' : 'text-white'}  cursor-pointer`}>All</span>
          <span onClick={() => simpleChanger('Design')} className={`${activeSimple === 'Design' ? 'text-[#66fcf1] font-[1000]' : 'text-white'}  cursor-pointer`}>Design</span>
          <span onClick={() => simpleChanger('Coding')} className={`${activeSimple === 'Coding' ? 'text-[#66fcf1] font-[1000]' : 'text-white'}   cursor-pointer`}>Coding</span>
        </div>

        {
          filteredProjects.map((item, index) => (
            <Project
              imgsrc={item.imgsrc}
              ProjectName={item.ProjectName}
              description={item.description}
              technologies={item.technologies}
              link={item.link}
            />
          ))
        }



      </section>

      <section className='bg-[#222] font-[poppins] p-[40px] '>
        <div className='flex flex-col lg:flex-row gap-[20px] max-w-[1000px] mx-auto'>
          <div className='bg-[#333] p-[20px] lg:w-[50%] rounded-[20px]'>
            <form action="" className='p-[20px]'>
              <h1 className='text-[24px] font-[500] text-[#66fcf1]'>Get In Touch</h1>
              <div className='pt-[12px]'>
                <input type="text" placeholder='Name' className='p-[15px] w-[100%] border border-white rounded-[20px] bg-transparent text-[#fff]' />
              </div>

              <div className='pt-[12px]'>
                <input type="text" placeholder='Email' className='p-[15px] w-[100%] border border-white rounded-[20px] bg-transparent text-[#fff]' />
              </div>

              <div className='pt-[12px]'>
                <input type="text" placeholder='Message' className='p-[15px] w-[100%] border border-white rounded-[20px] bg-transparent text-[#fff]' />
              </div>

              <div className='pt-[20px]'>
                <button className='bg-[#66fcf1] p-[15px] font-[1100px] rounded-[20px]'>Submit</button>
              </div>
            </form>
          </div>

          <div className='lg:w-[50%]'>
            <div className='flex pb-[20px]'>
              <label className='text-[13px] text-white p-[13px] bg-[#333] rounded-[25px] font-[1000]'>Contact Me</label>
            </div>
            <p className='text-[#fff] pt-[10px]'>Feel free to reach out, and let's create something amazing together!</p>
            <div className='pt-[30px] flex gap-[20px] items-center'>
              <img width="30" height="30" src="https://img.icons8.com/officel/80/marker.png" alt="marker" />
              <p className='text-[#fff] xl:text-[15px] lg:text-[15px] text-[12px]'>Lagos, Nigeria</p>
            </div>

            <div className='pt-[30px] flex gap-[20px] items-center'>
              <img width="30" height="30" src="https://img.icons8.com/color/48/apple-phone.png" alt="apple-phone" />
              <p className='text-[#fff] xl:text-[15px] lg:text-[15px] text-[12px]'>(+234) 902-9663-936</p>
            </div>

            <div className='pt-[30px] flex gap-[20px] items-center'>
              <img width="30" height="30" src="https://img.icons8.com/fluency/30/new-post.png" alt="new-post" />
              <p className='text-[#fff] xl:text-[15px] lg:text-[15px] text-[12px]'>adeotiadebowale@gmail.com</p>
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
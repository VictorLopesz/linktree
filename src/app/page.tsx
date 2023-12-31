'use client'
import { FaCode, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiSocialInstagram } from "react-icons/ti";
import minhaFoto from '../../public/assets/minhaFoto.jpeg';
import ParticlesContainer from './components/ParticlesContainer';
import { TypeAnimation } from 'react-type-animation';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { Fade } from "react-awesome-reveal";




export default function Home() {

  return (
    <>

      <div className="relative w-full">
        <div className="flex justify-center absolute z-50 bg-[#9f9e9e] items-center w-full h-screen">
          <ParticlesContainer />
          <div className="text-center z-50 absolute">
            <Fade
            direction="down"
            triggerOnce={true}
            duration={2000}
            >
            <h1 className="text-4xl -mb-4 md:text-4xl lg:text-5xl xl:text-5xl font-bebas text-white">
              Victor Lopes
            </h1>
            </Fade>
            <h1 className="font-metal text-2xl -mb-4 lg:text-4xl xl:text-3xl text-[#000000]">
              <TypeAnimation
                sequence={[
                  'Desenvolvedor de Software',
                  2000,
                  'Software Developer',
                  2000,
                  'Desenvolvedor de Software',
                  2000,
                  'Software Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <br />
            <Fade 
            triggerOnce={true}
            duration={2000}
            >
            <div className="justify-center items-center flex">
              <img
                src={minhaFoto.src}
                alt="minhaFoto"
                className="w-56 h-56 md:w-52 md:h-52 lg:w-40 lg:h-40 xl:w-52 xl:h-52 rounded-full"
                />
            </div>
                </Fade>
            <br />

        <Fade cascade damping={0.2}>
        <a href="https://myportfolio-victorlopes.vercel.app/" target="_blank">
              <div className="
              flex justify-between items-center border 
              ease-in-out duration-300 w-80 h-10 rounded-full m-3 hover:bg-[#cbcac8]
              text-[#fefefe] bg-[#35342d72] hover:text-[#000000d0]
              active:text-white active:bg-[#000000d0] font-bebas">
                <div className="">
                  <FaCode className="ml-4" />
                </div>
                <div className="flex justify-center items-center w-full">
                  Portfólio
                </div>
              </div>
            </a>
            
        

            <a href="https://www.linkedin.com/in/lopesvictorh/" target="_blank">
              <div className="
              flex justify-between items-center border 
              ease-in-out duration-300 w-80 h-10 rounded-full m-3 hover:bg-[#cbcac8]
              text-[#fefefe] bg-[#35342d72] hover:text-[#000000d0]
              active:text-white active:bg-[#000000d0] font-bebas">
                <div className="">
                  <FaLinkedinIn className="ml-4" />
                </div>
                <div className="flex justify-center items-center w-full">
                  Linkedin
                </div>
              </div>
            </a>
        

            <a href="https://github.com/VictorLopesz" target="_blank">
              <div className="
              flex justify-between items-center border 
              ease-in-out duration-300 w-80 h-10 rounded-full m-3 hover:bg-[#cbcac8]
              text-[#fefefe] bg-[#35342d72] hover:text-[#000000d0]
              active:text-white active:bg-[#000000d0] font-bebas">
                <div className="">
                  <FaGithub className="ml-4" />
                </div>
                <div className="flex justify-center items-center w-full">
                  GitHub
                </div>
              </div>
            </a>
        

            <a href="https://www.instagram.com/_pleasevictor/" target="_blank">
              <div className="
              flex justify-between items-center border 
              ease-in-out duration-300 w-80 h-10 rounded-full m-3 hover:bg-[#cbcac8]
              text-[#fefefe] bg-[#35342d72] hover:text-[#000000d0]
              active:text-white active:bg-[#000000d0] font-bebas">
                <div className="">
                  <TiSocialInstagram className="ml-4" />
                </div>
                <div className="flex justify-center items-center w-full">
                  Instagram
                </div>
              </div>
            </a>
        
            <a href="https://api.whatsapp.com/send?phone=5521980260633" target="_blank">
              <div className="
              flex justify-between items-center border 
              ease-in-out duration-300 w-80 h-10 rounded-full m-3 hover:bg-[#cbcac8]
              text-[#fefefe] bg-[#35342d72] hover:text-[#000000d0]
              active:text-white active:bg-[#000000d0] font-bebas">
                <div className="">
                  <IoLogoWhatsapp className="ml-4" />
                </div>
                <div className="flex justify-center items-center w-full">
                  WhatsApp
                </div>
              </div>
            </a>
   
 

            <a href="mailto:euvictor_h@hotmail.com" target="_blank">
              <div className="
               flex justify-between items-center border 
               ease-in-out duration-300 w-80 h-10 rounded-full m-3 hover:bg-[#cbcac8]
               text-[#fefefe] bg-[#35342d72] hover:text-[#000000d0]
               active:text-white active:bg-[#000000d0] font-bebas">
                <div className="">
                  <MdOutlineMarkEmailUnread className="ml-4" />
                </div>
                <div className="flex justify-center items-center w-full">
                  Email
                </div>
              </div>
            </a>
       </Fade>
          </div>
        </div>

      </div>
    </>
  )
}

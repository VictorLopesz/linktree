'use client'
import Image from 'next/image'
import { FaCode, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdMailUnread } from "react-icons/io";
import { TiSocialInstagram } from "react-icons/ti";
import minhaFoto from '../../public/assets/minhaFoto.jpeg';
import ParticlesContainer from './components/ParticlesContainer';
import { TypeAnimation } from 'react-type-animation';


export default function Home() {
  return (
    <>

      <div className="relative w-full">
        <div className="flex justify-center absolute z-50 bg-[#0c0c0c] items-center w-full h-screen">
          <ParticlesContainer />
          <div className="text-center z-50 absolute">
            <h1 className="text-4xl -mb-4 md:text-3xl lg:text-3xl xl:text-4xl font-bebas text-white">Victor Lopes</h1>
            <h3 className="font-metal text-2xl -mb-4 lg:text-4xl xl:text-3xl text-[#d9c494]">
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
            </h3>
            <br />
            <div className="justify-center items-center flex">
              <img
                src={minhaFoto.src}
                alt="minhaFoto"
                className="w-32 h-32 md:w-48 md:h-48 lg:w-40 lg:h-40 xl:w-52 xl:h-52 rounded-full"
              />
            </div>
            <br />

            <a href="">
              <div
                className="
              flex justify-between items-center border 
              ease-in-out duration-300 w-80 h-8 m-3 hover:bg-white
              text-[#D3A01F] bg-[#35342d72] hover:text-[#000000d0]
                active:text-white active:bg-[#000000d0] font-bebas
                ">
                <div className="">
                  <FaCode className="ml-1" />
                </div>
                <div className="flex justify-center items-center w-full">
                  Portfólio
                </div>
              </div>
            </a>

            <a href="">
              <div className="
              flex justify-between items-center border 
              ease-in-out duration-300 w-80 h-8 m-3 hover:bg-white
              text-[#D3A01F] bg-[#35342d72] hover:text-[#000000d0]
              active:text-white active:bg-[#000000d0] font-bebas">
                <div className="">
                  <FaLinkedinIn className="ml-1" />
                </div>
                <div className="flex justify-center items-center w-full">
                  Linkedin
                </div>
              </div>
            </a>

            <a href="">
              <div className="
              flex justify-between items-center border 
              ease-in-out duration-300 w-80 h-8 m-3 hover:bg-white
              text-[#D3A01F] bg-[#35342d72] hover:text-[#000000d0]
              active:text-white active:bg-[#000000d0] font-bebas">
                <div className="">
                  <FaGithub className="ml-1" />
                </div>
                <div className="flex justify-center items-center w-full">
                  GitHub
                </div>
              </div>
            </a>

            <a href="">
              <div className="
              flex justify-between items-center border 
              ease-in-out duration-300 w-80 h-8 m-3 hover:bg-white
              text-[#D3A01F] bg-[#35342d72] hover:text-[#000000d0]
              active:text-white active:bg-[#000000d0] font-bebas">
                <div className="">
                  <TiSocialInstagram className="ml-1" />
                </div>
                <div className="flex justify-center items-center w-full">
                  Instagram
                </div>
              </div>
            </a>
            <a href="">
              <div className="
              flex justify-between items-center border 
              ease-in-out duration-300 w-80 h-8 m-3 hover:bg-white
              text-[#D3A01F] bg-[#35342d72] hover:text-[#000000d0]
              active:text-white active:bg-[#000000d0] font-bebas">
                <div className="">
                  <IoLogoWhatsapp className="ml-1" />
                </div>
                <div className="flex justify-center items-center w-full">
                  WhatsApp
                </div>
              </div>
            </a>

            <a href="">
              <div className="
              flex justify-between items-center border 
              ease-in-out duration-300 w-80 h-8 m-3 hover:bg-white
              text-[#D3A01F] bg-[#35342d72] hover:text-[#000000d0]
              active:text-white active:bg-[#000000d0] font-bebas">
                <div className="">
                  <IoMdMailUnread className="ml-1" />
                </div>
                <div className="flex justify-center items-center w-full">
                  Email
                </div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </>
  )
}

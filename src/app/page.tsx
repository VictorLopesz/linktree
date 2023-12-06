import Image from 'next/image'
import { FaCode, FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp,  } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import minhaFoto from '../../public/assets/minhaFoto.jpeg'

export default function Home() {
  return(
    <>
    <div className="flex justify-center items-center w-full h-screen">
    <div>
      <h1>Linktree</h1>
    </div>
    <br />

    <div>
      <img src={minhaFoto.src} alt="minhaFoto" className="w-36 h-36 rounded-full"/>
    </div>
<br />
    <div>

      <div>
      <FaCode />
 <a href="">Portfólio</a>
      </div>

      <div>
      <FaLinkedinIn />
      <a href="">Linkedin</a>
      </div>

      <div>
      <FaGithub />
      <a href="">GitHub</a>
      </div>

      <div>
      <FaInstagram />
      <a href="">Instagram</a>
      </div>

      <div>
      <FaWhatsapp />
      <a href="">WhatsApp</a>
      </div>

      <div>
      <MdAlternateEmail />
      <a href="">E-mail</a>
      </div>
    </div>
    </div>
    </>
  )
}

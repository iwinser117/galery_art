import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';

const Footer = () => (
  <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="https://github.com/tu-usuario" // Reemplaza con tu perfil de GitHub
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub size={16} />
      GitHub
    </a>
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="/portafolio" // Reemplaza con la ruta a tu portafolio
    >
      <IoMdContact size={16} />
      Contactar
    </a>
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="/creado-por" // Reemplaza con la ruta a la sección "Creado por"
    >
      <FaEnvelope size={16} />
      Creado por
    </a>
  </footer>
);

export default Footer;

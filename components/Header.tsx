import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "../app/styles/header.css"

const Header = () => {
  const [isMenuopen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen (!isMenuopen);
  };

  return (
    <div className='header-container'>
  <div className='header'>
    <div className='header-logo'>Portfolio</div>
    <ul className={` header-links ${isMenuopen ? 'open' : ''} `}>
      <li className='header-link'><a href='#hero'>Home</a></li>
      <li className='header-link'><a href='#about'>About</a></li>
      <li className='header-link'><a href='#projects'>Projects</a></li>
      <li className='header-link'><a href='#skills'>Skills</a></li>
      <li className='header-link'><a href='#contact'>Contact</a></li>
    </ul>
    <div className='header-menu-icon' onClick={toggleMenu} >
    {isMenuopen ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
  </div>
</div>

{isMenuopen && (
  <ul className={`header-menu ${isMenuopen ? 'open' : ''}`}>
    <li className="menulink">
      <a href="#hero" onClick={toggleMenu}>Home</a>
    </li>
    <li className="menulink">
      <a href="#about" onClick={toggleMenu}>About</a>
    </li>
    <li className="menulink">
      <a href="#projects" onClick={toggleMenu}>Projects</a>
    </li>
    <li className="menulink">
      <a href="#skills" onClick={toggleMenu}>Skills</a>
    </li>
    <li className="menulink">
      <a href="#contact" onClick={toggleMenu}>Contact</a>
    </li>
  </ul>
)}
</div>
  )
}

export default Header;


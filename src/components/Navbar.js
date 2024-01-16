  import React, {useState} from 'react';
  import{Link} from 'react-router-dom';
  import '@fortawesome/fontawesome-free/css/all.min.css';


  function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick =() => setClick(!click);  
    const closeMobileMenu = () => setClick(false);
    return (
  <>
    <nav className = "navbar">
      <div className = "navbar-Container">
        <Link to="/">
        <img src="https://i.stack.imgur.com/SBv4T.gif" alt="home"  width="250" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active':'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMobileMenu}> 
             Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}> 
            sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
    )
  }

  export default Navbar

import React from 'react'
import { Link } from "react-router-dom";
import './NavbarConnextion.css'
function NavbarConnexion() {
  return (
    <div>
        <nav className='navbar-connextion'>
            <Link to='' ><img className='logo-profile'  src="../../../public/img/medical care logo template social media  1.png" alt="" /></Link>
            <ul>
                <li><details>
                    <summary>Nom utilisateur</summary>
                    <Link className='link-comte'>Mon compte</Link>
                    <Link className='link-comte'>Déconnexion</Link>
                    </details></li>
            </ul>
        </nav>
        </div>
  )
}

export default NavbarConnexion
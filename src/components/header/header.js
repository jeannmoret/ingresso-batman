import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './style.css'
import Logo from '../../assets/logobatman.png'


function Header() {       
    return (        
        <header>
            <Link to='/' >
            <img id="logo" src={Logo} />
            </Link>
            <nav>
                <ul>
                    <Link to='/' className="underline-link">
                        <li>Home</li>                    
                    </Link>
                    <Link to='/contato' className="underline-link">
                        <li>Contato</li>
                    </Link>
                    <Link to='/fotos' className="underline-link">
                        <li>Fotos</li>
                    </Link>
                    <Link to='/comentarios' className="underline-link">
                        <li>Comentários</li>
                    </Link>                      
                </ul>
            </nav>
        </header>        
    )
}


export default Header;
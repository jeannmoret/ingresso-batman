import React from "react";
import './styles.css';
import Logo from '../../assets/logobatman.png'
import { Link } from "react-router-dom";

function Footer() {

    return(
        <footer>
            <nav className="footer-navigation">
                <ul className="footer-list">
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
            <div className="footer-span">
                <img id='logo' src={Logo} alt="logo"/>
                <span>Todos os direitos reservados ©</span>
                <span>Desenvolvido por: Jeann Moret.</span>
            </div>
        </footer>

    
    )
}

export default Footer;
        
import React from 'react';
import Logo from "../../assets/img/ODDb.png";
import './Menu.css';
import ButtonLink from '../ButtonLink';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu (){
    return (
        <nav className="Menu">
            <Link to='/'>
                <img className='Logo' src={Logo} alt="Octanic Developer Database" title='TODO: Margin for logo (Mobile seems broken)'></img>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;
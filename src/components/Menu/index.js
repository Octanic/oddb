import React from 'react';
import Logo from "../../assets/img/ODDb.png";
import './Menu.css';
import ButtonLink from '../ButtonLink';
import Button from '../Button';

function Menu (){
    return (
        <nav className="Menu">
            <a href='/'>
                <img className='Logo' src={Logo} alt="Octanic Developer Database" title='TODO: Margin for logo (Mobile seems broken)'></img>
            </a>
            <Button className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;
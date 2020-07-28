import React from 'react';
import MainTemplate from '../../../components/Templates';
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return (
        <MainTemplate>

            <h1>Cadastro Video</h1>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>  
        </MainTemplate>

    );
}

export default CadastroVideo;
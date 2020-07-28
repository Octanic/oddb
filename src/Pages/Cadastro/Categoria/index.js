import React from 'react';
import MainTemplate from '../../../components/Templates';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return (
        <MainTemplate>

            <h1>Cadastro Categoria</h1>

            <Link to="/">
                Voltar
            </Link>  
        </MainTemplate>

    );
}

export default CadastroCategoria;
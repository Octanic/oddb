import React from 'react';
import MainTemplate from '../../../components/Templates';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return (
        <MainTemplate>

            <h1>Cadastro de Categorias</h1>
            
            <form>

                <label>
                    Nome da Categoria:
                    <input type="text" />
                </label>

                <button>
                    Cadastrar
                </button>
            </form>

            <Link to="/">
                Voltar
            </Link>  
        </MainTemplate>

    );
}

export default CadastroCategoria;
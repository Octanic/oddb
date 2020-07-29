import React from 'react';
import MainTemplate from '../../components/Templates';
import './index.css';
import { Link } from 'react-router-dom';

function PageNotFound(){
    return ( 
        <MainTemplate> 
            <div className="left">
                <h1>ERRO 404</h1>
                
                <p>
                    A página que você tentou acessar não pode ser encontrada.
                </p>

                <p className="hide">
                    Mas por que não tentar nosso jogo Hipsta Adventures?
                </p>

                <Link to="/">Voltar para a home</Link>
            </div>
            <div className="right hide">
                <iframe src="https://upbeat-swanson-5add6b.netlify.app/" width='1024' height="768" title='Hipsta Adventures'></iframe>

            </div>
               
        </MainTemplate>    
);

}

export default PageNotFound;
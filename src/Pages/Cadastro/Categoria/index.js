import React, {useState} from 'react';
import MainTemplate from '../../../components/Templates';
import { Link } from 'react-router-dom';
import dadosIniciais from '../../../Data/dadosIniciais.json';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    const formDataStart = {
        name: "",
        link: "",
        color: "#000"
    };

    const [formData, setFormData] = useState(formDataStart);
    const [categorias, setCategorias] = useState(dadosIniciais.categorias);

    function setValue(key, val){
        setFormData({
            ...formData,
            [key]: val
        });
    }

    function handleChange(e){
        setValue(e.target.getAttribute("name"), e.target.value);
    }
    return (
        <MainTemplate>

            <h1>Cadastro de Categorias {formData.name?" - "+formData.name : ""}</h1>
            
            <form onSubmit={(e)=>{
                e.preventDefault();
                setCategorias([
                    ...categorias,
                    {
                        titulo: formData.name,
                        link: formData.link,
                        cor: formData.color
                    }
                ]);
                setFormData(formDataStart);
            }}>

                <FormField label="Nome da Categoria" name="name" value={formData.name} onChange={handleChange}/>

                <FormField label="Link" name="link" value={formData.link} onChange={handleChange}/>

                <FormField label="Cor" type="color" name="color" value={formData.color} onChange={handleChange}/>

                <ul>
                    {
                        categorias.map( (cat, idx) =>{
                            return (
                                <li key={`${cat}${idx}`}>{cat.titulo}</li>
                            )
                        })
                    }
                </ul>

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
import React, {useState, useEffect} from 'react';
import MainTemplate from '../../../components/Templates';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../Hooks/useForm';

const axios = require('axios');

function CadastroCategoria(){
    const formDataStart = {

        name: "",
        link: "",
        color: "#000"
    };

    const {handleChange, clearForm, formData} = useForm(formDataStart);

    const URL = 
        window.location.hostname.includes("localhost") ?
            "http://localhost:8080/categorias":
            "https://oddb.herokuapp.com/categorias";

    const [categorias, setCategorias] = useState([]);   

    useEffect(()=>{
        const URL = 
        window.location.hostname.includes("localhost") ?
            "http://localhost:8080/categorias":
            "https://oddb.herokuapp.com/categorias";

        console.log(URL);
        fetch(URL)
            .then(async(resp) => {
                const resposta = await resp.json();
                setCategorias([
                    ...resposta
                ]);
            })
    }, []);

    return (
        <MainTemplate>

            <h1>Cadastro de Categorias {formData.name?" - "+formData.name : ""}</h1>
            
            <form onSubmit={(e)=>{
                e.preventDefault();
                
                console.log(formData);
                let form = 
                    {
                        // id: formData.id,
                        name: formData.name,
                        link: formData.link,
                        color: formData.color
                    };
                
                setCategorias([
                    ...categorias,
                    form
                ]);

                axios.post(URL, form).then(r => {console.log(r.data)});

                clearForm();
            }}>
                <FormField label="Nome da Categoria" name="name" value={formData.name} onChange={handleChange}/>

                <FormField label="Link" name="link" value={formData.link} onChange={handleChange}/>

                <FormField label="Cor" type="color" name="color" value={formData.color} onChange={handleChange}/>

                <ul>
                    {
                        categorias.map( (cat, idx) =>{
                            return (
                                <li key={`${cat.id}`}>{cat.name}</li>
                            )
                        })
                    }
                </ul>

                <Button>
                    Cadastrar
                </Button>
            </form>

            <Link to="/">
                Voltar
            </Link>  
        </MainTemplate>

    );
}

export default CadastroCategoria;
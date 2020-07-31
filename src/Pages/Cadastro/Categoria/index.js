import React, {useState, useEffect} from 'react';
import MainTemplate from '../../../components/Templates';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const axios = require('axios');

function CadastroCategoria(){
    const formDataStart = {

        name: "",
        link: "",
        color: "#000"
    };

    const URL = 
        window.location.hostname.includes("localhost") ?
            "http://localhost:8080/categorias":
            "https://oddb.herokuapp.com/categorias";

    const [formData, setFormData] = useState(formDataStart);
    const [categorias, setCategorias] = useState([]);

    function setValue(key, val){
        setFormData({
            ...formData,
            [key]: val
        });
    }

    function handleChange(e){
        setValue(e.target.getAttribute("name"), e.target.value);
    }

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
    }, [])

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

                setFormData(formDataStart);
            }}>
                {/* <FormField label="" type="hidden" value={""+categorias.length+1} name="id" /> */}

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
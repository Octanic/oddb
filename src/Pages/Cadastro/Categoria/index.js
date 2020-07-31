import React, {useState, useEffect} from 'react';
import MainTemplate from '../../../components/Templates';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria(){
    const formDataStart = {
        name: "",
        link: "",
        color: "#000"
    };

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
        const URL = "http://localhost:8080/categorias";
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
                setCategorias([
                    ...categorias,
                    {
                        //id: formData.id,
                        name: formData.name,
                        link: formData.link,
                        color: formData.color
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
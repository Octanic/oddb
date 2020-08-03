import config from "../Config"

const CATEGORIES_URL = `${config.URL_BACKEND}/categorias?_embed=videos`;

function getCategoriasFull(){

    return fetch(CATEGORIES_URL)
        .then(async(resp) => {
            const resposta = await resp.json();
            return resposta;
        });

}

export default {
    getCategoriasFull,
};
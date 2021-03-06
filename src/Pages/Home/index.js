import React, { useEffect } from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../Data/dadosIniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriasRepository from "../../Repositories/categorias"

function Home() {
  
  useEffect(()=>{
    categoriasRepository.getCategoriasFull()
      .then((cat)=>{
        console.log(cat);
      });
    
  }, []);

  let catIndex = parseInt(Math.random() * (dadosIniciais.categorias.length));
  let videoIndex = parseInt(Math.random() * dadosIniciais.categorias[catIndex].videos.length);
  
  let carouselItems = [];
  for (let i = 0; i < dadosIniciais.categorias.length; i++) {
    carouselItems.push(
      <Carousel category={dadosIniciais.categorias[i]} />
    )
    
  }

  return (
    <div style={{ background: "#141414" }}>
      <Menu />
          
      <BannerMain
        videoTitle={dadosIniciais.categorias[catIndex].videos[videoIndex].titulo}
        url={dadosIniciais.categorias[catIndex].videos[videoIndex].url}
        videoDescription={dadosIniciais.categorias[catIndex].videos[videoIndex].description??""}
      />

      {carouselItems}

      <Footer />
    </div>
  );
}

export default Home;

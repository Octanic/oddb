import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from './Data/dadosIniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

let catIndex = parseInt(Math.random() * (dadosIniciais.categorias.length));
let videoIndex = parseInt(Math.random() * dadosIniciais.categorias[catIndex].videos.length);

let carouselItems = [];
for (let i = 0; i < dadosIniciais.categorias.length; i++) {
  carouselItems.push(
    <Carousel category={dadosIniciais.categorias[i]} />
  )
  
}

function App() {
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

export default App;

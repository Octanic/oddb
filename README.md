# ODDb - Octanic Developer Database
<img src="https://github.com/Octanic/oddb/blob/master/src/assets/img/ODDb.png" height='100'>

**Octanic Developer Database** - *a curated resource of development videos - and some random too, because no one was made of steel* :grin:

> Yes, this is a IMDb logo rip-off. 

Created during Imersão React Alura - Thanks once again guys!

Hosted at:
https://oddb.vercel.app/

# What is this?
This is a video library for developers. It contains the links I think it's too awesome to be hanging around YouTube without more people knowing about it.

**Of course - it's a work still in progress.**

# Nice. How to install and run on my machine?
1. download it
2. open it
3. `npm install`
4. `npm start`
5. ???
6. profit :thumbsup:

# Highlights
The version explained in the course had some repetitions I could not help to allow it. So I did some tinkering to make it really random (No sweat about creating carousels. They are created as the data file grows/shrinks)

```javascript
let carouselItems = [];
for (let i = 0; i < dadosIniciais.categorias.length; i++) {
  carouselItems.push(
    <Carousel category={dadosIniciais.categorias[i]} />
  )
  
}
```

Also, as I said, videos are random, and a little trick solved that:
```javascript
let catIndex = parseInt(Math.random() * (dadosIniciais.categorias.length));
let videoIndex = parseInt(Math.random() * dadosIniciais.categorias[catIndex].videos.length);
```

This allows me to get: 
a) a random category
b) a random video inside a category

Then, my BannerMain component is declared like that
```html
<BannerMain
    videoTitle={dadosIniciais.categorias[catIndex].videos[videoIndex].titulo}
    url={dadosIniciais.categorias[catIndex].videos[videoIndex].url}
    videoDescription={dadosIniciais.categorias[catIndex].videos[videoIndex].description??""}
  />
```

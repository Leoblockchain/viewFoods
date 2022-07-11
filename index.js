const canvas=document.querySelector('.canvas');

canvas.classList.add('card','col-2'); 

const biryani=document.querySelector('.biryani')



biryani.addEventListener ('click',async()=>{

  const respuestaBiryani = await fetch(`https://foodish-api.herokuapp.com/images/biryani/biryani${generarEnteroAleatorio(0,81)}.jpg`);
  // console.log(respuestaBiryani);

  canvas.innerHTML = `
           
    <div class="cardBiryani" style="width: 18rem;">
    
    <img src="${respuestaBiryani.url}" class="card-img-top" alt="imgBiryani">


      
    </div>`;

})

const burger=document.querySelector('.burger')

burger.addEventListener ('click',async()=>{

  const respuestaBurger = await fetch(`https://foodish-api.herokuapp.com/images/burger/burger${generarEnteroAleatorio(0,87)}.jpg`);
  
  canvas.innerHTML = `
           
    <div class="cardBurger" style="width: 18rem;">
    
    <img src="${respuestaBurger.url}" class="card-img-top" alt="imgBurger">
      
    </div>`;

})

const chicken=document.querySelector('.chicken')

chicken.addEventListener ('click',async()=>{

  const respuestaChicken = await fetch(`https://foodish-api.herokuapp.com/images/butter-chicken/butter-chicken${generarEnteroAleatorio(0,22)}.jpg`);
  
  canvas.innerHTML = `
           
    <div class="cardChicken" style="width: 18rem;">
    
    <img src="${respuestaChicken.url}" class="card-img-top" alt="imgChicken">
      
    </div>`;

})

const dessert=document.querySelector('.dessert')

dessert.addEventListener ('click',async()=>{

  const respuestaDessert = await fetch(`https://foodish-api.herokuapp.com/images/dessert/dessert${generarEnteroAleatorio(0,36)}.jpg`);
  
  canvas.innerHTML = `
           
    <div class="carddessert" style="width: 18rem;">
    
    <img src="${respuestaDessert.url}" class="card-img-top" alt="imgdessert">
      
    </div>`;

})

const dosa=document.querySelector('.dosa')

dosa.addEventListener ('click',async()=>{

  const respuestaDosa = await fetch(`https://foodish-api.herokuapp.com/images/dosa/dosa${generarEnteroAleatorio(0,83)}.jpg`);

  canvas.innerHTML = `
           
    <div class="cardDosa" style="width: 18rem;">
    
    <img src="${respuestaDosa.url}" class="card-img-top" alt="imgDosa">
      
    </div>`;

})

const idly=document.querySelector('.idly')

idly.addEventListener ('click',async()=>{

  const respuestaIdly = await fetch(`https://foodish-api.herokuapp.com/images/idly/idly${generarEnteroAleatorio(0,77)}.jpg`);

  canvas.innerHTML = `
           
    <div class="cardIdly" style="width: 18rem;">
    
    <img src="${respuestaIdly.url}" class="card-img-top" alt="imgIdly">
      
    </div>`;

})

const pasta=document.querySelector('.pasta')

pasta.addEventListener ('click',async()=>{

  const respuestaPasta = await fetch(`https://foodish-api.herokuapp.com/images/pasta/pasta${generarEnteroAleatorio(0,34)}.jpg`);
 
  canvas.innerHTML = `
           
    <div class="cardPasta" style="width: 18rem;">
    
    <img src="${respuestaPasta.url}" class="card-img-top" alt="imgPasta">
      
    </div>`;

})

const pizza=document.querySelector('.pizza')

pizza.addEventListener ('click',async()=>{

  const respuestaPizza = await fetch(`https://foodish-api.herokuapp.com/images/pizza/pizza${generarEnteroAleatorio(0,95)}.jpg`);

  canvas.innerHTML = `
           
    <div class="cardPizza" style="width: 18rem;">
    
    <img src="${respuestaPizza.url}" class="card-img-top" alt="imgPizza">
      
    </div>`;

})

const rice=document.querySelector('.rice')

rice.addEventListener ('click',async()=>{

  const respuestaRice = await fetch(`https://foodish-api.herokuapp.com/images/rice/rice${generarEnteroAleatorio(0,35)}.jpg`);

  canvas.innerHTML = `
           
    <div class="cardRice" style="width: 18rem;">
    
    <img src="${respuestaRice.url}" class="card-img-top" alt="imgRice">
      
    </div>`;

})

const samosa=document.querySelector('.samosa')

samosa.addEventListener ('click',async()=>{

  const respuestaSamosa = await fetch(`https://foodish-api.herokuapp.com/images/samosa/samosa${generarEnteroAleatorio(0,22)}.jpg`);

  canvas.innerHTML = `
           
    <div class="cardSamosa" style="width: 18rem;">
    
    <img src="${respuestaSamosa.url}" class="card-img-top" alt="imgSamosa">
      
    </div>`;

})

import { generarEnteroAleatorio } from "./functions.js";




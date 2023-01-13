//-------------------------------------------------------------------------matriz de cartas 
const cartas =[
    "carts/cart_2.jpg","carts/cart_2C.jpg","carts/cart_2D.jpg","carts/cart_2T.jpg","carts/cart_3.jpg","carts/cart_3C.jpg","carts/cart_3D.jpg","carts/cart_3T.jpg","carts/cart_4.jpg","carts/cart_4C.jpg",
    "carts/cart_4D.jpg","carts/cart_4T.jpg","carts/cart_5.jpg","carts/cart_5C.jpg","carts/cart_5D.jpg","carts/cart_5T.jpg","carts/cart_6.jpg","carts/cart_6C.jpg","carts/cart_6D.jpg","carts/cart_6T.jpg",
    "carts/cart_7.jpg","carts/cart_7C.jpg","carts/cart_7D.jpg","carts/cart_7T.jpg","carts/cart_8.jpg","carts/cart_8C.jpg","carts/cart_8D.jpg","carts/cart_8T.jpg","carts/cart_9.jpg","carts/cart_9C.jpg",
    "carts/cart_9D.jpg","carts/cart_9T.jpg","carts/cart_10.jpg","carts/cart_10C.jpg","carts/cart_10D.jpg","carts/cart_10T.jpg","carts/cart_A.jpg","carts/cart_AC.jpg","carts/cart_AD.jpg","carts/cart_AT.jpg",
    "carts/cart_J.jpg","carts/cart_JC.jpg","carts/cart_JD.jpg","carts/cart_JT.jpg","carts/cart_K.jpg","carts/cart_KC.jpg","carts/cart_KD.jpg","carts/cart_KT.jpg","carts/cart_Q.jpg","carts/cart_QC.jpg",
    "carts/cart_QD.jpg","carts/cart_QT.jpg"];


//-------------------------------------------------------------------------creador de elementos con intervalo
k=0;
myInterval2 = setInterval(() => {
    if(k<cartas.length){
        if(k<20){//--------------------------------------------------------elementos +
        const img2 = document.createElement("img");

        img2.setAttribute('src',cartas[k]);
        img2.setAttribute('onclick',"src='carts/posterior2.jpg'");

        const box2 = document.getElementById('box2');
        box2.appendChild(img2);
        }else if(k>19 && k<32){//--------------------------------------------------------elementos 
        const img3 = document.createElement("img");

        img3.setAttribute('src',cartas[k]);
        img3.setAttribute('onclick',"src='carts/posterior2.jpg'");

        const box3 = document.getElementById('box3');
        box3.appendChild(img3);

        }else{//--------------------------------------------------------elementos -
        const img4 = document.createElement("img");

        img4.setAttribute('src',cartas[k]);
        img4.setAttribute('onclick',"src='carts/posterior2.jpg'");
    
        const box4 = document.getElementById('box4');
        box4.appendChild(img4);   
        }
    k++; 
    }else{
        clearInterval(myInterval2);
    }
}, 80);
//-------------------------------------------------------------------------contador +1
const ver=document.querySelector(".ver");

const box2 = document.getElementById('box2');
box2.addEventListener("click",e)
let contador=0;
function e(){
    contador++;
    alert(contador);
    ver.textContent=(contador);
    porcentaje()

}
//-------------------------------------------------------------------------contador +0
const box3 = document.getElementById('box3');
box3.addEventListener("click",e3)
function e3(){
    alert(contador);
    ver.textContent=(contador);
    porcentaje()
}
//-------------------------------------------------------------------------contador -1
const box4 = document.getElementById('box4');
box4.addEventListener("click",e4)
function e4(){
    contador--;
    alert(contador);
    ver.textContent=(contador);
    porcentaje()
}
//-------------------------------------------------------------------------porcentaje
const porc=document.querySelector(".porc");

function porcentaje(){
    const proba ={1:"17%",2:"46%",3:"50%",4:"60%",5:"61%",6:"64%",7:"66%"}
    resultado =proba[contador];
    if (contador in proba){
    porc.textContent = resultado; 
    }else{
        porc.textContent = "bajando probabilidad%";
    }
    
}







    











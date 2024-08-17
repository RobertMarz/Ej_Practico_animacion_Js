"use strict"
const ul = document.querySelector("ul");
//bueno
  
function frames(){
    const animacion = ul.animate([
        //keyframes
        {Transform: "TransLateY(0px)"},
        {Transform: "TransLateY(-100px)"}
    ],{
        //opciones
        easing: "Linear",
        iterations: 1,
        duration: 200 // milisegundos

    });
    return animacion.finished;
} 

function displace(){
    frames()
    .then((res)=>{
        console.log(res);
        ul.appendChild(document.querySelectorAll("ul > li")[0] )
    })
}
setInterval(() => {
    displace();
 }, 1000);
import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let quien=["Mi hermano ","El perro ", "Mi pajaro ","Mi abuelo "];
let accion=[" se comió ","chupó ","rompió "," lavó "];
let que =["los deberes ","el móvil ","la ropa "];
let cuando= ["anoche cuando dormia.","mientras desayunaba.","jugando a la consola.","mientras se estaba duchando."];


function frase(){
  let frase=["La pagina falló debido a que: "];

    frase += quien[Math.floor(Math.random()*4)];
    frase+= accion[Math.floor(Math.random()*4)];
    frase+= que[Math.floor(Math.random()*3)];
    frase+= cuando[Math.floor(Math.random()*4)];
    return frase;

  }


window.onload = function() {
  //write your code here
 let texto = document.getElementById("excuse");
 texto.innerHTML = frase();
};

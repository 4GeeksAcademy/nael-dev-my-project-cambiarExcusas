import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who =["Mi hermano ","El perro ", "Mi pajaro ","Mi abuelo "];
let action =[" se comió ","chupó ","rompió "," lavó "];
let what =["los deberes ","el móvil ","la ropa "];
let when = ["anoche cuando dormia.","mientras desayunaba.","jugando a la consola.","mientras se estaba duchando."];


const randonNumber = (length) =>{
   return Math.floor(Math.random() * (length-1));
}

const joinPhrase=()=>{
  let phrase=["La pagina falló debido a que: "];

    phrase += who[randonNumber(who.length)];
    phrase += action[randonNumber(action.length)];
    phrase += what[randonNumber(what.length)];
    phrase += when[randonNumber(when.length)];
    return phrase;

  }


window.onload = function() {
  //write your code here
 let texto = document.getElementById("excuse");
 texto.innerHTML = joinPhrase();
};

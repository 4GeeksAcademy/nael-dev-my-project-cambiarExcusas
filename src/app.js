import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";




const randonNumber = (length) => {
  return Math.floor(Math.random() * (length - 1));
}

const joinPhrase = () => {
  let who = ["Mi hermano", "El perro", "Mi pajaro", "Mi abuelo"];
  let action = ["se comió", "chupó", "rompió", "lavó"];
  let what = ["los deberes", "el móvil", "la ropa"];
  let when = ["anoche cuando dormia.", "mientras desayunaba.", "jugando a la consola.", "mientras se estaba duchando."];
  let wordSecuence = ["La pagina falló debido a que: "];

  wordSecuence += who[randonNumber(who.length)];
  wordSecuence += " ";
  wordSecuence += action[randonNumber(action.length)];
  wordSecuence += " ";
  wordSecuence += what[randonNumber(what.length)];
  wordSecuence += " ";
  wordSecuence += when[randonNumber(when.length)];
  return wordSecuence;

}


window.onload = function () {
  //write your code here
  let unitedPhrase = document.getElementById("generate-random-excuse");
  unitedPhrase.innerHTML = joinPhrase();
};

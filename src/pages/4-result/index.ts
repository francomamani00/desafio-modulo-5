import { state } from "../../state";
const fondo = require("url:../../../src/img/fondo.png");
const imgWin = require("url:../../../src/img/ganaste.png");
const imgLose = require("url:../../../src/img/perdiste.png");
const imgDraw = require("url:../../../src/img/empate.png");

export function initResult(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  const lastState = state.getState();
  const myState = lastState.currentGame.myPlay;
  const computerState = lastState.currentGame.computerPlay;
  const myPlay = document.createElement("div");
  const computerPlay = document.createElement("div");
  if (myState == "piedra")
    myPlay.innerHTML = `
         <custom-piedra variant= "big" class= "my-play"></custom-piedra>
         `;
  if (myState == "papel")
    myPlay.innerHTML = `
         <custom-papel variant="big" class= "my-play"></custom-papel>
         `;

  if (myState == "tijera")
    myPlay.innerHTML = `
        <custom-tijera variant="big" class="my-play"></custom-tijera>
        `;
  if (computerState == "piedra")
    computerPlay.innerHTML = `
        <custom-piedra variant= "big" class= "computer-play"></custom-piedra>
        `;
  if (computerState == "papel")
    computerPlay.innerHTML = `
        <custom-papel variant= "big" class= "computer-play"></custom-papel>
        `;
  if (computerState == "tijera")
    computerPlay.innerHTML = `
        <custom-tijera variant= "big" class= "computer-play"></custom-tijera>
  `;
  div.innerHTML = `
    <section class="container-all">
      <div class="computer-play"></div>
      <div class="my-play"></div>
      <section class="results-container">
        <div>
          <img class="imagen-result" src="${imgWin}"></img>
        </div>
        <div>
        <custom-score></custom-score>
        </div>
        <div class="container-buttons">
          <button-comp class="button-return-to-play">Volver a Jugar </button-comp>
        </div>

      </section>
    </section>
  
  `;
  style.innerHTML = `
    *{
      box-sizing:border-box;
    }
    body{
      margin:0;
    }
    .imagen-result{
      max-width:230px;
      max-height:230px;
    }
    .container-all{
      background-image:url(${fondo});
      display:flex;
      min-height:100vh;
      flex-direction:column;
      align-items:center;
    }
    .results-container{
      padding:20px;
      display:none;
      flex-direction:column;
      justify-content: space-between;
      align-items:center;
      position:absolute;
      min-width:375px;
      
      top:0px;
      bottom:0px;
      right:0px;
      left:0px;
    }
    .my-play{
      bottom:0px;
    }
    .computer-play{
      transform:rotate(180deg);
    }

    .button-return-to-play{
      width:100%;
    }
  `;
  const resultsContainer: any = div.querySelector(".results-container");
  const imagen: any = div.querySelector(".imagen-result");
  const intervalo = setInterval(() => 1000);
  setTimeout(() => {
    clearInterval(intervalo);
    if (
      state.whoWins(
        state.getState().currentGame.myPlay,
        state.getState().currentGame.computerPlay
      ) == "ganaste"
    ) {
      resultsContainer.style.display = "flex";
      resultsContainer.style.background = "rgba(136, 137, 73, 0.9)";
      imagen.src = imgWin;
    }
    if (
      state.whoWins(
        state.getState().currentGame.myPlay,
        state.getState().currentGame.computerPlay
      ) == "perdiste"
    ) {
      resultsContainer.style.display = "flex";
      resultsContainer.style.background = "rgba(137, 73, 73, 0.9)";
      imagen.src = imgLose;
    }
    if (
      state.whoWins(
        state.getState().currentGame.myPlay,
        state.getState().currentGame.computerPlay
      ) == "empataste"
    ) {
      resultsContainer.style.display = "flex";
      resultsContainer.style.background = "rgba(255, 233, 0, 0.7)";
      imagen.src = imgDraw;
    }
  }, 1000);
  div.querySelector(".computer-play").appendChild(computerPlay);
  div.querySelector(".my-play").appendChild(myPlay);
  div.appendChild(style);
  div.querySelector(".button-return-to-play").addEventListener("click", () => {
    params.goTo("/instructions");
  });

  return div;
}

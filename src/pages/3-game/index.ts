import { state, Jugada } from "../../state";
const fondo = require("url:../../../src/img/fondo.png");
export function initGame(params) {
  const div = document.createElement("div");
  div.innerHTML = `
    <section class="game__section">
        <div class="game__container-contador">
            <contador-comp class="contador"></contador-comp>
        </div>
        <div class="game__container-ppt">
            <custom-piedra tipo="piedra"variant="small" id="pointer" class="elementos"></custom-piedra>
            <custom-papel tipo="papel" variant="small" id="pointer" class="elementos"></custom-papel>
            <custom-tijera tipo="tijera" variant="small" id="pointer" class="elementos"></custom-tijera>
        </div>
    </section>
  
  `;
  const style = document.createElement("style");
  style.innerHTML = `
    *{
      box-sizing:border-box;
    }
    body{
      margin:0;
    }
    .game__section{
      background-image:url(${fondo});
      display:flex;
      width:100%;
      height:100vh;
      flex-direction:column;
      justify-content:space-between;
      align-items:center;
      padding-top:100px;
      padding-left: 20px;
      padding-right:20px;
    }
    .game__container-contador{
      
    }
    .game__container-ppt{
      display:flex;
      gap:40px;
      flex-direction:row;
      overflow:hidden;

    }
    .elementos{
      position:relative;
      top:60px;
      cursor:pointer;
      padding:10px;
    }

  `;
  // console.log(state.setMove("piedra"));
  console.log(state.getState());
  const handComponents = div.querySelectorAll(".elementos");
  let contador: any = div.querySelector(".contador");
  let boolean = false;

  // handComponents.forEach((hand) => {
  //   hand.addEventListener("click", (e: any) => {
  //     boolean = true;
  //     const evento = new CustomEvent("change", {
  //       detail: {
  //         myPlay: e.detail.myPlay,
  //       },
  //     });
  //     state.setMove(e.detail.myPlay);
  //     params.goTo("/result");
  //   });
  // });
  handComponents.forEach((hand) => {
    hand.addEventListener("click", () => {
      boolean = true;
      const type = hand.getAttribute("tipo");
      if (type == "piedra") {
        state.setMove("piedra");
      }
      if (type == "papel") {
        state.setMove("papel");
      }
      if (type == "tijera") {
        state.setMove("tijera");
      }
      params.goTo("/desafio-modulo-5/result");
    });
  });
  contador.addEventListener("change", (e: any) => {
    // console.log("entro al if", e);
    handComponents.forEach((hand) => {
      const type = hand.getAttribute("tipo");

      if (boolean == false) {
        params.goTo("/desafio-modulo-5/instructions");
      }
    });
  });

  const currentState = state.getState();
  const computerPlay = currentState.currentGame.computerPlay;
  const myPlay = currentState.currentGame.myPlay;
  const winner = state.whoWins(myPlay, computerPlay);
  console.log(winner);

  div.appendChild(style);
  return div;
}

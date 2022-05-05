const imgFondo = require("url:../../../src/img/fondo.png");

export function initInstructionsPage(params) {
  const div = document.createElement("div");
  div.innerHTML = `
    <section class="instructions__section">
      <div class="instructions__container-title">
        <custom-text variant="subtitle">Presioná jugar
        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>
      </div>
      <div class="instructions__container-button">
          <button-comp class="instructions__button">Jugar</button-comp>
      </div>

      <div class="instructions__container-ppt">
          <custom-piedra variant="small" class="instructions__elementos"></custom-piedra>
          <custom-papel variant="small" class="instructions__elementos"></custom-papel>
          <custom-tijera variant="small" class="instructions__elementos"></custom-tijera>

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
    .instructions__section{
      background-image:url(${imgFondo});
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
    .instructions__container-ppt{
      display:flex;
      gap:40px;
      flex-direction:row;
      justify-content:space-evenly;
      overflow:hidden;
      
  
    }
    .instructions__elementos {
      padding: 10px;
      position: relative;
      top:20px;
      width: fit-content;
    }
    @media (min-width: 556px){
        .instructions__elementos {
            top:64px;
          }
    }
    .instructions__container-title{
        padding:20px;
        max-width:650px;
        margin-top:50px;
    }
    .instructions__container-button{
      text-align:center;
      width:100%;
      margin-top:50px;
    }
  `;
  div.appendChild(style);
  div.querySelector(".instructions__button").addEventListener("click", () => {
    params.goTo("/game");
  });
  return div;
}

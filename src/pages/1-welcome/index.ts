const imgFondo = require("url:../../../src/img/fondo.png");

export function initWelcomePage(params) {
  const div = document.createElement("div");
  div.innerHTML = `
    <section class="section">
      <div class="container-title">
        <custom-text variant="title">Piedra, Papel o Tijera</custom-text>
      </div>
      <div class="container-button">
          <button-comp class="button">Comenzar</button-comp>
      </div>

      <div class="container-ppt">
          <custom-piedra variant="small" class="elementos"></custom-piedra>
          <custom-papel variant="small" class="elementos"></custom-papel>
          <custom-tijera variant="small" class="elementos"></custom-tijera>

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
    .section{
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
    .container-ppt{
      display:flex;
      gap:40px;
      flex-direction:row;
      justify-content:space-evenly;
      overflow:hidden;
      
  
    }
    .elementos {
      padding: 10px;
      position: relative;
      top:25px;
      width: fit-content;
    }
    @media (min-width:512px){
      .elementos{
        top:71px;
      }
    }
    .container-title{
        margin-top:50px;
    }
    .container-button{
      text-align:center;
      width:100%;
      margin-top:50px;
    }
  `;
  div.appendChild(style);
  div.querySelector(".button").addEventListener("click", () => {
    params.goTo("/instructions");
  });
  return div;
}

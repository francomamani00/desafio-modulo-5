import { initRouter } from "./router";
import { initButton } from "./components/button";
import { initCustomText } from "./components/text";
import { initPiedra } from "./components/piedra";
import { initPapel } from "./components/papel";
import { initTijera } from "./components/tijera";
import "./state";

(function () {
  initButton();
  initCustomText();
  initPiedra();
  initPapel();
  initTijera();
  const root = document.querySelector(".root");
  initRouter(root);
})();

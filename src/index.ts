import { initRouter } from "./router";
import { initButton } from "./components/button";
import { initCustomText } from "./components/text";
import { initPiedra } from "./components/piedra";
import { initPapel } from "./components/papel";
import { initTijera } from "./components/tijera";
import { initContadorComp } from "./components/count-down";
import { initScore } from "./components/score";
import "./state";

(function () {
  initButton();
  initCustomText();
  initPiedra();
  initPapel();
  initTijera();
  initContadorComp();
  initScore();
  const root = document.querySelector(".root");
  initRouter(root);
})();

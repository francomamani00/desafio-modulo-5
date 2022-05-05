import { initWelcomePage } from "./pages/1-welcome";
import { initInstructionsPage } from "./pages/2-instructions";
import { initGame } from "./pages/3-game";
import { initResult } from "./pages/4-result";
const routes = [
  { path: /\/desafio-modulo-5\/welcome/, component: initWelcomePage },
  { path: /\/desafio-modulo-5\/instructions/, component: initInstructionsPage },
  { path: /\/desafio-modulo-5\/game/, component: initGame },
  { path: /\/desafio-modulo-5\/result/, component: initResult },
];

export function initRouter(container: Element) {
  function goTo(path: string) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  function handleRoute(route) {
    console.log("el handle recibio una nueva ruta", route);
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  // if (location.pathname == "/") {
  //   goTo("/welcome");
  // } else {
  //   handleRoute(location.pathname);
  // }
  if (location.host.includes("github.io") || "/") {
    goTo("/desafio-modulo-5/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}

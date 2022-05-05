import { initWelcomePage } from "./pages/1-welcome";
import { initInstructionsPage } from "./pages/2-instructions";
import { initGame } from "./pages/3-game";
import { initResult } from "./pages/4-result";
const routes = [
  { path: /\/welcome/, component: initWelcomePage },
  { path: /\/instructions/, component: initInstructionsPage },
  { path: /\/game/, component: initGame },
  { path: /\/result/, component: initResult },
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

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}

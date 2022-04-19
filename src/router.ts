import { initWelcomePage } from "./pages/1-welcome";
import { initInstructionsPage } from "./pages/2-instructions";
const routes = [
  { path: /\/welcome/, component: initWelcomePage },
  { path: /\/instructions/, component: initInstructionsPage },
  //   { path: /\/desafio-modulo-5\/game/, component: initGamePage },
  //   { path: /\/desafio-modulo-5\/results/, component: initResultsPage },
];

export function initRouter(container: Element) {
  function goTo(path: string) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  function handleRoute(route) {
    console.log("el handle recibio una nueva ruta", route);
    for (const r of routes) {
      if (r.path.test) {
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

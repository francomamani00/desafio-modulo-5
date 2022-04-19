type Jugada = "piedra" | "tijeras" | "papel";
type Game = {
  computerPlay: Jugada;
  myPlay: Jugada;
};

const state = {
  data: {
    currentGame: {
      computerPlay: "",
      myPlay: "",
    },
    history: [],
    listeners: [],
  },
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
  },
  suscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  setmove(move: Jugada) {
    const currentState = this.getState();
    console.log(currentState);
    currentState.currentGame.myPlay;
  },

  whoWins(myPlay: Jugada, computerPlay: Jugada) {
    const ganeConTijeras = myPlay == "tijeras" && computerPlay == "papel";

    const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijeras";

    const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";

    const gane = [ganeConTijeras, ganeConPiedra, ganeConPapel].includes(true); // estoy preguntando si alguna de esta es true
  },
  pushToHistory(play: Game) {
    const currentState = this.getState();
    currentState.history(play);
  },
};

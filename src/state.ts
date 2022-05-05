type Jugada = "piedra" | "tijera" | "papel";

const state = {
  data: {
    currentGame: {
      computerPlay: "",
      myPlay: "",
    },
    history: [],
    listeners: [],
  },

  init() {
    const localData = localStorage.getItem("saved-state");
    if (JSON.parse(localData) != null) {
      this.data.history = JSON.parse(localData);
    }
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
  cleanState() {
    localStorage.setItem(
      "saved-state",
      JSON.stringify({
        myPlay: 0,
        computerPlay: 0,
      })
    );
  },
  suscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },

  setMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = move;
    let random = Math.floor(Math.random() * 3);
    console.log(random, "random");
    if (random == 0) {
      currentState.currentGame.computerPlay = "piedra";
    }
    if (random == 1) {
      currentState.currentGame.computerPlay = "papel";
    }
    if (random == 2) {
      currentState.currentGame.computerPlay = "tijera";
    }
    console.log(currentState.currentGame.myPlay);
    this.pushToHistory(
      currentState.currentGame.myPlay,
      currentState.currentGame.computerPlay
    );
    // currentState.currentGame.myPlay;
  },
  getScore() {
    let myScore = 0;
    let computerScore = 0;
    let historyy = this.data.history;

    for (const s of historyy) {
      if (this.whoWins(s.myPlay, s.computerPlay) == "ganaste") {
        myScore++;
      }
      if (this.whoWins(s.myPlay, s.computerPlay) == "perdiste") {
        computerScore++;
      }
    }
    return { myScore, computerScore };
  },
  whoWins(myPlay: Jugada, computerPlay: Jugada) {
    if (myPlay == "piedra") {
      if (computerPlay == "papel") {
        return "perdiste";
      }
      if (computerPlay == "tijera") {
        return "ganaste";
      }
      if (computerPlay == "piedra") {
        return "empataste";
      }
    }

    if (myPlay == "papel") {
      if (computerPlay == "tijera") {
        return "perdiste";
      }
      if (computerPlay == "piedra") {
        return "ganaste";
      }
      if (computerPlay == "papel") {
        return "empataste";
      }
    }
    if (myPlay == "tijera") {
      if (computerPlay == "piedra") {
        return "perdiste";
      }
      if (computerPlay == "papel") {
        return "ganaste";
      }
      if (computerPlay == "tijera") {
        return "empataste";
      }
    }
  },
  pushToHistory(myPlay: Jugada, computerPlay: Jugada) {
    const currentState = this.getState();
    currentState.history.push({ myPlay, computerPlay });
    localStorage.setItem("saved-state", JSON.stringify(currentState.history));
  },
};
export { state, Jugada };

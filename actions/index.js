import { createActions } from "redux-actions";

const actions = createActions({
  SET_NUMBER_OF_PAIRS: (numberOfPairs) => ({ numberOfPairs }),
  SET_CARDS: (cards = []) => ({ cards }),
  SET_FOUND_CARDS: (foundCards = {}) => ({ foundCards }),
  SET_FIRST_CARD: (firstCard) => ({ firstCard }),
  SET_SECOND_CARD: (secondCard) => ({ secondCard }),
  SET_NUMBER_OF_TRIES: (numberOfTries) => ({ numberOfTries }),
  SET_GAME_STARTED: (gameStarted) => ({ gameStarted }),
});

const {
  setGameStarted,
  setCards,
  setFoundCards,
  setFirstCard,
  setSecondCard,
  setNumberOfTries,
} = actions;

export {
  setGameStarted,
  setCards,
  setFoundCards,
  setFirstCard,
  setSecondCard,
  setNumberOfTries,
};

export default actions;

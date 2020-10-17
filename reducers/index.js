import { handleActions } from "redux-actions";
import actions from "../actions";
import { DEFAULT_NUMBER_OF_PAIRS } from "../constants";

const defaultState = {
  gameStarted: false,
  numberOfPairs: DEFAULT_NUMBER_OF_PAIRS,
  cards: [],
  foundCards: {},
  firstCard: null,
  secondCard: null,
  numberOfTries: 0,
};

const {
  setGameStarted,
  setNumberOfPairs,
  setCards,
  setFoundCards,
  setFirstCard,
  setSecondCard,
  setNumberOfTries,
} = actions;

export default handleActions(
  {
    [setGameStarted]: (state, { payload: { gameStarted } }) => ({
      ...state,
      gameStarted,
    }),
    [setNumberOfPairs]: (state, { payload: { numberOfPairs } }) => ({
      ...state,
      numberOfPairs,
    }),
    [setCards]: (state, { payload: { cards } }) => ({ ...state, cards }),
    [setFoundCards]: (state, { payload: { foundCards } }) => ({
      ...state,
      foundCards,
    }),
    [setFirstCard]: (state, { payload: { firstCard } }) => ({
      ...state,
      firstCard,
    }),
    [setSecondCard]: (state, { payload: { secondCard } }) => ({
      ...state,
      secondCard,
    }),
    [setNumberOfTries]: (state, { payload: { numberOfTries } }) => ({
      ...state,
      numberOfTries,
    }),
  },
  defaultState
);

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setGameStarted,
  setCards,
  setFoundCards,
  setFirstCard,
  setSecondCard,
  setNumberOfTries,
} from "../actions";
import { makeGrid } from "../libs";

import SideBar from "../components/SideBar/SideBar";
import CardGrid from "../components/CardGrid/CardGrid";

import {
  Body,
  CardsGridContainer,
  SideBarContainer,
  HeaderContainer,
} from "../components/Layout/Layout";

const Index = () => {
  const gameStarted = useSelector((state) => state.gameStarted);
  const numberOfPairs = useSelector((state) => state.numberOfPairs);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!gameStarted) {
      setTimeout(() => {
        dispatch(setGameStarted(true));
      }, 5000);
      dispatch(setCards(makeGrid(numberOfPairs)));
      dispatch(setFoundCards({}));
      dispatch(setFirstCard(null));
      dispatch(setSecondCard(null));
      dispatch(setNumberOfTries(0));
    }
  }, [gameStarted]);

  return (
    <>
      <HeaderContainer>Find the pairs</HeaderContainer>
      <Body>
        <CardsGridContainer>
          <CardGrid />
        </CardsGridContainer>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
      </Body>
    </>
  );
};

export default Index;

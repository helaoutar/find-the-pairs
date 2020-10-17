import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  setFirstCard,
  setSecondCard,
  setNumberOfTries,
  setFoundCards,
} from "../../actions";
import Card from "./Card/Card";

const Container = styled.div({
  display: "grid",
  gridColumnGap: 20,
  gridRowGap: 20,
  width: "100%",
  gridTemplateColumns: "repeat(auto-fill,137px)",
  justifyContent: "flex-end",
});

const CardGrid = () => {
  const cards = useSelector((state) => state.cards);
  const gameStarted = useSelector((state) => state.gameStarted);
  const foundCards = useSelector((state) => state.foundCards);
  const firstCard = useSelector((state) => state.firstCard);
  const secondCard = useSelector((state) => state.secondCard);
  const numberOfTries = useSelector((state) => state.numberOfTries);

  const dispatch = useDispatch();

  const isCardRevealed = (index) => {
    return (
      (firstCard && firstCard.index === index) ||
      (secondCard && secondCard.index === index)
    );
  };

  const handleCardClick = (item, index) => {
    if (!gameStarted || (firstCard && secondCard) || foundCards[item]) {
      return;
    }

    if (!firstCard) {
      dispatch(setFirstCard({ item, index }));
    } else {
      // try.length = 1
      const { item: firstCardItem, index: firstCardIndex } = firstCard;
      if (firstCardIndex === index) {
        return;
      }

      dispatch(setSecondCard({ item, index }));
      dispatch(setNumberOfTries(numberOfTries + 1));
      setTimeout(() => {
        if (firstCardItem === item) {
          dispatch(
            setFoundCards({
              ...foundCards,
              [item]: true,
            })
          );
        }
        dispatch(setFirstCard(null));
        dispatch(setSecondCard(null));
      }, 1000);
    }
  };

  return (
    <Container>
      {cards.map((item, index) => (
        <Card
          key={index}
          index={index}
          item={item}
          hidden={!!foundCards[item]}
          showFront={!gameStarted || isCardRevealed(index)}
          handleCardClick={handleCardClick}
        />
      ))}
    </Container>
  );
};

export default CardGrid;

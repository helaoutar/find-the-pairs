import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setGameStarted } from "../../actions";

const Container = styled.div({
  padding: "11px 37px 13px 15px",
  backgroundColor: "#FBFBFB",
  borderRadius: 4,
});

const SideBar = () => {
  const numberOfPairs = useSelector((state) => state.numberOfPairs);
  const numberOfTries = useSelector((state) => state.numberOfTries);
  const foundCards = useSelector((state) => state.foundCards);

  const dispatch = useDispatch();

  const handleClickRestartGame = () => {
    dispatch(setGameStarted(false));
  };

  return (
    <Container>
      <p>Score</p>
      <p>
        {Object.keys(foundCards).length} / {numberOfPairs}
      </p>
      <p>Tries: {numberOfTries}</p>
      <div />
      <p>Options</p>
      <p>Size</p>
      <button onClick={handleClickRestartGame}>Restart</button>
    </Container>
  );
};

export default SideBar;

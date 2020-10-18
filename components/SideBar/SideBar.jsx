import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setGameStarted, setNumberOfPairs } from "../../actions";
import { Button, Select, Divider } from "antd";
import { MINIMUN_NUMBER_OF_PAIRS } from "../../constants";

const Container = styled.div({
  padding: "11px 37px 13px 15px",
  backgroundColor: "#FBFBFB",
  borderRadius: 4,
});

const Title = styled.p({
  fontWeight: "bold",
  fontSize: 20,
  marginBottom: 20,
});

const Score = styled.p({
  fontWeight: "bold",
  fontSize: 35,
  marginBottom: 20,
  marginTop: 0,
  marginLeft: 10,
});

const SizePickerContainer = styled.div({
  display: "flex",
  alignItems: "center",
  marginBottom: 32,
});

const SideBar = () => {
  const numberOfPairs = useSelector((state) => state.numberOfPairs);
  const numberOfTries = useSelector((state) => state.numberOfTries);
  const foundCards = useSelector((state) => state.foundCards);
  const gameStarted = useSelector((state) => state.gameStarted);

  const dispatch = useDispatch();

  const handleClickRestartGame = () => {
    dispatch(setGameStarted(false));
  };

  const renderOptions = () => {
    return Array(10 - MINIMUN_NUMBER_OF_PAIRS + 1)
      .fill()
      .map((_, index) => (
        <Select.Option key={index} value={index + MINIMUN_NUMBER_OF_PAIRS}>
          {index + MINIMUN_NUMBER_OF_PAIRS}
        </Select.Option>
      ));
  };

  const handleSizeChange = (value) => {
    dispatch(setNumberOfPairs(value));
    dispatch(setGameStarted(false));
  };

  return (
    <Container>
      <Title>Score</Title>
      <Score>
        <span style={{ color: "#1890FF" }}>
          {Object.keys(foundCards).length}
        </span>{" "}
        / {numberOfPairs}
      </Score>
      <Title style={{ fontSize: 16, fontWeight: "normal" }}>
        Tries: {numberOfTries}
      </Title>
      <Divider
        style={{
          width: 122,
          border: "1px solid #B2B2B2",
          margin: "28px 0",
          minWidth: 0,
        }}
      />
      <Title>Options</Title>
      <SizePickerContainer>
        <Title
          style={{
            fontSize: 16,
            fontWeight: "normal",
            marginRight: 20,
            marginBottom: 0,
          }}
        >
          Size
        </Title>
        <Select
          disabled={!gameStarted}
          defaultValue={numberOfPairs}
          onChange={handleSizeChange}
          style={{ width: 160, color: "rgba(0, 0, 0, 0.6491)" }}
        >
          {renderOptions()}
        </Select>
      </SizePickerContainer>
      <Button
        disabled={!gameStarted}
        type="primary"
        onClick={handleClickRestartGame}
      >
        Restart
      </Button>
    </Container>
  );
};

export default SideBar;

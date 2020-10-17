import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div(({ hidden }) => ({
  ...(hidden ? { visibility: "hidden" } : {}),
  display: "block",
  width: 137,
  height: 145,
  cursor: "pointer",
}));

const CardContent = styled.img({
  width: "100%",
  borderRadius: 4,
});

const Card = ({ index, item, handleCardClick, hidden, showFront }) => {
  return (
    <Container hidden={hidden} onClick={() => handleCardClick(item, index)}>
      <CardContent src={showFront ? `/pair-${item}.jpg` : "/card-back.png"} />
    </Container>
  );
};

Card.propTypes = {
  index: PropTypes.number,
  item: PropTypes.number,
  handleCardClick: PropTypes.func,
  showFront: PropTypes.bool,
  hidden: PropTypes.bool,
};

export default Card;

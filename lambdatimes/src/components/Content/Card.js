import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const Card = ({ card }) => {
  return (
    <CardContainer>
      <div className="headline">{card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={card.img} alt={card.headline} />
        </div>
        <span>By {card.headline}</span>
      </div>
    </CardContainer>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired
};

export default Card;

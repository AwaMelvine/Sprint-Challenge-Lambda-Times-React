import React, { Component } from "react";
import styled from "styled-components";
import { carouselData } from "../../data";

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const LeftButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;

  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }

  top: 50%;
  left: 25px;
  transform: translate(0, -50%);

  img {
    width: 100%;
    display: none;
  }
`;

const RightButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;

  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }

  top: 50%;
  right: 25px;
  transform: translate(0, -50%);

  img {
    width: 100%;
    display: none;
  }
`;

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: [],
      currentIndex: 0
    };
  }
  componentDidMount() {
    this.setState({ slides: carouselData });
  }

  leftClick = () => {
    if (this.state.currentIndex === 0) {
      this.setState({
        ...this.state,
        currentIndex: this.state.slides.length - 1
      });
    } else {
      this.setState({
        ...this.state,
        currentIndex: this.state.currentIndex - 1
      });
    }
  };

  rightClick = () => {
    if (this.state.currentIndex === this.state.slides.length - 1) {
      this.setState({
        ...this.state,
        currentIndex: 0
      });
    } else {
      this.setState({
        ...this.state,
        currentIndex: this.state.currentIndex + 1
      });
    }
  };

  selectedImage = () => {
    const { slides, currentIndex } = this.state;

    return (
      <img src={slides[currentIndex]} alt="" style={{ display: "block" }} />
    );
  };

  render() {
    return (
      <CarouselContainer>
        {this.selectedImage()}
        <LeftButton onClick={this.leftClick}>{"<"}</LeftButton>
        <RightButton onClick={this.rightClick}>{">"}</RightButton>
      </CarouselContainer>
    );
  }
}

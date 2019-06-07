import React from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Content from "./components/Content/Content";
import { DefaultStyles } from "./Styled/DefaultStyles";
import Carousel from "./components/Carousel/Carousel";

const App = () => {
  return (
    <DefaultStyles>
      <TopBar />
      <Header />
      <Carousel />
      <Content />
    </DefaultStyles>
  );
};

export default App;

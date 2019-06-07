import React, { Component } from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Content from "./components/Content/Content";
import { DefaultStyles } from "./Styled/DefaultStyles";

const App = () => {
  return (
    <DefaultStyles>
      <TopBar />
      <Header />
      <Content />
    </DefaultStyles>
  );
};

export default App;

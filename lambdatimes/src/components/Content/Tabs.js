import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Tab from "./Tab";

const TabsContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Topics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const Title = styled.div`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = ({ tabs, selectedTab, selectTabHandler }) => {
  return (
    <TabsContainer>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {tabs.map(tab => (
          <Tab
            key={tab}
            tab={tab}
            selectTabHandler={selectTabHandler}
            selectedTab={selectedTab}
          />
        ))}
      </Topics>
    </TabsContainer>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};

export default Tabs;

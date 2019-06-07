import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TabContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  ${props =>
    props.tab === props.selectedTab
      ? `{
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
  }`
      : ``}
`;

const Tab = ({ tab, selectTabHandler, selectedTab }) => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <TabContainer
      tab={tab}
      selectedTab={selectedTab}
      onClick={() => selectTabHandler(tab)}
    >
      {tab.toUpperCase()}
    </TabContainer>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};

export default Tab;

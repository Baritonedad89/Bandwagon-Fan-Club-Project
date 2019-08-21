import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CardContainer from "./CardContainer";
import Action from "./Action";
import Helper from "./Helper";
import Icon from "./Icon";
import Data from "./Data";
import Title from "./Title";
import Growth from "./Growth";

const Base = styled.div.attrs(props => ({
  className: "current"
}))`
  width: 351px;
  height: 425px;
  box-shadow: 0px 3px 18px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: ${props => props.theme.$White};
  margin: 2rem auto;
  position: relative;
  opacity: 0; 
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

  ${({ isActive }) =>
    isActive &&
    `
  opacity: 1;
  `}
`;

const Card = ({ current, title }) => {
  return (
    <Base isActive={current}>
      <CardContainer className="card__container">
        <Action />
        <Helper />
        <Icon />
        <Data />
        <Title title={title}/>
        <Growth />
      </CardContainer>
    </Base>
  );
};

export default Card;

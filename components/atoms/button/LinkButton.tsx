import React from "react";
import styled from "styled-components";

const Component = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: #fff;
  background-color: #000;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

function LinkButton(props: { type: any; children: any }) {
  return <Component type={props.type}>{props.children}</Component>;
}

export default LinkButton;

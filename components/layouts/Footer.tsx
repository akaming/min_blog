import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 6.25%;
  height: 100px;
  background-color: #fff;
  border-top: 1px solid #eee;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1.2rem;
`;

function Footer() {
  return (
    <Container>
      <Text>ⓒ 2021. Myungmin-Lee all rights reserved.</Text>
    </Container>
  );
}

export default Footer;

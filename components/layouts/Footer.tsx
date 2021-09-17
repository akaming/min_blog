import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  border-top: 1px solid #eee;
`;

const Text = styled.p`
  display: flex;
  justify-content: flex-start;
  max-width: 100%;
  width: 1170px;
  height: 100px;
  margin: 0 auto;
  padding: 0 15px;
  align-items: center;
  font-size: 12px;
`;

function Footer() {
  return (
    <Container>
      <Text>ⓒ 2021. Myungmin-Lee all rights reserved.</Text>
    </Container>
  );
}

export default Footer;

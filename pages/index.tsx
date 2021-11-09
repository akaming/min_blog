import React, { useState } from "react";
import styled from "styled-components";
import Card from "../components/layouts/Card";
import Container from "../styles/Container";

const Banner = styled.div`
  height: 0;
  padding-top: calc(480 / 1600 * 100%);
  background: url("/images/main_img.jpg") center center / cover no-repeat;
`;

function Home() {
  /* TODO:api 하면 map 으로 돌리기 */
  return (
    <>
      <Banner />
      <Container>
        <Card/>
      </Container>
    </>
  );
}

export default Home;

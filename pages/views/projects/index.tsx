import React, { useEffect, useState } from "react";
import Gallery from "../../../components/Gallery";
import Button from "../../../components/layouts/Button";
import SubHeader from "../../../components/layouts/SubHeader";
import Container from "../../../styles/Container";

function List() {
  return (
    <>
      <SubHeader title="PROJECTS"/>
      <Container>
      <Button text="글쓰기" link="projects"/>
        <Gallery/>
        {/* <button onClick={() => Router.push('/')}>홈</button> */}
    </Container>
    </>
  );
}

export default List;

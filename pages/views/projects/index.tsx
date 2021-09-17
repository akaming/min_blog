import React from "react";
import styled from 'styled-components';
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
        <Gallery elements={[
          {
            src: "https://picsum.photos/500",
            link: "https://www.naver.com/",
            title: "제목"
          },
          {
            src: "https://picsum.photos/500"
          },
          {
            src: "https://picsum.photos/500"
          },
          {
            src: "https://picsum.photos/500"
          },
          {
            src: "https://picsum.photos/500"
          }
        ]}
        />
        {/* <button onClick={() => Router.push('/')}>홈</button> */}
    </Container>
    </>
  );
}

export default List;

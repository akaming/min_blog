import React, { useState } from "react";
import styled from "styled-components";

const Banner = styled.div`
  height: 0;
  padding-top: calc(480 / 1600 * 100%);
  background: url("images/main_img.jpg") center center / cover no-repeat;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 6.25%;
  padding: 50px 0 100px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(450 / 1400 * 100%);
  padding: 50px calc(20 / 450 * 100%);
  -webkit-box-shadow: 0px 11px 13px -9px rgba(0, 0, 0, 0.55);
  box-shadow: 0px 11px 13px -9px rgba(0, 0, 0, 0.55);

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const CardTitle = styled.h2`
  padding-bottom: 20px;
  font-size: 2.4rem;
`;

const CardText = styled.p`
  display: -webkit-box;
  margin-bottom: 20px;
  line-height: 1.2;
  height: 190px;
  font-size: 1.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: brek-word;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 767px) {
    height: auto;
  }
`;

const CardDay = styled.small`
  display: flex;
  justify-content: flex-end;
  font-size: 1.2rem;
`;

function HomeView() {
  /* TODO:api 하면 map 으로 돌리기 */
  return (
    <>
      <Banner />
      <Card>
        <CardItem>
          <CardTitle>최신글 제목</CardTitle>
          <CardText>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </CardText>
          <CardDay>2021.07.08</CardDay>
        </CardItem>
        <CardItem>
          <CardTitle>최신글 제목</CardTitle>
          <CardText>최신글 내용</CardText>
          <CardDay>2021.07.08</CardDay>
        </CardItem>
        <CardItem>
          <CardTitle>최신글 제목</CardTitle>
          <CardText>최신글 내용</CardText>
          <CardDay>2021.07.08</CardDay>
        </CardItem>
      </Card>
    </>
  );
}

export default HomeView;

import styled  from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.333%;
  padding: 50px;
  margin: 15px;
  -webkit-box-shadow: 4px 11px 21px -6px rgb(0 0 0 / 40%);
  box-shadow: 4px 11px 21px -6px rgb(0 0 0 / 40%);

  @media screen and (max-width: 767px) {
    margin: 0 0 50px;
    width: 100%;
  }
`;

const CardTitle = styled.h2`
  padding-bottom: 20px;
  font-size: 24px;
`;

const CardText = styled.p`
  display: -webkit-box;
  margin-bottom: 20px;
  line-height: 1.5;
  height: 190px;
  font-size: 16px;
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

const CardDate = styled.small`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
`;

function Card(){
    return(
        <Content>  
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
            <CardDate>2021.07.08</CardDate>
          </CardItem>
          <CardItem>
            <CardTitle>최신글 제목</CardTitle>
            <CardText>최신글 내용</CardText>
            <CardDate>2021.07.08</CardDate>
          </CardItem>
          <CardItem>
            <CardTitle>최신글 제목</CardTitle>
            <CardText>최신글 내용</CardText>
            <CardDate>2021.07.08</CardDate>
          </CardItem>
        </Content>
    )
}

export default Card;
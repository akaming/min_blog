import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: "24px",
    wordBreak: "keep-all",
    textAlign: "center",
    "@media screen and (max-width: 767px)": {
      fontSize: "20px",
    },
  },
}));

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 100%;
  width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  height: 100px;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

const NaviItem = styled.div`
  font-size: 18px;
  margin: 0 20px;

  &::after {
    margin-right: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    margin: 0 10px;
  }
`;

const Logout = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  font-size: 18px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

function Header() {
  const classes = useStyles();
  // api 만들고 유저정보 가쟈와서 name 넣기
  const [name, setName] = useState("명민");

  return (
    <Container>
      <Link href="/">
        <a className={classes.title}>{name} 블로그</a>
      </Link>
      <Nav>
        <NaviItem>
          <Link href="/projects">
              <a>PROJECTS</a>
            </Link>
        </NaviItem>
        <NaviItem>
          <Link href="/study">
            <a>STUDY</a>
          </Link>
        </NaviItem>
        <NaviItem>
          <Logout>LOGOUT</Logout>
        </NaviItem>
      </Nav>
    </Container>
  );
}

export default Header;

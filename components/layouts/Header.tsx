import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: "3.4rem",
    "@media screen and (max-width: 767px)": {
      fontSize: "1.7rem",
    },
  },
}));

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 6.25%;
  height: 100px;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

const NaviItem = styled.div`
  font-size: 2.4rem;
  margin: 0 20px;

  &::after {
    margin-right: 0;
  }
  @media screen and (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

const Logout = styled.button`
  border: none;
  background-color: transparent;
  font-size: 2.4rem;

  @media screen and (max-width: 767px) {
    font-size: 1.2rem;
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
          <Link href="/views/list">
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

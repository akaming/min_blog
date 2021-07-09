import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: "3.4rem",
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
`;

const Logout = styled.button`
  border: none;
  background-color: transparent;
  font-size: 2.4rem;
`;

function Header() {
  const classes = useStyles();

  return (
    <Container>
      <Link href="/">
        <a className={classes.title}>명민 블로그</a>
      </Link>
      <Nav>
        <NaviItem>
          <Link href="/">
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

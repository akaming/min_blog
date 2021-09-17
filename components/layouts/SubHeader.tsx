import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    position: relative;
    height: auto;
    padding: 110px 0;
    background: url("/images/main_img.jpg") center center / cover no-repeat;
    background-attachment: fixed;
    overflow: hidden;
`

const Bg = styled.div`
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
    text-align: center;
`

const Title = styled.div`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    z-index: 1;
`

function SubHeader(props) {
    return (
        <HeaderContainer>
            <Bg></Bg>
            <Content>
                <Title>{props.title}</Title>
            </Content>
        </HeaderContainer>
    );
}

export default SubHeader;
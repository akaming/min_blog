import styled from "styled-components";
import { FormGroup } from "@material-ui/core";
import SubHeader from "../../components/layouts/SubHeader";
import Container from "../../styles/Container";
import axios from "axios";
import { useEffect, useState } from "react";

const LineBox = styled.div`
    padding-top: 50px;

    &:nth-child(1) {
        padding-top: 0;
    }
`

const Content = styled.p`
    font-size: 20px;
`

const ImgPreview =  styled.img`
    display: block;
    width: auto;
`;

function Article() {
    const num = 1;
    const [project, setProject] = useState({
        title: "",
        src: "",
        content: ""
    });

    useEffect(() => {
        axios
            .get("https://mm-blog-api.herokuapp.com/projects/" + num  , {
                
            })
            .then((res)=> {
                setProject({
                    ...project,
                    title: res.data.title,
                    src: res.data.image_src,
                    content: res.data.content
                });
                
            })
            .catch()
    }, []);

    return (
        <>
            <SubHeader title={project.title}/>
            <Container>
                <FormGroup>
                    <LineBox>
                        <ImgPreview src={project.src} />
                    </LineBox>
                    <LineBox>
                        <Content>{project.content}</Content>
                    </LineBox>
                </FormGroup>
            </Container>
        </>
    );
}

export default Article;

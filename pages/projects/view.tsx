import styled from "styled-components";
import Link from "next/link";
import SubHeader from "../../components/layouts/SubHeader";
import Container from "../../styles/Container";
import axios from "axios";
import { useEffect, useState } from "react";
import {makeStyles} from "@material-ui/core/styles";

const Content = styled.p`
    padding-top: 70px;
    font-size: 20px;
`

const ImgPreview =  styled.img`
    display: block;
    margin: 0 auto;
    width: auto;
    height: auto;
`;

const useStyles = makeStyles(() => ({
    button: {
        display: "inline-block",
        padding: "5px 10px",
        marginTop: "20px",
        backgroundColor: "#000",
        fontSize: "20px",
        color: "#fff",
        fontWeight: "bold",
        "&:hover": {
            backgroundColor: "#fff",
            color: "#676666"
        }
    }
}));

function Article() {
    const classes = useStyles();

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
                <ImgPreview src={project.src} />
                <Content>{project.content}</Content>
                <Link href="/projects">
                    <a className={classes.button}>목록</a>
                </Link>
            </Container>
        </>
    );
}

export default Article;

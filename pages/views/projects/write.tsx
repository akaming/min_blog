import styled from "styled-components";
import { Button, FormGroup, TextField } from "@material-ui/core";
import SubHeader from "../../../components/layouts/SubHeader";
import Container from "../../../styles/Container";
import {makeStyles} from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    inputBox: {
        width: "100%"
    },
    imgInput: {
        paddingTop: "10px"
    },
    input: {
            fontSize: "20px",
            [theme.breakpoints.up('sm')]: {
                color: "blue"
            },
            [theme.breakpoints.up('md')]: {
                color: "red"
            }
        },
    label: {
        fontSize: "20px"
    },
    fileUpload: {
        marginTop: "10px"
    },
    textBox: {
        marginTop: "20px",
        width: "100%",
        height: "300px",
        fontSize: "20px"
    }
}));

const LineBox = styled.div`
    padding-top: 50px;

    &:nth-child(1) {
        padding-top: 0;
    }
`

const Title = styled.h3`
    font-size: 20px;
    font-weight: bold;
`

const ImgPreview =  styled.img`
    display: block;
    width: auto;
    height: 200px;
    margin-top: 10px;
    border: 1px solid #adadad;
    border-radius: 13px;
`;

function List() {
    const classes = useStyles();
    const [imgSrc, setImgSrc] = useState("/images/img_default.jpg");

    const changeFile = (e) => {
        const img = (e.target.files)[0]; 
        const reader = new FileReader(); 
        reader.readAsDataURL(img); // 업로드 파일 url 읽어오기
        
        reader.onload = function(evt) {
            setImgSrc(evt.target.result);
        }
    } 

    return (
        <>
            <SubHeader title="PROJECTS 글쓰기"/>
            <Container>
                <FormGroup>
                    <LineBox>
                        <Title>제목</Title>
                        <TextField InputProps={{classes: {root: classes.input}}} InputLabelProps={{classes: {root: classes.label}}} className={classes.inputBox}/>
                    </LineBox>
                    <LineBox>
                        <Title>썸네일</Title>
                        <Button variant="contained" component="label" className={classes.fileUpload} color="secondary">
                            Upload File
                            <input type="file" accept="image/png, image/jpeg" onChange={changeFile} hidden />
                        </Button>
                        <ImgPreview src={imgSrc} />
                    </LineBox>
                    <LineBox>
                        <Title>내용</Title>
                        <textarea className={classes.textBox}/>
                    </LineBox>
                </FormGroup>
            </Container>
        </>
    );
}

export default List;

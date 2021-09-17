import Link from "next/link";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    button: {
        display: "inline-block",
        padding: "5px 10px",
        backgroundColor: "#000",
        fontSize: "20px",
        color: "#fff",
        fontWeight: "bold",
        "&:hover": {
            backgroundColor: "#fff",
            color: "#000"
        }
    }
}));

function Button(props){
    const classes = useStyles();
    return(
        <Link href={`/views/${props.link}/write`} >
            <a className={classes.button}>{props.text}</a>
        </Link>
    )
}

export default Button;
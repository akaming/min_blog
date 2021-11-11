import { Button, FormGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const useStyles =  makeStyles((theme) => ({
    container: {
        width: "300px",
        margin: "30vh auto 30vh"
    },
    textBox: {
        marginBottom: "20px",
        [theme.breakpoints.down('sm')]: {
            marginBottom: "10px",
          }
    },
    text: {
      fontSize: "16px",
      '&$cssFocused $notchedOutline': {
        borderColor: "#ffcf01",
      },
      '&$cssFocused': {
        color: '#e5c22c',
      },
      '&:hover': {
        borderColor: "#ffcf01",
        "&& fieldset": {
            borderColor: "#ffcf01"
        }
    },
      [theme.breakpoints.down('sm')]: {
        fontSize: "14px"
      }
    },
    cssFocused: {},
    notchedOutline: {},
    button: {
        marginTop: "10px",
        fontSize: "16px",
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: "#ffcf01",
        '&:hover': {
            backgroundColor: "#ffe67d",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "14px"
          }
    }
  }));

function SignIn() {
    const classes = useStyles();
    const onSubmit = (e) => {
        e.preventDefault();
           
    }

    return (
        <form onSubmit={onSubmit}>
        <FormGroup className={classes.container}>
           <TextField
                id="id"
                label="아이디"
                className={classes.textBox}
                InputProps={{
                    classes: {
                        root: classes.text, 
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline
                    }
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.text,
                        focused: classes.cssFocused,
                    }
                }}
                //   value={this.state.name}
                //   onChange={this.handleChange('name')}
                variant="outlined"
            />
             <TextField
                id="pw"
                label="비밀번호"
                InputProps={{
                    classes: {
                        root: classes.text, 
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline
                    }
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.text,
                        focused: classes.cssFocused,
                    }
                }}
                variant="outlined"
            />
            <Button variant="contained" type="submit" className={classes.button}>로그인</Button>
        </FormGroup>
      </form>
    )
}

export default SignIn;
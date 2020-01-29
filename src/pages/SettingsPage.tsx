import React from "react";
import { Container, Typography, Paper, TextField } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import FloatingActions from "../components/FloatingActions";

const useStyles = makeStyles(theme =>
  createStyles({
    hFlex: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5)
      }
    },
    content: {
      paddingTop: 80,
      paddingBottom: 48
    },
    paper: {
      padding: 12,
      marginTop: 16,
      marginBottom: 16
    },
    card: {
      marginTop: 16,
      marginBottom: 16
    }
  })
);

const SettingsPage: React.FC = props => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.content} maxWidth="md">
        <Typography variant="h5" gutterBottom>
          个人信息
        </Typography>
        <Paper className={classes.paper}>
          <TextField disabled label="用户名" defaultValue="robertying" />
          <TextField label="昵称" defaultValue="robertying" />
        </Paper>
        <br />
        <Typography variant="h5" gutterBottom>
          偏好设置
        </Typography>
        <Paper className={classes.paper}></Paper>
        <Typography variant="h5" gutterBottom>
          账户安全
        </Typography>
        <Paper className={classes.paper}></Paper>
      </Container>
      <FloatingActions />
    </>
  );
};

export default SettingsPage;

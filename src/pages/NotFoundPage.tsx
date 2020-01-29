import React from "react";
import { Container, Typography, Paper } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      margin: "30vh auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    paper: {
      padding: 48,
      "& > *": {
        margin: theme.spacing(2)
      }
    }
  })
);

const NotFoundPage: React.FC = props => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="md">
      <Paper className={classes.paper}>
        <Typography variant="h3">未找到该页面</Typography>
        <Typography variant="caption" gutterBottom>
          您请求的页面不存在
        </Typography>
      </Paper>
    </Container>
  );
};

export default NotFoundPage;

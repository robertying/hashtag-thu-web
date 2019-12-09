import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  InputBase,
  Divider
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Close } from "@material-ui/icons";
import { RouteComponentProps } from "@reach/router";
import MarkdownEditor from "../components/MarkdownEditor";

const useStyles = makeStyles(theme =>
  createStyles({
    toolbar: {
      backgroundColor: "white",
      color: "black"
    },
    toolbarContainer: {
      padding: 0
    },
    hFlex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    root: {
      paddingTop: 80,
      paddingBottom: 48,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    },
    content: {
      flex: 1,
      marginRight: 16
    },
    sidebar: {
      width: "25%",
      position: "sticky",
      top: 96
    },
    card: {
      marginTop: 16,
      marginBottom: 16
    },
    appBar: {
      backgroundColor: "white",
      color: "black",
      position: "relative"
    },
    editor: {
      flex: 1,
      width: "100%"
    }
  })
);

export interface EditPageProps extends RouteComponentProps {}

const EditPage: React.FC<EditPageProps> = props => {
  const classes = useStyles();

  const handleClose = () => {
    window.history.back();
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <Close />
          </IconButton>
          <Typography variant="h6" style={{ flex: 1 }}>
            #选课
          </Typography>
          <Button color="inherit" onClick={handleClose}>
            发布
          </Button>
        </Toolbar>
      </AppBar>
      <InputBase placeholder="标题" style={{ margin: 16, padding: 4 }} />
      <Divider />
      <MarkdownEditor className={classes.editor} />
    </div>
  );
};

export default EditPage;

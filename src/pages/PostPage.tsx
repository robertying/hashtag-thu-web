import React from "react";
import { Container, Typography, IconButton, AppBar } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import PostArticle from "../components/PostArticle";
import { ArrowBack } from "@material-ui/icons";
import { RouteComponentProps } from "@reach/router";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import { NavigationParams } from "../types/NavigationParams";
import ElevateOnScroll from "../components/ElevateOnScroll";
import BackToTop from "../components/BackToTop";

const useStyles = makeStyles(theme =>
  createStyles({
    appBar: {
      backgroundColor: "white",
      color: "black"
    },
    content: {
      paddingTop: 80,
      paddingBottom: 48
    },
    hFlex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  })
);

export interface PostPageProps extends RouteComponentProps<NavigationParams> {}

const PostPage: React.FC<PostPageProps> = props => {
  const classes = useStyles();

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      <ElevateOnScroll>
        <AppBar className={classes.appBar}>
          <Container maxWidth="md">
            <div className={classes.hFlex}>
              <IconButton onClick={handleGoBack}>
                <ArrowBack />
              </IconButton>
              <Typography variant="h4">#选课</Typography>
            </div>
          </Container>
        </AppBar>
      </ElevateOnScroll>
      <Container className={classes.content} maxWidth="md">
        <ScrollToTopOnMount />
        <div>
          <PostArticle />
          <br />
          <PostArticle style={{ marginTop: 4, marginBottom: 4 }} />
          <PostArticle style={{ marginTop: 4, marginBottom: 4 }} />
          <PostArticle style={{ marginTop: 4, marginBottom: 4 }} />
        </div>
      </Container>
      <BackToTop />
    </>
  );
};

export default PostPage;

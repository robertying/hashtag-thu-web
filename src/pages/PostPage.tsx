import React, { useState } from "react";
import {
  Container,
  Typography,
  IconButton,
  AppBar,
  Dialog,
  DialogTitle,
  DialogContent
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import PostArticle from "../components/PostArticle";
import { ArrowBack } from "@material-ui/icons";
import { RouteComponentProps } from "@reach/router";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import { NavigationParams } from "../types/NavigationParams";
import ElevateOnScroll from "../components/ElevateOnScroll";
import FloatingActions from "../components/FloatingActions";
import CommentCard from "../components/CommentCard";

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

  const [commentModalVisible, setCommentModalVisible] = useState(false);

  const handleModalClose = () => {
    setCommentModalVisible(false);
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
          <PostArticle
            onCommentButtonClick={() => setCommentModalVisible(true)}
            style={{ marginTop: 4, marginBottom: 4 }}
          />
          <PostArticle style={{ marginTop: 4, marginBottom: 4 }} />
          <PostArticle style={{ marginTop: 4, marginBottom: 4 }} />
        </div>
      </Container>
      <Dialog
        open={commentModalVisible}
        onClose={handleModalClose}
        scroll="body"
        aria-labelledby="comment-dialog-title"
        aria-describedby="comment-dialog-description"
      >
        <DialogTitle id="comment-dialog-title">评论</DialogTitle>
        <DialogContent id="comment-dialog-description">
          {[...new Array(50)].map(() => (
            <CommentCard
              avatar="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              username="robertying"
            />
          ))}
        </DialogContent>
      </Dialog>
      <FloatingActions />
    </>
  );
};

export default PostPage;

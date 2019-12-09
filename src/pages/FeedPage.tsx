import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import FeedCard from "../components/FeedCard";
import { RouteComponentProps } from "@reach/router";
import { NavigationParams } from "../types/NavigationParams";
import FloatingActions from "../components/FloatingActions";

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
    content: {
      paddingTop: 80,
      paddingBottom: 48
    },
    card: {
      marginTop: 16,
      marginBottom: 16
    }
  })
);

export interface FeedPageProps extends RouteComponentProps<NavigationParams> {}

const FeedPage: React.FC<FeedPageProps> = props => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.content} maxWidth="md">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <FeedCard
            key={i}
            className={classes.card}
            avatar="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            username="robertying"
            onClick={() => props.navigate?.("/hashtags/1/posts/1")}
          />
        ))}
      </Container>
      <FloatingActions />
    </>
  );
};

export default FeedPage;

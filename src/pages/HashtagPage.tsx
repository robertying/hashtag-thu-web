import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import FeedCard from "../components/FeedCard";
import { RouteComponentProps } from "@reach/router";
import { NavigationParams } from "../types/NavigationParams";
import FloatingActions from "../components/FloatingActions";
import HashtagSideBar from "../components/HashtagSideBar";

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
    }
  })
);

export interface HashtagPageProps
  extends RouteComponentProps<NavigationParams> {}

const HashtagPage: React.FC<HashtagPageProps> = props => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root} maxWidth="md">
        <div className={classes.content}>
          {[1, 2, 3, 4, 5, 6].map(i => (
            <FeedCard
              key={i}
              className={classes.card}
              avatar="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              username="robertying"
              onClick={() => props.navigate?.("/hashtags/1/posts/1")}
            />
          ))}
        </div>
        <HashtagSideBar className={classes.sidebar} />
      </Container>
      <FloatingActions onEditButtonClick={() => props.navigate?.("edit")} />
    </>
  );
};

export default HashtagPage;

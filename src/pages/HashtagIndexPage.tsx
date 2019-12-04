import React from "react";
import { Container, Chip } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { RouteComponentProps } from "@reach/router";
import { NavigationParams } from "../types/NavigationParams";
import BackToTop from "../components/BackToTop";
import SearchBar from "../components/SearchBar";

const useStyles = makeStyles(theme =>
  createStyles({
    hFlex: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5)
      }
    },
    content: {
      paddingTop: 80,
      paddingBottom: 48,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    searchBar: {
      marginTop: 36
    }
  })
);

export interface HashtagIndexPageProps
  extends RouteComponentProps<NavigationParams> {}

const HashtagIndexPage: React.FC<HashtagIndexPageProps> = props => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.content} maxWidth="md">
        <SearchBar className={classes.searchBar} />
        <div className={classes.hFlex} style={{ width: "50%", margin: 24 }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => (
            <Chip key={i} label="要不要选电电小班" />
          ))}
        </div>
      </Container>
      <BackToTop />
    </>
  );
};

export default HashtagIndexPage;

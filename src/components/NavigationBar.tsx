import React, { useState } from "react";
import { Container, AppBar, Typography, Tab, Tabs } from "@material-ui/core";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import { navigate, RouteComponentProps } from "@reach/router";
import ElevateOnScroll from "./ElevateOnScroll";
import { Page } from "../types/Page";

const useStyles = makeStyles(theme =>
  createStyles({
    appBar: {
      backgroundColor: "white",
      color: "black"
    },
    hFlex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    tabs: {
      margin: "0 24px"
    }
  })
);

const StyledTab = withStyles({
  root: {
    height: 64,
    fontSize: "1rem"
  }
})(Tab);

export interface NavigationBarProps extends RouteComponentProps {}

const NavigationBar: React.FC<NavigationBarProps> = props => {
  const classes = useStyles();

  const { path } = props;

  const [currentTab, setCurrentTab] = useState<Page>(
    path!.split("/").pop() as Page
  );

  const handleTabChange = (e: React.ChangeEvent<{}>, value: Page) => {
    navigate(`/${value}`);
    setCurrentTab(value);
  };

  return (
    <ElevateOnScroll>
      <AppBar className={classes.appBar}>
        <Container maxWidth="md">
          <div className={classes.hFlex}>
            <Typography variant="h4">#thu</Typography>
            <Tabs
              className={classes.tabs}
              value={currentTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <StyledTab label="动态" value="home" />
              <StyledTab label="发现" value="explore" />
              <StyledTab label="#" value="hashtags" />
            </Tabs>
          </div>
        </Container>
      </AppBar>
    </ElevateOnScroll>
  );
};

export default NavigationBar;

import React, { useState } from "react";
import {
  Container,
  AppBar,
  Typography,
  Tab,
  Tabs,
  IconButton,
  Avatar,
  Menu,
  MenuItem
} from "@material-ui/core";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import ElevateOnScroll from "./ElevateOnScroll";
import { Page } from "../types/Page";
import { useHistory, useLocation } from "react-router-dom";

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

const NavigationBar: React.FC = props => {
  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();

  const [currentTab, setCurrentTab] = useState<Page>(
    location.pathname.split("/")[1] as Page
  );

  const handleTabChange = (e: React.ChangeEvent<{}>, value: Page) => {
    history.push(`/${value}`);
    setCurrentTab(value);
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleAvatarClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(e.currentTarget);
  };

  const handleAvatarClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
              <IconButton
                style={{ padding: 0, marginLeft: "auto" }}
                onClick={handleAvatarClick}
              >
                <Avatar src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />
              </IconButton>
            </div>
          </Container>
        </AppBar>
      </ElevateOnScroll>
      <Menu
        open={anchorEl ? true : false}
        anchorEl={anchorEl}
        onClose={handleAvatarClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
      >
        <MenuItem onClick={handleAvatarClose}>Profile</MenuItem>
        <MenuItem onClick={handleAvatarClose}>My account</MenuItem>
        <MenuItem onClick={handleAvatarClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default NavigationBar;

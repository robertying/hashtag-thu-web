import React from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { zhCN } from "@material-ui/core/locale";
import PostPage from "./pages/PostPage";
import FeedPage from "./pages/FeedPage";
import { Router, Redirect } from "@reach/router";
import ExplorePage from "./pages/ExplorePage";
import HashtagIndexPage from "./pages/HashtagIndexPage";
import NavigationBar from "./components/NavigationBar";
import HashtagPage from "./pages/HashtagPage";

const theme = createMuiTheme(
  {
    palette: {
      primary: { main: "#660874" },
      secondary: { main: "#fff" }
    },
    typography: {
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
      "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
    }
  },
  zhCN
);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Router primary={false}>
          <NavigationBar path="/home" />
          <NavigationBar path="/explore" />
          <NavigationBar path="/hashtags" />
          <NavigationBar path="/hashtags/:id" />
        </Router>
        <Router>
          <Redirect from="/" to="/home" />
          <FeedPage path="/home" />
          <ExplorePage path="/explore" />
          <HashtagIndexPage path="/hashtags" />
          <HashtagPage path="/hashtags/1" />
          <PostPage path="/hashtags/1/posts/1" />
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;

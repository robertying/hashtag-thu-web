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
import EditPage from "./pages/EditPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import { SWRConfig } from "swr";
import { fetcher } from "./apis";

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
    <SWRConfig
      value={{
        fetcher
      }}
    >
      <ThemeProvider theme={theme}>
        <>
          <Router primary={false}>
            <NavigationBar path="/home" />
            <NavigationBar path="/explore" />
            <NavigationBar path="/hashtags" />
            <NavigationBar path="/hashtags/:id" />
            <NavigationBar path="/:username/settings" />
          </Router>
          <Router>
            <Redirect from="/" to="/home" noThrow />
            <FeedPage path="/home" />
            <ExplorePage path="/explore" />
            <HashtagIndexPage path="/hashtags" />
            <HashtagPage path="/hashtags/1" />
            <PostPage path="/hashtags/1/posts/1" />
            <EditPage path="/hashtags/1/edit" />
            <ProfilePage path="/robertying" />
            <SettingsPage path="/robertying/settings" />
            <LoginPage path="/login" />
          </Router>
        </>
      </ThemeProvider>
    </SWRConfig>
  );
};

export default App;

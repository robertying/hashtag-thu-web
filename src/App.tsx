import React from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { zhCN } from "@material-ui/core/locale";
import PostPage from "./pages/PostPage";
import FeedPage from "./pages/FeedPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ExplorePage from "./pages/ExplorePage";
import HashtagIndexPage from "./pages/HashtagIndexPage";
import NavigationBar from "./components/NavigationBar";
import HashtagPage from "./pages/HashtagPage";
import EditPage from "./pages/EditPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
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
        <Router>
          <Switch>
            <Route path="/home">
              <NavigationBar />
              <FeedPage />
            </Route>
            <Route path="/explore">
              <NavigationBar />
              <ExplorePage />
            </Route>
            <Route path="/hashtags">
              <NavigationBar />
              <HashtagIndexPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            {/* <HashtagPage path="/hashtags/1" />
            <PostPage path="/hashtags/1/posts/1" />
            <EditPage path="/hashtags/1/edit" />
            <ProfilePage path="/robertying" />
            <SettingsPage path="/robertying/settings" /> */}
            <Route>
              <NavigationBar />
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </SWRConfig>
  );
};

export default App;

import React from "react";
import { Route } from "react-router-dom";
import "./MainContent.scss";
import Dialogs from "./Dialogs/Dialogs";
import Posts from "./Posts/Posts";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./SettingsPage/Settings";

const MainContent = props => {
  return (
    <div className="main__wrapper">
      <Route path="/posts" render={() => <Posts postsPage={props.state.postsPage} dispatch={props.dispatch} />} />
      <Route
        path="/dialogs"
        render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />}
      />
      <Route path="/news" render={() => <News />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/settings" render={() => <Settings />} />
    </div>
  );

  // const pages = [
  //   { id: 1, category: "posts", component: <Posts data={postData} /> },
  //   { id: 2, category: "dialogs", component: <Dialogs users={users} dialogs={dialogs} /> },
  //   { id: 3, category: "news", component: <News /> },
  //   { id: 4, category: "music", component: <Music /> },
  //   { id: 5, category: "settings", component: <Settings /> },
  // ];

  // const routers = pages.map(e => {
  //   return <Route path={`/${e.category}`} render={() => e.component} key={e.id} />;
  // });

  // return <div className="main__wrapper">{routers}</div>;
};

export default MainContent;

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./MainContent.scss";
import Dialogs from "./Dialogs/Dialogs";
import Posts from "./Posts/Posts";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const MainContent = () => {
  const pages = [
    { id: "posts", component: Posts },
    { id: "dialogs", component: Dialogs },
    { id: "news", component: News },
    { id: "music", component: Music },
    { id: "settings", component: Settings },
  ];

  const routers = pages.map(e => {
    return <Route path={`/${e.id}`} component={e.component} key={`${e.id}`} />;
  });

  return (
    <BrowserRouter>
      <div className="main__wrapper">{routers}</div>
    </BrowserRouter>
  );
};

export default MainContent;

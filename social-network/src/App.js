import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import NavBarContainer from "./components/NavBar/NavBarContainer";

const App = props => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main className="main">
          <NavBarContainer store={props.store} />
          <Main store={props.store} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

import "./App.scss";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = props => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <main className="main">
          <NavBarContainer />
          <Main />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Main state={props.state} addPost={props.addPost} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

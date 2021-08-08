import NavBar from "./NavBar";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    navigation: state.navigation,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const SuperNavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default SuperNavBarContainer;

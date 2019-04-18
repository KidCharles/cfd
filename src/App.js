import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Content from "./Components/Content/Content";
import Button from "./Components/Button/Button";
import Footer from "./Components/Footer/Footer";
import Toolbar from "./Components/Toolbar/Toolbar";
import Backdrop from "./Components/Backdrop/Backdrop";
import router from "./routes";

class App extends Component {
  state = {
    toolbarOpen: false
  };
  toolbarToggleClickHandler = () => {
    this.setState(prevState => {
      return { toolbarOpen: !prevState.toolbarOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ toolbarOpen: false });
  };
  render() {
    let toolbar;
    let backdrop;
    if (this.state.toolbarOpen) {
      backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <Nav toolbarToggleClickHandler={this.toolbarToggleClickHandler}/>
        <Toolbar show={this.state.toolbarOpen} />
        {backdrop}
        {router}
        <Footer />
      </div>
    );
  }
}

export default App;

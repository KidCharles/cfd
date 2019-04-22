import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./App.css";
import Nav from "./Components/Nav/Nav";
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
  handleScrollToElement(e) {
    const tesNode = ReactDOM.findDOMNode(this.refs[e]);
    window.scrollTo({ top: tesNode.offsetTop, behavior: "smooth" });
  }
  render() {
    let backdrop;
    if (this.state.toolbarOpen) {
      backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }
    return (
      <div className="App" ref="nav">
        <Nav toolbarToggleClickHandler={this.toolbarToggleClickHandler} />
        <div id="nav" />
        <Toolbar show={this.state.toolbarOpen} />
        {backdrop}
        {router}

        <Footer
          button={
            <span onClick={() => this.handleScrollToElement("nav")}>
              top
            </span>
          }
        />
      </div>
    );
  }
}

export default App;

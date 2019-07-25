import React, { Component } from "react";
import "./reset.css";
import "./App.css";

import ReactDOM from "react-dom";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Toolbar from "./Components/Toolbar/Toolbar";
import Backdrop from "./Components/Backdrop/Backdrop";
import router from "./routes";

class App extends Component {
  state = {
    toolbarOpen: false,
    scrolled: false
  };

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({
          scrolled: false
        });
      }
    });
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll");
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
  toTop = () => {
    this.handleScrollToElement("nav");
  };

  render() {
    let backdrop;
    if (this.state.toolbarOpen) {
      backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }
    return (
      <div className="App" ref="nav">
        <Nav
          toolbarToggleClickHandler={this.toolbarToggleClickHandler}
          scrolled={this.state.scrolled}
          to_top={this.toTop}
        />
        <div id="nav" />
        <Toolbar
          show={this.state.toolbarOpen}
          backdropClickHandler={this.backdropClickHandler}
          to_top={this.toTop}
        />
        {backdrop}
        {router}
        <Footer to_top={this.toTop} />
      </div>
    );
  }
}

export default App;

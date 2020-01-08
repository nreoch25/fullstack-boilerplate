import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import Header from "./Header";

class Layout extends Component {
  public render() {
    return (
      <Fragment>
        <Header />
        <Container>{this.props.children}</Container>
      </Fragment>
    );
  }
}

export default Layout;

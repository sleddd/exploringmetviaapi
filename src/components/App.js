import React, { Component, Fragment } from "react";
import MetObject from "./MetObject";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <nav className="p-3 navbar navbar-dark">
          <div className="container-fluid">
            <p className="mb-0 pt-2 pb-2">
              Thru <span>The Metropolitan Museum of Art</span> One Object at a
              Time
            </p>
          </div>
        </nav>
        <MetObject />
      </Fragment>
    );
  }
}

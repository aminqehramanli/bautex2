import React, { Component } from "react";
import StartLeft from "./StartLeft";
import StartRight from "./StartRight";

export class Start extends Component {
  render() {
    return (
      <div class="start">
        <StartLeft />
        <StartRight />
      </div>
    );
  }
}

export default Start;

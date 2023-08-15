import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class SectionButton extends Component {
  render() {
    return (
      <div class="section_button">
        <button>
          <NavLink href="#">найди свою фактуру</NavLink>
        </button>
      </div>
    );
  }
}

export default SectionButton;

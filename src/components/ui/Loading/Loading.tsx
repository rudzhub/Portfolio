/** Deps */
import React, { Component } from "react";

/** Assets */
import preloader from '../../../assets/img/ui-loading/preloader.gif';

export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img
          src={preloader}
          alt="preloader"
        />
      </div>
    );
  }
}

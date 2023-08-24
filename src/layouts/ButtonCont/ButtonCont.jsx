import React, { Component } from "react";
import { btnName } from "../../constants/btnName";
import Button from "../../componets/Button/Button";

export default class ButtonCont extends Component {
  render() {
    return (
      <div>
        {btnName.forEach((btn) => {
          <Button text={btn} />;
        })}
      </div>
    );
  }
}

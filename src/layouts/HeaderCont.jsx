import React, { Component } from "react";
import Header from "../componets/Header/Header";
import Img from "../componets/Img/Img";
import ButtonCont from "./ButtonCont/ButtonCont";

export default class HeaderCont extends Component {
  render() {
    return (
      <>
        <Header>
          <Img />
          <ButtonCont text="asdasd"/>
        </Header>
      </>
    );
  }
}

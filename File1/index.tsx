import React, { Component } from "react";
import { SUB_CONTAINER_ID } from "./constants";

import { highlightSubContainer, resetDriver } from "./driver";
import {
  ButtonHighlight,
  MainContainer,
  SubContainer,
  PopOverlay,
} from "./styledComponents";

class File1 extends Component {
  componentDidMount() {
    highlightSubContainer();
  }

  componentWillUnmount() {
    resetDriver();
  }

  onClickHighlight = (e: any) => {
    highlightSubContainer();
  };

  onClickReset = () => {
    resetDriver();
  };

  render() {
    return (
      <>
        <ButtonHighlight onClick={this.onClickHighlight}>
          highlight
        </ButtonHighlight>

        <div>
          <div>
            <ButtonHighlight id="reset" onClick={this.onClickReset}>
              reset
            </ButtonHighlight>
          </div>
        </div>
        {/* <PopOverlay id="driver-page-overlay"></PopOverlay> */}
        <MainContainer>
          <SubContainer id={SUB_CONTAINER_ID}>
            <ButtonHighlight id="subContainer-button">
              SubContainer
            </ButtonHighlight>
          </SubContainer>
        </MainContainer>
      </>
    );
  }
}

export default File1;

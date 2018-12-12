import React, { Component } from "react";
import { Input, Label, FormGroup, Alert } from "reactstrap";
import { defaultCipherList } from "constants";

export default class InputBanky extends Component {
  state = {
    isFocused: false
  };
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  handlerFocus = () => this.setState({ isFocused: true });
  handlerBlur = () => {
    this.setState({ isFocused: false });
  };
  focusTextInput() {    
    this.textInput.current.focus();
  }

  render() {
    const { label, validation, ...props } = this.props;
    const { isFocused } = this.state;
    const labelStyle = {
      position: "absolute",
      left: 0,
      top: !this.props.value && !isFocused ? "0.5em" : "0em",
      fontSize: !this.props.value && !isFocused ? 20 : 14,
      color: "#fff",
      fontFamily: "Karla",
      lineHeight: !this.props.value && !isFocused ? "1.6em" : "1.18em",
      height: "1.18em",
      transition: "all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) "
    };
    const inputStyle = {
      fontFamily: "Karla",
      color: "#fff",
      fontSize: "2em",
      lineHeight: "1.18em",
      height: "1.18em"
    };
    const formGroupStyle = {
      paddingTop: 18
    };

    return (
      <FormGroup style={formGroupStyle}>
        <Label style={labelStyle} onClick={this.focusTextInput}>
          {label}
        </Label>
        <Input
        innerRef={this.textInput}
          style={inputStyle}
          onFocus={this.handlerFocus}
          onBlur={this.handlerBlur}                    
          {...props}
        />
      </FormGroup>
    );
  }
}

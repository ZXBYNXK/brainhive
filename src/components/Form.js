// <Form styling={CLASSNAME} inputs={[{PLACEHOLDER, NAME, TYPE <--OPTIONAL,   }, {...}, ...]} afterSubmit={METHOD-OF-CHANGE} />

// Example:
// <Form
//  styling={"Form-Normal"}
//  inputs={
//      [
//          {placeholder:"First Name", name: "firstName"},
//          {placeHolder:"Last Name", type:"text", name: "lastName"},
//          {placeholder:"Age", type:"number", name:"age"}
//      ]
//  }
//  afterSubmit={(e) => {
//      e.preventDefault();
//      this.set
//  }}

import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // The state will contain only the name attributes as keys and the values will be set to an emptyString
    // {INPUT-NAME-ATTRIBUTE: ''}
    //  Ex: {firstName: ''}
  }

  //Uses the afterSubmit given method to pass the state
  submitForm = (e) => {
    e.preventDefault();
    this.props.afterSubmit(this.state);
  };

  handleInput = (e) => {
    if (e.target.value.length > 0) {
      e.target.style.backgroundColor = "seagreen";
    } else {
      e.target.style.backgroundColor = "dodgerblue";
    }
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    let container = {};
    this.props.inputs.map((inputObject) => {
      const htmlNameAttribute = inputObject.name;
      if (!container[htmlNameAttribute]) {
        container[htmlNameAttribute] = "";
      }
    });

    this.setState({
      ...this.state,
      ...container,
    });
  }

  renderInputs = (inputs) => {
    if (inputs[0]) {
      const inputElements = inputs.map((object, index) => {
        const {
          placeholder,
          type,
          name,
          label,
          htmlFor,
          radioValue,
          className,
        } = object;
        switch (type) {
          case "radio":
            return (
              <div className={className || "RadioButtons"}>
                <div>
                  <br />
                  &nbsp;
                  <label htmlFor={htmlFor || name}>
                    {label || " No Label Set"}
                  </label>
                  <br />
                </div>
                <br />
                <input
                  type={type}
                  name={
                    name ||
                    `${placeholder.replace(" ", "-") || `on-default-${index}`}`
                  }
                  key={index}
                  onChange={
                    this.handleInput ||
                    (() =>
                      console.log("No change method set, running on default"))
                  }
                  value={radioValue}
                />
                <br />
              </div>
            );
          case "title":
            return (
              <div className="TitleLabel">
                {label ? (
                  <div>
                    <h1 className="LabelTitle" htmlFor={htmlFor || name}>
                      {label || " No Label Set"}:
                    </h1>
                  </div>
                ) : null}
              </div>
            );
          default:
            return (
              <div className="InputDiv">
                {placeholder ? (
                  <input
                    className={className || "InputElement"}
                    placeholder={placeholder}
                    type={type || "text"}
                    name={name || `${placeholder || `on-default-${index}`}`}
                    key={index}
                    onChange={
                      this.handleInput ||
                      (() =>
                        console.log("No change method set, running on default"))
                    }
                    value={this.state[name]}
                  />
                ) : null}
                
              </div>
            );
        }
      });

      return inputElements;
    } else {
      console.log("Form Component Malfunction.");
      return null;
    }
  };

  render() {
    const { styleRef, inputs, submitText } = this.props;
    const hasStyle = typeof styleRef === Object ? styleRef : false;
    if (hasStyle) {
      return (
        <form style={styleRef} onSubmit={this.submitForm}>
          {this.renderInputs(inputs)}
          {/* {this.renderButtons(inputs.buttons)} */}
        </form>
      );
    } else {
      return (
        <form className={styleRef} onSubmit={this.submitForm}>
          {this.renderInputs(inputs)}
          <div className="buttons-section">
          <button>{submitText}</button>
          </div>
        </form>
      );
    }
  }
}

export default Form;

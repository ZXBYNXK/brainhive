// <Form styling={CLASSNAME} inputs={[{PLACEHOLDER, TYPE, NAME  }, {...}, ...]} afterSubmit={METHOD-OF-CHANGE} />
// Example:
    // <Form 
    //  styling={"Form-Normal"} 
    //  inputs={
    //      [
    //          {placeholder:"First Name", type: "text", name: "firstName"},
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
    this.state = {}
  }
  submitForm = (e) => {
    e.preventDefault();
    this.props.afterSubmit(this.state)
  }

  handleInput = (e) => {
    if (e.target.value.length > 0 ) {
      e.target.style.backgroundColor = "seagreen"
    } else {
      e.target.style.backgroundColor = "dodgerblue"
    }
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
      })
  };

  componentDidMount() {
    let container = {}
    this.props.inputs.map((inputObject) => {
      const attributeValue = inputObject.name;
      container[attributeValue] = "" 
    });

    this.setState({
        ...this.state,
        ...container,
    });
  };

  renderInputs = (inputs) => {
    if (inputs[0]) {
      const inputElements = inputs.map((object, index) => {
        const { placeholder, type, name } = object;
        return (
          <input
            placeholder={placeholder}
            type={type || "text"}
            name={name}
            key={index}
            onChange={this.handleInput}
            value={this.state[name]}
          />
        );
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
          <button>{submitText || "Submit"}</button>
        </form>
      );
    } else {
      return <form className={styleRef} onSubmit={this.submitForm}>
      {this.renderInputs(inputs)}
      <button>{submitText}</button>
      </form>
    }
  }
}

export default Form;

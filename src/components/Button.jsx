import React from "react";

class Button extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <>
        <button
          className={`btn ${
            this.props.isSelected === this.props.children.toLowerCase() &&
            "btn-primary"
          }`}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </button>
      </>
    );
  }
}

export default Button;

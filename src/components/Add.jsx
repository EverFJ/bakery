import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      price: 1,
    };
  }

  handleProductChange = (e) => {
    this.setState({ productName: e.target.value });
  };

  handlePriceChange = (e) => {
    this.setState({ price: e.target.value });
  };

  render() {
    // console.log("productName", this.state.productName);
    // console.log("price", this.state.price);
    return (
      <div>
        {/* <h1>Add</h1> */}
        <input type="text" onChange={this.handleProductChange} />
        <input
          type="range"
          value={this.state.price}
          min={1}
          max={10}
          onChange={this.handlePriceChange}
        />
        <button
          onClick={this.props.addItem(this.state.productName, this.state.price)}
        >
          Add
        </button>
      </div>
    );
  }
}

export default Add;

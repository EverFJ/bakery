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
    console.log(this.props);
    return (
      <div className="container mt-5">
        {/* <h1>Add</h1> */}

        <input
          className="form-control"
          type="text"
          placeholder="Item"
          onChange={this.handleProductChange}
        />
        <input
          type="range"
          value={this.state.price}
          min={1}
          max={10}
          onChange={this.handlePriceChange}
        />
        <button
          className="btn btn-primary"
          // onClick={this.props.addItem(
          //   this.state.productName,
          //   this.state.price
          // )}
        >
          Add
        </button>
      </div>
    );
  }
}

export default Add;

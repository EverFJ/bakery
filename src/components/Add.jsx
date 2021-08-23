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
    this.setState({ price: parseInt(e.target.value) });
  };

  render() {
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
          className="btn btn-primary border"
          onClick={() => {
            this.props.addItem(this.state.productName, this.state.price);
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default Add;

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
      <div className="container">
        <div className="row mt-5 form-group">
          <div className="col-3 ">
            <input
              className="form-control"
              type="text"
              placeholder="Item"
              onChange={this.handleProductChange}
            />
          </div>
          <div className="col-2">
            <button
              className="btn btn-primary border"
              onClick={() => {
                this.props.addItem(this.state.productName, this.state.price);
              }}
            >
              Add
            </button>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <label className="form-label">{this.state.price}</label>
              <input
                className="form-range"
                type="range"
                value={this.state.price}
                min={1}
                max={10}
                onChange={this.handlePriceChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Add;

import React from "react";
import Card from "./Card";

class Pay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basket: [],
      total: 0,
      totalTVA: 0,
      totalEcoTax: 0,
      totalTTC: 0,
    };
  }

  handleSelect = (name, price) => {
    let total = 0;
    let totalEcoTax = 0;
    total = price;
    totalEcoTax += 0.03;
    let totalTVA = price * 0.2;
    let totalTTC = price + totalEcoTax + totalTVA;

    this.setState({
      basket: [
        ...this.state.basket,
        {
          name: name,
          price: price,
        },
      ],
      total: this.state.total + total,
      totalTVA: Math.round((this.state.totalTVA + totalTVA) * 1000) / 1000,
      totalEcoTax:
        Math.round((this.state.totalEcoTax + totalEcoTax) * 1000) / 1000,
      totalTTC: Math.round((this.state.totalTTC + totalTTC) * 1000) / 1000,
    });
  };

  handleClearClick = () => {
    this.setState({
      basket: [],
      total: 0,
      totalTVA: 0,
      totalEcoTax: 0,
      totalTTC: 0,
    });
  };

  render() {
    const { basket, total, totalTVA, totalEcoTax, totalTTC } = this.state;
    // console.log("this.state.history : ", this.state.history);
    return (
      <div className="m-3">
        {this.props.items.map((elem) => (
          <Card
            productName={elem.name}
            price={elem.price}
            onClick={this.handleSelect}
          />
        ))}
        <p className="mt-2">Total : {total}</p>
        <p>TotalTVA : {totalTVA}</p>
        <p>TotalEcoTax : {totalEcoTax}</p>
        <p>TotalTTC : {totalTTC}</p>
        <button className="btn btn-danger " onClick={this.handleClearClick}>
          Clear
        </button>
        <button
          className="btn btn-success m-1"
          onClick={() => {
            this.props.handleSaveClick(basket);
          }}
        >
          Save
        </button>
      </div>
    );
  }
}

export default Pay;

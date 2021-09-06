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
    this.setState({
      basket: [
        ...this.state.basket,
        {
          name: name,
          price: price,
        },
      ],
    });
    let total = 0;
    let totalEcoTax = 0;

    this.state.basket.forEach((elem) => {
      total += elem.price;
      totalEcoTax += 0.03;
    });
    let totalTVA = total * 0.2;
    let totalTTC = total + totalEcoTax + totalTVA;

    this.setState({
      total: Math.round(total * 1000) / 1000,
      totalTVA: Math.round(totalTVA * 1000) / 1000,
      totalEcoTax: Math.round(totalEcoTax * 1000) / 1000,
      totalTTC: Math.round(totalTTC * 1000) / 1000,
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
            this.props.handleSaveClick(this.state.basket);
          }}
        >
          Save
        </button>
      </div>
    );
  }
}

export default Pay;

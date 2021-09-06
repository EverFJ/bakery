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
    console.log("handleSelect, name : ", name);
    console.log("handleSelect, price : ", price);
  };

  render() {
    const { basket, total, totalTVA, totalEcoTax, totalTTC } = this.state;
    return (
      <div>
        {this.props.items.map((item) => (
          <Card />
        ))}
        <p>Total : {total}</p>
        <p>TotalTVA : {totalTVA}</p>
        <p>TotalEcoTax : {totalEcoTax}</p>
        <p>TotalTTC : {totalTTC}</p>
      </div>
    );
  }
}

export default Pay;

import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/" +
        this.props.productName +
        ".png"
    )
      .then((res) => res.blob())
      .then((data) => this.setState({ image: URL.createObjectURL(data) }));
  }

  render() {
    const { productName, price, onClick } = this.props;
    // console.log(this.props);
    console.log(productName);
    return (
      <button
        className="btn btn-primary"
        onClick={() => {
          onClick(productName, price);
        }}
      >
        <img src={this.state.image} alt="" />
      </button>
    );
  }
}

export default Card;

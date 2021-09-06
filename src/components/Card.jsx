import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "./images/image.png",
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/" +
        this.props.productName +
        ".png"
    )
      .then((res) => res.blob())
      .then((data) => this.setState({ image: URL.createObjectURL(data) }))
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    // console.log("state image", this.state.image);
    const { productName, price, onClick } = this.props;
    return (
      <button
        className="btn btn-primary mt-1"
        onClick={() => {
          onClick(productName, price);
        }}
      >
        <img src={this.state.image} width="200px" alt={productName} />
      </button>
    );
  }
}

export default Card;

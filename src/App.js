import React from "react";
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";
import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "add",
      items: [],
    };
  }

  selectAdd = () => {
    this.setState({ activeTab: "add" });
  };
  selectList = () => {
    this.setState({ activeTab: "list" });
  };
  selectPay = () => {
    this.setState({ activeTab: "pay" });
  };

  addItem = (itemName, itemPrice) => {
    let newItems = [...this.state.items, { name: itemName, price: itemPrice }];
    this.setState({ items: newItems });
  };

  handleSubmit = () => {};

  render() {
    console.log("items", this.state.items);

    // console.log(this.selectAdd);
    return (
      <>
        <h1 className="text-center mt-5">Bakery</h1>
        <Button onClick={this.selectAdd} isSelected={this.state.activeTab}>
          Add
        </Button>
        <Button onClick={this.selectList} isSelected={this.state.activeTab}>
          List
        </Button>

        <Button onClick={this.selectPay} isSelected={this.state.activeTab}>
          Pay
        </Button>
        {this.state.activeTab === "add" && <Add addItem={this.addItem} />}
        {this.state.activeTab === "list" && <List items={this.state.items} />}
        {this.state.activeTab === "pay" && <Pay />}
      </>
    );
  }
}

export default App;

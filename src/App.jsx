import React from "react";
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";
import Button from "./components/Button";
import History from "./components/History";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "add",
      items: [],
      history: [],
    };
  }
  handleButtonClick = (e) => {
    this.setState({ activeTab: e.target.innerText.toLowerCase() });
  };

  addItem = (itemName, itemPrice) => {
    let newItems = [...this.state.items, { name: itemName, price: itemPrice }];
    this.setState({ items: newItems, activeTab: "list" });
  };

  deleteItem = (indexNb) => {
    const newItems = this.state.items.filter(
      (elem, index) => indexNb !== index
    );
    this.setState({ items: newItems });
  };

  handleSaveClick = (basket, totalTTC) => {
    const reducedBasket = [];
    basket.forEach((element) => {
      if (!reducedBasket.includes(element.name)) {
        reducedBasket.push(element.name);
      }
    });
    const articles = reducedBasket.join(", ");
    this.setState({
      history: [...this.state.history, { articles: articles, total: totalTTC }],
      activeTab: "history",
    });
  };

  handleSubmit = () => {};

  render() {
    // console.log(this.state.history);
    return (
      <>
        <h1 className="text-center mt-1">Bakery</h1>

        {/* ADD BUTTON */}
        <Button
          onClick={this.handleButtonClick}
          isSelected={this.state.activeTab}
        >
          Add
        </Button>

        {/* LIST BUTTON*/}
        <Button
          onClick={this.handleButtonClick}
          isSelected={this.state.activeTab}
        >
          List
        </Button>

        {/* PAY BUTTON */}
        <Button
          onClick={this.handleButtonClick}
          isSelected={this.state.activeTab}
        >
          Pay
        </Button>

        {/* HISTORY BUTTON */}
        <Button
          onClick={this.handleButtonClick}
          isSelected={this.state.activeTab}
        >
          History
        </Button>

        {/* ADD COMPONENT */}
        {this.state.activeTab === "add" && <Add addItem={this.addItem} />}

        {/* LIST COMPONENT */}
        {this.state.activeTab === "list" && (
          <List items={this.state.items} deleteItem={this.deleteItem} />
        )}

        {/* PAY COMPONENT */}
        {this.state.activeTab === "pay" && (
          <Pay
            items={this.state.items}
            handleSaveClick={this.handleSaveClick}
          />
        )}

        {/* HISTORY COMPONENT */}
        {this.state.activeTab === "history" && (
          <History items={this.state.history} />
        )}
      </>
    );
  }
}

export default App;

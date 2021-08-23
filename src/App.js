import React, { Children } from "react";
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "add",
      items: [],
    };
  }

  handleSubmit = () => {};

  render() {
    return (
      <>
        <h1 className="text-center mt-5">Bakery</h1>
        <Button onClick="" isSelected={activeTab === children ? true : false}>
          Add
        </Button>
        <Button onClick="" isSelected={activeTab === children ? true : false}>
          List
        </Button>
        <Button onClick="" isSelected={activeTab === children ? true : false}>
          Pay
        </Button>
        <Add />
        <List />
        <Pay />
      </>
    );
  }
}

export default App;

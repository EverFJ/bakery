import React from "react";

class List extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <h1>List</h1>
        <ul className="list-group">
          {this.props.items.map((elem) => {
            <li className="list-group-item">{elem}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default List;

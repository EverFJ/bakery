import React from "react";

class History extends React.Component {
  render() {
    return (
      <div className="container m-5">
        <div className="row">
          <ul className="list-group">
            {this.props.items.map((elem) => (
              <li className="list-group-item col-md-6 col-12">
                {elem.name} : {elem.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default History;

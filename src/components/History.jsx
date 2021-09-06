import React from "react";

class History extends React.Component {
  render() {
    return (
      <div className="container m-5">
        <div className="row">
          <ul className="list-group">
            {this.props.items.map((elem, index) => (
              <li
                className={`list-group-item col-md-6 col-12 ${
                  index % 2 === 0 && "bg-primary text-white"
                } `}
              >
                {elem.articles} : {elem.total}€ TCC
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default History;

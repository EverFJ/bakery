import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  deleteItem = (elem) => {
    console.log(elem);
  };

  render() {
    // console.log(this.props.items[0].name);
    return (
      <div className="container mt-5">
        <div className="row">
          <ul className="list-group">
            {this.props.items.map((elem) => {
              return (
                <li className="list-group-item col-6">
                  {elem.name} : {elem.price}{" "}
                  <button
                    className="btn btn-danger col-2 text-right"
                    type="text"
                    onClick={() => {
                      deleteItem(elem);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default List;

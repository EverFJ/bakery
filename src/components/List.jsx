import React from "react";

class List extends React.Component {
  render() {
    return (
      <div className="container m-5">
        <div className="row">
          <ul className="list-group">
            {this.props.items.map((elem, index) => {
              return (
                <div className="row">
                  <li key={index} className="list-group-item col-md-6 col-12">
                    {elem.name} : {elem.price}
                  </li>
                  <button
                    className="btn btn-danger col-md-2 col-3 border"
                    type="text"
                    onClick={() => {
                      this.props.deleteItem(index);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default List;

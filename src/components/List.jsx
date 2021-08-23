import React from "react";

class List extends React.Component {
  render() {
    return (
      <div className="container m-5">
        <div className="row">
          <ul className="list-group">
            {this.props.items.map((elem) => {
              return (
                <div className="row">
                  <li className="list-group-item col-md-6 col-12">
                    {elem.name} : {elem.price}
                  </li>
                  <button
                    className="btn btn-danger col-md-2 col-3 border"
                    type="text"
                    onClick={() => {
                      console.log("élément à supprimer", elem);
                      this.props.items.pop(elem);
                      // console.log(this.props.items);
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

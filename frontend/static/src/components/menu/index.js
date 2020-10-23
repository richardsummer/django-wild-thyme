import React, {Component} from 'react';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // iterate over the menu passed down through props and return a menu item for each object in the array
    let menu = this.props.menu.map((item, index) => {
      return <div className="card col-12 mb-3 mr-3">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.info}</p>
                <button href="#" className="btn btn-primary" onClick={() => this.props.addToCart(item)}>Add to Order</button>
              </div>
            </div>
    }
  );

    return(
      <div className="col-8">
        <div className="row">
          {menu}
        </div>
      </div>
    )
  }
}

export default Menu;

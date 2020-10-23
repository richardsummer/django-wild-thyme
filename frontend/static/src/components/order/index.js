import React, {Component} from 'react';

class Order extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // iterate over the order passed down through props and return an order item for each object in the array
    let orderList= this.props.order.map((item, index) => {
      return <div key={index}>
              {item.name}
              {item.price}
              <button type="button" onClick={() => this.props.removeFromCart(item)}>Remove</button>
            </div>
    }
  );

    return(
      <div className="col-4 cart">
        <h3>My Order</h3>
        <h5>Subtotal ${this.props.subtotal}</h5>
        {orderList}
      </div>

    )
  }
}

export default Order;

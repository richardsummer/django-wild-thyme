import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/';
import Order from './components/order/';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menu: [],
      order: [],
      subtotal: 0
    }

    this.addToCart=this.addToCart.bind(this);
    this.removeFromCart=this.removeFromCart.bind(this);
  }

  addToCart(item) {
    let items = [...this.state.order, item];
    // Same as items.push(item)
    this.setState((prevState, props)=> ({order: items, subtotal: prevState.subtotal + item.price}));
  }

  removeFromCart(item){
    let items = [...this.state.order];
    let index = items.indexOf(item);
    items.splice(index, 1);
    this.setState((prevState, props)=> ({order: items, subtotal: prevState.subtotal - item.price}));
  }

  componentDidMount() {
    // create static menu array here
    // e.g. const menu = [food item objects go here]
    // this.setState({menu});
    // let item1 = {
    //   name: 'Filet Mignon',
    //   info: 'The finest cut of beef you can find.',
    //   price: 40,
    // }
    // let item2 = {
    //   name: 'Cedar Plank Salmon',
    //   info: 'Fresh Atlantic salmon, topped with a lemon glaze.',
    //   price: 33,
    // }
    // let item3 = {
    //   name: 'Lamb Chops',
    //   info: 'Marinated chops with fresh mint.',
    //   price: 30,
    // }
    // let item4 = {
    //   name: 'Lobster Tail',
    //   info: 'Just caught rock lobster in sizzling butter.',
    //   price: 38,
    // }

    // const menu = [item1, item2, item3, item4];
    //
    // this.setState({menu});

    fetch('/api/v1/menu/')
      .then(response => response.json())
      .then(data => this.setState({menu: data}));
  }

  render(){
    return (
      <div className="row">
        <Menu menu={this.state.menu} addToCart={this.addToCart} />
        <Order order={this.state.order} subtotal={this.state.subtotal} removeFromCart={this.removeFromCart} />
      </div>
    );
  }


}

export default App;

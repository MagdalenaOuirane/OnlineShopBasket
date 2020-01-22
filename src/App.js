import React from 'react';


class App extends React.Component {


  state = {
    availableProducts: 7,
    quantity: 6,
  }

  handleRemoveFromCart() {
    this.setState({
      quantity: this.state.quantity - 1
    });
  }

  handleAddCart() {
    this.setState({
      quantity: this.state.quantity + 1
    });
  }

  render() {

    return (
      <div>
        <button disabled={this.state.quantity === 0 ? true : false} onClick={this.handleRemoveFromCart.bind(this)}> - </button>
        <span> {this.state.quantity} </span>
        <button disabled={this.state.quantity === this.state.availableProducts ? true : false} onClick={this.handleAddCart.bind(this)}> + </button>

      </div>
    );
  }
}
export default App;

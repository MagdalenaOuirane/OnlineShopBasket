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


  handleBuy() {
    // console.log('its bought');
    this.setState({

      availableProducts: this.state.availableProducts - this.state.quantity,
      quantity: 0

    })

  }
  render() {

    return (
      <div>
        <button disabled={this.state.quantity === 0 ? true : false} onClick={this.handleRemoveFromCart.bind(this)}> - </button>

        <span style={this.state.quantity === 0 ? { opacity: 0.3 } : {}}> {this.state.quantity} </span>

        <button disabled={this.state.quantity === this.state.availableProducts ? true : false} onClick={this.handleAddCart.bind(this)}> + </button>
        {this.state.quantity > 0 && <button onClick={this.handleBuy.bind(this)}> Buy </button>}

      </div>
    );
  }
}
export default App;

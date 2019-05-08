// import React from 'react.development';
import LoadCheckout from './LoadCheckout.js';
import GeneralForm from './GeneralForm.js';
import ShippingForm from './ShippingForm.js';
import PaymentForm from './PaymentForm.js';
import CheckoutComplete from './CheckoutComplete.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formStateCounter: 0,
      name: '',
      email: '',
      password: '',
      cityState: '',
      zipCode: 0,
      phoneNumber: 0,
      creditCardNumber: '',
      expirationDate: new Date(),
      cvv: 0,
      billingZipCode: 0
    };

    this.showNextForm = this.showNextForm.bind(this);
  }

  showNextForm() {
    this.setState({
      formStateCounter: this.state.formStateCounter + 1
    })
  }

  render() {
    return (
      <div>
        <header className="jumbotron">
          <h1 className="display-3 text-center">Checkout Experience</h1>
        </header>
        <main className="container">
          <div className="row">
            <div className="col-8 m-auto">
              {this.state.formStateCounter === 0 ? <LoadCheckout next={this.showNextForm} /> : undefined}
              {this.state.formStateCounter === 1 ? <GeneralForm next={this.showNextForm} /> : undefined}
              {this.state.formStateCounter === 2 ? <ShippingForm next={this.showNextForm} /> : undefined}
              {this.state.formStateCounter === 3 ? <PaymentForm next={this.showNextForm} /> : undefined}
              {this.state.formStateCounter === 4 ? <CheckoutComplete /> : undefined}
            </div>
          </div>
        </main>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
        // export default App;

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
      loadCheckout: true,
      showGeneralForm: false,
      showShippingForm: false,
      showPaymentForm: false,
      checkoutComplete: false,
    };

    this.showNextForm = this.showNextForm.bind(this);
  }

  showNextForm(newForm, currentForm) {
    this.setState({
      [currentForm]: false,
      [newForm]: true
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
              {this.state.loadCheckout ? <LoadCheckout next={this.showNextForm} /> : undefined}
              {this.state.showGeneralForm ? <GeneralForm next={this.showNextForm} /> : undefined}
              {this.state.showShippingForm ? <ShippingForm next={this.showNextForm} /> : undefined}
              {this.state.showPaymentForm ? <PaymentForm next={this.showNextForm} /> : undefined}
              {this.state.checkoutComplete ? <CheckoutComplete /> : undefined}
            </div>
          </div>
        </main>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
        // export default App;

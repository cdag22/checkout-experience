// import React from 'react.development';
import LoadCheckout from './LoadCheckout.js';
import GeneralForm from './GeneralForm.js';
import ShippingForm from './ShippingForm.js';
import PaymentForm from './PaymentForm.js';
import CheckoutComplete from './CheckoutComplete.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.payload = {};
    this.state = {
      formCounter: 0,
      name: '',
      email: '',
      password: '',
      cityState: '',
      zipCode: 0,
      phoneNumber: 0,
      creditCard: '',
      expirationDate: new Date(),
      cvv: 0,
      billingZipCode: 0
    };

    this.showNextForm = this.showNextForm.bind(this);
    this.updateUserData = this.updateUserData.bind(this);
    this.buildData = this.buildData.bind(this);
    this.makePostRequest = this.makePostRequest.bind(this);
    // this.copyState = this.copyState.bind(this);

    this.components = [
      <LoadCheckout showNext={this.showNextForm} updateUserData={this.updateUserData} />,
      <GeneralForm showNext={this.showNextForm} updateUserData={this.updateUserData} />,
      <ShippingForm showNext={this.showNextForm} updateUserData={this.updateUserData} />,
      <PaymentForm showNext={this.showNextForm} updateUserData={this.updateUserData} />,
      <CheckoutComplete makePostRequest={this.makePostRequest} buildData={this.buildData} />
    ];
  }


  showNextForm() {
    if (this.state.formCounter === this.components.length - 1) {
      this.setState({
        formCounter: 0
      })
    } else {
      this.setState({
        formCounter: this.state.formCounter + 1
      })
    }
  }

  updateUserData(propName, value) {
    this.setState({
      [propName]: value
    });
  }

  buildData() {
    let payload = Object.create(this.state);
    let titles = ['General Information', 'Shipping Information', 'Payment Information'];
    let sections = [['name', 'email', 'password'], ['cityState', 'zipCode', 'phoneNumber'], ['creditCard', 'expirationDate', 'cvv', 'billingZipCode']];
    let names = [['Name', 'Email', 'Password'], ['Address', 'Zip Code', 'Phone Number'], ['Card Number', 'Expiry Date', 'CVV', 'Billing Zip Code']];
    return titles.map((title, i) => [title, sections[i].map((prop, k) => [names[i][k], payload[prop]])]);
  }

  // copyState() {
  //   this.payload = Object.create(this.state);
  // }

  makePostRequest() {
    fetch('http://localhost:3000/postData', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });
    this.showNextForm();
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
              <div className="center-content vh-60">
                {this.components[this.state.formCounter]}
              </div>
            </div>
          </div>
        </main>
      </div >
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
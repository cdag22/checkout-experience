const PaymentForm = ({ next }) => {

  return (
    <div className="form">
      <div className="form-group">
        <label htmlFor="CreditCard">Credit Card Number</label>
        <input type="text" className="form-control" placeholder="5102-34..." />
        <label htmlFor="expirationDate">Expiration Date</label>
        <input type="date" name="expirationDate" className="form-control" placeholder="05/21" />
        <label htmlFor="CVV">CVV</label>
        <input type="number" name="CVV" className="form-control" placeholder="910" />
      </div>
      <div className="form-group">
        <label htmlFor="billingZipCode">Billing Zip Code</label>
        <input type="number" name="billingZipCode" className="form-control" placeholder="12345" />
      </div>
      <button onClick={() => next('checkoutComplete', 'showPaymentForm')} className="form-control btn-block btn btn-dark mt-2">Next</button>
    </div>
  )
};

export default PaymentForm;
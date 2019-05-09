const PaymentForm = ({ showNext, updateUserData }) => {

  return (
    <div className="form">
      <div className="form-group">
        <label htmlFor="creditCard">Credit Card Number</label>
        <input onChange={(e) => updateUserData('creditCard', e.target.value)} type="text" className="form-control" placeholder="5102-34..." />
        <label htmlFor="expirationDate">Expiration Date</label>
        <input onChange={(e) => updateUserData('expirationDate', e.target.value)} type="date" name="expirationDate" className="form-control" placeholder="05/21" />
        <label htmlFor="CVV">CVV</label>
        <input onChange={(e) => updateUserData('cvv', e.target.value)} type="number" name="CVV" className="form-control" placeholder="910" />
      </div>
      <div className="form-group">
        <label htmlFor="billingZipCode">Billing Zip Code</label>
        <input onChange={(e) => updateUserData('billingZipCode', e.target.value)} type="number" name="billingZipCode" className="form-control" placeholder="12345" />
      </div>
      <button onClick={() => showNext()} className="form-control btn-block btn btn-dark mt-2">Next</button>
    </div>
  )
};

export default PaymentForm;
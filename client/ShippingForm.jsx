const ShippingForm = ({ next }) => {

  return (
    <div className="form">
      <div className="form-group">
        <label htmlFor="Address">Address</label>
        <input type="text" className="form-control" placeholder="123 spruce St. Boulder, CO" />
        <label htmlFor="zipCode">Zip Code</label>
        <input type="number" name="zipCode" className="form-control" placeholder="11302" />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="number" name="phoneNumber" className="form-control" placeholder="(509)-123-4567" />
      </div>
      <button onClick={() => next('showPaymentForm', 'showShippingForm')} className="form-control btn-block btn btn-dark mt-2">Next</button>
    </div>
  )
};

export default ShippingForm;
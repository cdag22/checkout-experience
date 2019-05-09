const ShippingForm = ({ showNext, updateUserData }) => {

  return (
    <div className="form">
      <div className="form-group">
        <label htmlFor="Address">Address</label>
        <input onChange={(e) => updateUserData('cityState', e.target.value)} type="text" className="form-control" placeholder="123 spruce St. Boulder, CO" />
        <label htmlFor="zipCode">Zip Code</label>
        <input onChange={(e) => updateUserData('zipCode', e.target.value)} type="number" name="zipCode" className="form-control" placeholder="11302" />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input onChange={(e) => updateUserData('phoneNumber', e.target.value)} type="number" name="phoneNumber" className="form-control" placeholder="(509)-123-4567" />
      </div>
      <button onClick={() => showNext()} className="form-control btn-block btn btn-dark mt-2">Next</button>
    </div>
  )
};

export default ShippingForm;
const CheckoutComplete = (props) => {

  return (
    <div>
      <h1 className="display-5 text-center mb-2">Purchase Information</h1>
      <div className="card card-box">
        <div className="card-header text-center">
          General Information
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h6 className="font-weight-bold">Name</h6><span></span></li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default CheckoutComplete;
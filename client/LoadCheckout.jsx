const LoadCheckout = ({ next }) => {

  return (
    <button className="btn btn-dark btn-lg btn-block" onClick={() => next('showGeneralForm', 'loadCheckout')}>Checkout</button>
  );
};

export default LoadCheckout;
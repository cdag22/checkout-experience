const LoadCheckout = ({ next }) => {

  return (
    <button className="btn btn-dark btn-lg btn-block" onClick={() => next()}>Checkout</button>
  );
};

export default LoadCheckout;
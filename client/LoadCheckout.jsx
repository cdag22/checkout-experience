const LoadCheckout = ({ showNext }) => {

  return (
    <button className="btn btn-dark btn-lg btn-block" onClick={() => showNext()}>Checkout</button>
  );
};

export default LoadCheckout;
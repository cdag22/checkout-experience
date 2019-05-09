import CardBox from './CardBox.js';

const CheckoutComplete = ({ buildData, makePostRequest }) => {
  // copyState();
  let data = buildData();
  return (
    <div>
      <h1 className="display-5 text-center mb-2">Purchase Information</h1>
      {data.map((pair, i) => <CardBox data={pair} key={i} />)}
      <button onClick={() => makePostRequest()} className="form-control btn-block btn btn-dark my-5">Sumbit Purchase</button>
    </div>
  )
};

export default CheckoutComplete;
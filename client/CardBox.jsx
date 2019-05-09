const CardBox = ({ data }) => {
  return (
    <div className="card card-box my-5">
      <div className="card-header text-center">
        {data[0]}
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {data[1].map((pair, i) => <li key={i} className="list-group-item list-card-item"><span className="font-weight-bold">{pair[0]}</span><span>{pair[1]}</span></li>)}
        </ul>
      </div>
    </div>
  );
}

export default CardBox;
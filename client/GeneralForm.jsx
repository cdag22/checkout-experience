const GeneralForm = ({ next }) => {

  return (
    <div className="form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" placeholder="John Doe..." />
      </div>
      <div className="form-group">
        <label htmlFor="email">email</label>
        <input type="email" className="form-control" placeholder="me@google.com" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" />
      </div>
      <button onClick={() => next()} className="form-control btn-block btn btn-dark mt-2">Next</button>
    </div>
  )
};

export default GeneralForm;
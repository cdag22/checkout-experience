const GeneralForm = ({ showNext, updateUserData }) => {

  return (
    <div className="form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input onChange={(e) => updateUserData('name', e.target.value)} type="text" className="form-control" placeholder="John Doe..." />
      </div>
      <div className="form-group">
        <label htmlFor="email">email</label>
        <input onChange={(e) => updateUserData('email', e.target.value)} type="email" className="form-control" placeholder="me@google.com" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input onChange={(e) => updateUserData('password', e.target.value)} type="password" className="form-control" />
      </div>
      <button onClick={() => showNext()} className="form-control btn-block btn btn-dark mt-2">Next</button>
    </div>
  )
};

export default GeneralForm;
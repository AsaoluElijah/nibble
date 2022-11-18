const BusinessSignup = () => {
  return (
    <main style={{ background: "url('/hero-bg.png')" }}>
      <div className="container d-flex min-vh-100 align-items-center justify-content-center">
        <div className="bg-light border-3 shadow-sm p-5 rounded">
          <h1 className="fw-bold">Register Your Business</h1>

          <form action="" className="mt-4">
            <div>
              <label htmlFor="bname" className="text-muted mb-2">
                Company Name
              </label>
              <input type="text" id="bname" className="form-control" />
            </div>{" "}
            <div className="mt-4">
              <label htmlFor="bemail" className="text-muted mb-2">
                Company Email
              </label>
              <input type="email" id="bemail" className="form-control" />
            </div>
            <div className="mt-4">
              <label htmlFor="pass" className="text-muted mb-2">
                Choose a password
              </label>
              <input type="password" id="pass" className="form-control" />
            </div>
            <div className="mt-4">
              <label htmlFor="activi" className="text-muted mb-2">
                Describe company activities
              </label>
              <textarea
                name=""
                id="activi"
                rows="3"
                className="form-control"
              ></textarea>
            </div>
            <div>
              <button className="btn btn-primary w-100 mt-4">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default BusinessSignup;

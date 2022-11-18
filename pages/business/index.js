import Link from "next/link";
const BusinessIndex = () => {
  return (
    <main style={{ background: "url('./hero-bg.png')" }}>
      <div className="container">
        <div className="row min-vh-100 justify-content-center align-items-center">
          <div className="col-md-6">
            <h1
              className="fw-boldr"
              style={{ fontSize: "70px", fontWeight: "900" }}
            >
              Integrate Nibble on your Website
            </h1>
            <p className="text-muted">
              Start collection verified data Nibble in your application in few
              minutes.
            </p>
            <Link href="/business/signup">
              <button className="btn bg-primaryColor">Get Started</button>
            </Link>
          </div>
          <div className="col-md-6">
            <img src="/verify.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BusinessIndex;

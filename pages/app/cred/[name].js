import { useRouter } from "next/router";
import Link from "next/link";
import BackButton from "../../../components/BackButton";
import { useState, useEffect } from "react";

const Cred = () => {
  const router = useRouter();
  const [name, setname] = useState(null);
  const [verified, setverified] = useState(null);

  // let { name, verified } = router.query;
  // verified = JSON.parse(verified);

  useEffect(() => {
    let { name, verified } = router.query;
    verified = JSON.parse(verified);
    setname(name);
    setverified(verified);
    console.log(name);
  }, []);
  return (
    <>
      <div className="container">
        {verified ? (
          <div>
            <div className="text-center" style={{ marginTop: "25vh" }}>
              {/* <h3 className="text-muted mb-3">ICON?</h3> */}
              <h1 className="text-uppercase">{name}</h1>
              <p className="text-success">Verified (Oct. 20 2020)</p>
            </div>
            <div className="px-3">
              <p className="mt-5  text-muted">
                You {name} is now verified on nibble and can now easily be
                integrated with other platforms.
              </p>
              <h5 className="my-4">Used by</h5>
              <ul>
                <li>Binance</li>
                <li>Kuda</li>
              </ul>
              <BackButton className="btn btn-dark mt-4 btn-hg w-100" />
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center" style={{ marginTop: "25vh" }}>
              {/* <h3 className="text-muted mb-3">ICON?</h3> */}
              <h1 className="text-uppercase">{name}</h1>
              <p className="text-danger">Not Verified</p>
            </div>
            <div className="px-3">
              <p className="mt-5  text-muted">
                You {name} is not verified on nibble. Very now to start
                integrating with other platforms.
              </p>
              {!verified && (
                <Link
                  href={{
                    pathname: "/app/verify-cred/[name]",
                    query: {
                      name: name,
                    },
                  }}
                >
                  <button className="btn btn-success mt-4 btn-hg w-100">
                    Verify Now
                  </button>
                </Link>
              )}
              <BackButton className="btn btn-dark mt-4 btn-hg w-100" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cred;

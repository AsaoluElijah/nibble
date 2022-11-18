import { useRouter } from "next/router";
import BackNav from "../../../components/BackNav";

const VerifyCred = () => {
  const router = useRouter();
  let { name } = router.query;

  return (
    <>
      {name && (
        <>
          <BackNav pageTitle={name} />
          <div className="container" style={{ marginTop: "20vh" }}>
            {name.toLocaleLowerCase() === "nin" && verifyNIN}
            {name.toLocaleLowerCase() === "sms" && verifySMS}
            {name.toLocaleLowerCase() === "email" && verifyEmail}
            {name.toLocaleLowerCase() === "passport" && verifyPassport}
          </div>
        </>
      )}
    </>
  );
};

export default VerifyCred;

const verifySMS = (
  <>
    <label className="text-muted" htmlFor="nin">
      To complete the verification process, enter your mobile number below:
    </label>
    <input
      id="nin"
      type="text"
      className="form-control mt-4"
      placeholder="Enter NIN"
      style={{
        height: "50px",
      }}
    />
    <button className="btn btn-dark w-100 mt-4">Continue Verification</button>
  </>
);

const verifyNIN = (
  <>
    <label className="text-muted" htmlFor="nin">
      To complete the verification process, enter your 11 digit NIN below:
    </label>
    <input
      id="nin"
      type="text"
      className="form-control mt-4"
      placeholder="Enter NIN"
      style={{
        height: "50px",
      }}
    />
    <button className="btn btn-dark w-100 mt-4">Continue Verification</button>
  </>
);

const verifyEmail = (
  <>
    <label className="text-muted" htmlFor="nin">
      To complete the verification process, enter your email address below:
    </label>
    <input
      id="nin"
      type="text"
      className="form-control mt-4"
      placeholder="Enter NIN"
      style={{
        height: "50px",
      }}
    />
    <button className="btn btn-dark w-100 mt-4">Continue Verification</button>
  </>
);

const verifyPassport = (
  <>
    <label className="text-muted" htmlFor="nin">
      To complete the verification process, enter your 12 digit Passport below:
    </label>
    <input
      id="nin"
      type="text"
      className="form-control mt-4"
      placeholder="Enter NIN"
      style={{
        height: "50px",
      }}
    />
    <button className="btn btn-dark w-100 mt-4">Continue Verification</button>
  </>
);

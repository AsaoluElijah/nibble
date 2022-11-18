import { useRouter } from "next/router";
import Link from "next/link";

import BackButton from "../../../components/BackButton";

const AppIntegration = () => {
  const router = useRouter();
  const { company } = router.query;

  return (
    <>
      <div className="container">
        <div className="text-center" style={{ marginTop: "25vh" }}>
          {/* <h3 className="text-muted mb-3">ICON?</h3> */}
          <h1 className="text-capitalize">{company}</h1>
          <p className="text-success">Verified (Oct. 20 2020)</p>
        </div>
        <div className="px-3">
          <p className="mt-5  text-muted">
            You verified your <span className="text-capitalize">{company}</span>{" "}
            account with the following credentials: <b>NIN, BVN</b>.
          </p>
          <BackButton className="btn btn-dark mt-4 btn-hg w-100" />
        </div>
      </div>
    </>
  );
};

export default AppIntegration;

import AppLayout from "../../layouts/app";

const AppNewCred = () => {
  const credentials = [
    "BVN",
    "CAC Certificate",
    "Stamp Duty",
    "Voters Card",
    "Driver's License",
    "TIN",
  ];
  return (
    <div className="container px-3">
      <div style={{ marginTop: "10vh" }}>
        <h1>Add new credential</h1>
        {/*  */}
        <section className="row mt-5">
          {credentials.map((cred) => (
            <div className="col-6 mb-3 px-2" key={cred}>
              <div
                className="d-flex px-3 py-3 rounded-3 border bg-dark text-light"
                style={{
                  height: "150px",
                }}
              >
                <div className="align-self-end">
                  <h4>{cred}</h4>
                </div>
              </div>
            </div>
          ))}
        </section>
        {/*  */}
      </div>
    </div>
  );
};

export default AppNewCred;
AppNewCred.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

import { IoIosArrowForward } from "react-icons/io";
import AppLayout from "../../layouts/app";
import Link from "next/link";

const Integrations = () => {
  const integrations = [
    {
      company_name: "Binance",
      logo: "#ffcc00",
      collected_data: ["Email", "NIN"],
      date: "20-10-2020",
    },
    {
      company_name: "Coinbase",
      logo: "#3f51b5",
      collected_data: ["Email", "Passport"],
      date: "20-10-2020",
    },
    {
      company_name: "Cowrywise",
      logo: "#ff5722",
      collected_data: ["Email", "Passport"],
      date: "20-10-2020",
    },
  ];

  return (
    <div className="conatiner px-3">
      <div style={{ marginTop: "10vh" }}>
        <h1 className="fw-bolder">Integrations</h1>
        <p className="text-muted">See who is using your data</p>

        <div className="mt-5">
          {" "}
          {integrations.map((res) => (
            <div key={res.company_name}>
              <Link
                href={{
                  pathname: "/app/integrations/[company]",
                  query: {
                    company: res.company_name.toLowerCase(),
                  },
                }}
              >
                <div className="mt-3 d-flex align-items-center border-bottom py-2">
                  <div
                    className="circle circle-lg border rounded-circle"
                    style={{ background: res.logo }}
                  ></div>
                  <div className="ms-3">
                    <p className="my-0 h5 fw-normal">{res.company_name}</p>
                    <small className="text-muted">
                      is using: {res.collected_data.join(", ")}.
                    </small>
                  </div>
                  <div className="ms-auto">
                    <IoIosArrowForward />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integrations;

Integrations.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

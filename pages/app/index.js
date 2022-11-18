import { IoIosArrowForward } from "react-icons/io";
import AppLayout from "../../layouts/app";

import Link from "next/link";
import Head from "next/head";

import { FaPassport, FaAddressCard } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { AiOutlineNumber } from "react-icons/ai";

import { useState, useEffect } from "react";

const AppHome = () => {
  const credentials = [
    {
      name: "BVN",
      verified: true,
    },
    {
      name: "NIN",
      verified: false,
    },
    {
      name: "Voter's Card",
      verified: true,
    },
    {
      name: "Passport",
      verified: false,
    },
  ];

  const [integrations, setIntegrations] = useState([]);
  const [integrationLoaded, setintegrationLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIntegrations([
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
      ]);
      setintegrationLoaded(true);
    }, 2000);
  }, []);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/skeleton-elements@3.4.0/skeleton-elements.css"
        />
      </Head>

      <div className="container px-3">
        <h1 className="mt-5 fw-bold">Hello, Joy!</h1>
        <p className="text-muted">Welcome to your Nibble dashboard 🍪</p>
        <section className="row mt-5">
          {credentials.map((cred) => (
            <div className="col-6 mb-3 px-2" key={cred.name}>
              <Link
                href={{
                  pathname: "/app/cred/[name]",
                  query: {
                    name: cred.name.toLowerCase(),
                    verified: cred.verified,
                  },
                }}
              >
                <div
                  className="d-flex px-3 rounded border"
                  style={{
                    height: "150px",
                  }}
                >
                  <div className="align-self-end">
                    <p className="my-3">
                      {cred.name.toLowerCase() === "bvn" && (
                        <AiOutlineNumber className="h5" />
                      )}{" "}
                      {cred.name.toLowerCase() === "voter's card" && (
                        <FaAddressCard className="h5" />
                      )}{" "}
                      {cred.name.toLowerCase() === "passport" && (
                        <FaPassport className="h5" />
                      )}{" "}
                      {cred.name.toLowerCase() === "nin" && (
                        <GoVerified className="h5" />
                      )}
                    </p>
                    <h3>{cred.name}</h3>
                    {cred.verified ? (
                      <p className="text-success">Verified</p>
                    ) : (
                      <p className="text-danger">Not verified</p>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </section>

        <section className="mt-3 mb-5 pb-5">
          <h4>Integrations</h4>
          {integrationLoaded && integrations.length > 0 ? (
            integrations.map((res) => (
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
                      className="circle border rounded-circle"
                      style={{ background: res.logo }}
                    ></div>
                    <div className="ms-3">
                      <p className="my-0">{res.company_name}</p>
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
            ))
          ) : (
            <>
              {/* skeleton laoder */}
              <div className="mt-3 d-flex align-items-center border-bottom py-2">
                <div
                  className="circle border rounded-circle skeleton-text skeleton-effect-wave"
                  style={{ background: "#ccc" }}
                ></div>
                <div className="ms-3">
                  <p className="my-0 skeleton-text skeleton-effect-wave">
                    Lorem ipsun
                  </p>
                  <small className="skeleton-text skeleton-effect-wave">
                    is using: Lorem ipsun.
                  </small>
                </div>
                <div className="d-none ms-auto">
                  <IoIosArrowForward />
                </div>
              </div>
              {/* loader ends */}
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default AppHome;

AppHome.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

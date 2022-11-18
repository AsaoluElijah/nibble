import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  GrHomeRounded,
  GrChapterAdd,
  GrAppsRounded,
  GrUserSettings,
} from "react-icons/gr";

const BottomNav = () => {
  const router = useRouter();
  return (
    <nav className="navbar text-center fixed-bottom navbar-light glass-nav justify-content-between px-3 py-3 border-top">
      <Link
        href="/app"
        className={router.pathname == "/app" ? "bnav-active" : ""}
      >
        <GrHomeRounded style={{ fontSize: "24px" }} />
        <small className="d-block mt-1">Home</small>
      </Link>
      <Link
        href="/app/new-cred"
        className={router.pathname == "/app/new-cred" ? "bnav-active" : ""}
      >
        <GrChapterAdd style={{ fontSize: "24px" }} />
        <small className="d-block mt-1">My Creds.</small>
      </Link>
      <Link
        href="/app/integration"
        className={router.pathname == "/app/integration" ? "bnav-active" : ""}
      >
        <GrAppsRounded style={{ fontSize: "24px" }} />
        <small className="d-block mt-1">Integrations</small>
      </Link>

      <Link
        href="/app/profile"
        className={router.pathname == "/app/profile" ? "bnav-active" : ""}
      >
        <GrUserSettings style={{ fontSize: "24px" }} />
        <small className="d-block mt-1">Profile</small>
      </Link>
    </nav>
  );
};

export default BottomNav;

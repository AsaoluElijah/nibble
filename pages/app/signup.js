import Link from "next/link";
import AuthLogo from "../../components/AuthLogo";

const Signup = () => {
  return (
    <div className="container px-4">
      <AuthLogo />
      <form className="mt-4 auth-form" action="">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Full Name"
        />
        <input
          type="text"
          className="form-control mt-4"
          placeholder="Enter Email Address"
        />
        <input
          type="password"
          className="form-control mt-4"
          placeholder="Enter New Password"
        />
        <button className="btn bg-primaryColor mt-4 w-100">Continue</button>
      </form>
      <small className="d-block mt-4 text-center text-muted">
        Already have an account?{" "}
        <Link href="/app/login" passHref>
          Login
        </Link>
      </small>
    </div>
  );
};

export default Signup;

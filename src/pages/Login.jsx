import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";
import googleLogo from "/images/icon-google.png";
import Swal from "sweetalert2";

const Login = () => {
  const { signInWithGoogle, signInUser, setUser, error, setError } =
    use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome, ${result.user.displayName || "User"}!`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ email, password });
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome, ${result.user.displayName || "User"}!`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };
  return (
    <div className="hero bg-base-200 min-h-[80vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-[300px] md:w-[500px] shrink-0 shadow-2xl md:py-10">
          <div className="card-body">
            <div className="text-center space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">Login </h1>
              <p className="text-[16px]">
                Don't Have an account?{" "}
                <Link
                  to="/register"
                  className="text-primary font-semibold underline "
                >
                  Register Now
                </Link>
              </p>
            </div>
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="example@gmail.com"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  placeholder="**********"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="bg-[#4CAF50] hover:bg-[#388E3C] text-sm text-white font-semibold py-3 rounded-lg transition hover:shadow mt-4 cursor-pointer">
                  Login
                </button>
                {error && (
                  <p className="text-red-500 text-sm font-semibold">{error}r</p>
                )}
              </fieldset>
            </form>
            <div className="divider">OR</div>

            <button className="btn" onClick={handleGoogleSignIn}>
              {" "}
              <img src={googleLogo} alt="" />
              Sign In With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { use } from "react";
import googleLogo from "/images/icon-google.png";
import { Link, useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { signInWithGoogle, createUser, setUser, setLoading, error, setError } =
    use(AuthContext);

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    console.log({ name, email, password, photo });

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least 1 uppercase, 1 lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    setError("");
    setLoading(true);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Logged in with Google",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Google Sign-In Failed",
          text: error.message,
        });
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-[80vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-[300px] md:w-[500px] shrink-0 shadow-2xl md:py-10">
            <div className="card-body">
              <div className="text-center space-y-2">
                <h1 className=" text-4xl md:text-5xl font-bold">Register </h1>
                <p className="text-[16px]">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-primary font-semibold underline"
                  >
                    Login Now
                  </Link>
                </p>
              </div>
              <form onSubmit={handleSignUp}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input w-full"
                    placeholder="Enter Your Name"
                  />
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

                  {error && (
                    <p className="text-red-500 text-sm font-semibold">
                      {error}
                    </p>
                  )}

                  <label className="label">Image-URL</label>
                  <input
                    type="text"
                    name="photo"
                    className="input w-full"
                    placeholder="Enter Your image URL"
                  />
                  <button className="bg-[#4CAF50] hover:bg-[#388E3C] text-white font-semibold py-3 rounded-lg transition hover:shadow mt-4 cursor-pointer">
                    Register
                  </button>
                </fieldset>
              </form>
              <div className="divider">OR</div>

              <button className="btn" onClick={handleGoogleSignIn}>
                {" "}
                <img src={googleLogo} alt="" />
                Sign Up With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

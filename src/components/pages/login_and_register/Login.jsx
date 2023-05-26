import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
  useTitle("Login")
  const [error, setError] = useState("");
  const { login, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";


  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login Successfull!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
 

    if ((email, password)) {
      login(email, password)
        .then((result) => {
          const user = result.user;
          setError("");
          console.log(user);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Login Successfull!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate(from);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  return (
    <div className="flex md:flex-row flex-col md:justify-between my-5 border max-w-7xl bg-gray-50 rounded-xl mx-auto ">
      <div className="p-5 md:p-28 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#4DB385]">
          Sign in to Account
        </h1>
        <div className="border-[3px] my-3 mx-auto border-[#4DB385] w-20"></div>
        <div
          onClick={handleGoogleSignIn}
          className="border w-1/2 mx-auto p-2 rounded-xl bg-blue-500 font-semibold hover:bg-blue-700 cursor-pointer text-white flex items-center justify-between"
        >
          <span>
            <FaGoogle />
          </span>
          <p>Sign In with google</p>
          <div></div>
        </div>
        <p className="text-gray-500 text-[17px] my-2">
          or use your email account
        </p>
        <form onSubmit={handleLogin} className="flex flex-col">
          <label className="text-start text-[17px] font-medium mb-2">
            Email
          </label>
          <input
            className="outline-none p-4 rounded-md mb-6"
            placeholder="Enter your email"
            type="email"
            name="email"
            required
          />
          <label className="text-start text-[17px] font-medium mb-2">
            Password
          </label>
          <input
            className="outline-none p-4 rounded-md mb-4"
            placeholder="Enter your password"
            type="password"
            name="password"
            required
          />
          <p className="text-red-500 mb-2 font-medium text-center">{error}</p>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <input
                className="cursor-pointer"
                type="checkbox"
                name="checkbox"
              />
              <p className="font-medium text-gray-600 text-[18px]">
                Remember me
              </p>
            </div>
            <p className="font-medium text-red-400 cursor-pointer underline text-[18px]">
              Forgot Password?
            </p>
          </div>
          <input
            className="bg-[#4DB385] hover:bg-[#2bc781] w-36 text-white font-semibold text-xl my-10 mx-auto py-4 rounded-xl cursor-pointer"
            type="submit"
            value="Sign In"
          />
        </form>
      </div>
      <div className="bg-[#0ECA98] w-full md:w-[35%] rounded-lg text-white flex flex-col justify-center  p-5 text-center">
        <h1 className="text-5xl font-semibold">Hello,Friend!</h1>
        <div className="border-[3px] my-3 mx-auto border-[#ffffff] w-20"></div>
        <p className="text-xl my-3 text-gray-100">
          Fill up personal informatin and
          <br />
          start journey with us.
        </p>

        <Link to={"/register"}>
          <button className="border-2 hover:bg-[#0cf5b725]  w-36 text-white font-semibold text-xl mt-3 mx-auto py-4 rounded-3xl">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;

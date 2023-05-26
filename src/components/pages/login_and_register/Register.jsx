import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const Register = () => {
  useTitle("Register")
  const [error, setError] = useState("");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError(`Password can be Min 6 char,
         1 letter & 1 number`);
    } else {
      if ((email, password)) {
        register(email, password)
          .then((result) => {
            const user = result.user;
            setError("");
            updateProfile(user, {
              displayName: name,
              photoURL: photo,
            });
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Account Register Successfull!",
              showConfirmButton: false,
              timer: 1500,
            });
            form.reset();
            navigate("/login");
          })
          .catch((error) => {
            setError(error.message);
          });
      }
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between my-5 border max-w-7xl bg-gray-50 rounded-xl mx-auto ">
      <div className="bg-[#0ECA98] w-full md:w-[35%] rounded-lg text-white flex flex-col justify-center p-5 text-center">
        <h1 className="text-5xl font-semibold">Welcome Back!</h1>
        <div className="border-[3px] my-3 mx-auto border-[#ffffff] w-20"></div>
        <p className="text-xl my-3 text-gray-100">
          To keep connected with us please
          <br />
          login with your personal info
        </p>

        <Link to={"/login"}>
          <button className="border-2 hover:bg-[#0cf5b725]  w-36 text-white font-semibold text-xl mt-3 mx-auto py-4 rounded-3xl">
            Sign In
          </button>
        </Link>
      </div>
      <div className="md:pr-40 p-5 md:py-16  text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#4DB385]">Create Account</h1>
        <div className="border-[3px] mt-3 mb-12 mx-auto border-[#4DB385] w-20"></div>
        <form className="flex flex-col" onSubmit={handleRegister}>
          <label className="text-start text-[17px] font-medium mb-2">
            Full Name
          </label>
          <input
            className="outline-none p-4 rounded-md mb-6"
            placeholder="Enter your full name"
            type="text"
            name="name"
            required
          />
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
          <label className="text-start text-[17px] font-medium mb-2">
            Photo URL
          </label>
          <input
            className="outline-none p-4 rounded-md mb-4"
            placeholder="Enter your photo url"
            type="text"
            name="photo"
            required
          />
          <p className="text-red-500 mb-2 font-medium text-center">{error}</p>
          <input
            className="bg-[#4DB385] hover:bg-[#2bc781] w-36 text-white font-semibold text-xl mx-auto py-4 rounded-xl cursor-pointer"
            type="submit"
            value="Sign Up"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;

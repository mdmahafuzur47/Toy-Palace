import { NavLink } from "react-router-dom";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-8 px-4">
        <div className="">
          <img className="w-48 mx-auto" src={logo} alt="" />
          <h1 className="text-center text-[#FF5200] text-4xl italic font-bold -mt-2">
            Toys<span className="text-gray-200">Palace</span>
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <div >
            <ul className="flex flex-wrap md:flex-row gap-4 text-[17px] font-medium">
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "text-[#FF5200]" : "")}
              >
                <li>Home</li>
              </NavLink>
              <NavLink>
                <li>All Toys</li>
              </NavLink>
              <NavLink
                to={"/blog"}
                className={({ isActive }) => (isActive ? "text-[#FF5200]" : "")}
              >
                <li>Blogs</li>
              </NavLink>
              {user ? (
                <NavLink>
                  <li>My Toys</li>
                </NavLink>
              ) : (
                ""
              )}
              {user ? (
                <NavLink>
                  <li>Add A Toy</li>
                </NavLink>
              ) : (
                ""
              )}
            </ul>
            <div className="mt-10 flex gap-5 text-3xl justify-center flex-wrap">
              <span className="p-2 bg-gray-800 text-blue-600 rounded-full shadow-lg">
                <FaGoogle />
              </span>
              <span className="p-2 bg-gray-800 text-blue-600 rounded-full shadow-lg">
                <FaTwitter />
              </span>
              <span className="p-2 bg-gray-800 text-blue-600 rounded-full shadow-lg">
                <FaInstagram />
              </span>
              <span className="p-2 bg-gray-800 text-blue-600 rounded-full shadow-lg">
                <FaLinkedin />
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="mb-4 flex flex-row justify-start w-full">
            <input
              placeholder="Enter Your Email"
              className="bg-gray-100 border outline-none p-2 rounded-lg"
              type="text"
              name=""
            />
            <button className="p-2 font-semibold text-white bg-blue-700 hover:bg-blue-900 rounded-lg -ml-3">
              Send Us
            </button>
          </div>
          <div>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Toy Palace Stores. All rights by
              Mafuz, reserved.
            </p>
            <p className="text-gray-400">123 Main Street, City, State, ZIP</p>
            <p className="text-gray-400">
              Phone: 123-456-7890 | Email: info@example.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-gray-900">
      <nav className="max-w-7xl md:px-2 px-5 mx-auto flex justify-between items-center py-3 text-white">
        <div className="">
          <img className="w-32 mx-auto h-16" src={logo} alt="" />
          <h1 className="text-center text-[#FF5200] text-2xl italic font-bold -mt-2">
            Toys<span className="text-gray-200">Palace</span>
          </h1>
        </div>
        <div className="md:block hidden">
          <div className="flex items-center gap-5">
            <ul className="flex gap-4 text-[17px] font-medium">
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "text-[#FF5200]" : "")}
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to={"/allToys"}
                className={({ isActive }) => (isActive ? "text-[#FF5200]" : "")}
              >
                <li>All Toys</li>
              </NavLink>
              <NavLink
                to={"/blog"}
                className={({ isActive }) => (isActive ? "text-[#FF5200]" : "")}
              >
                <li>Blogs</li>
              </NavLink>
              
                <NavLink
                  to={"/myToys"}
                  className={({ isActive }) =>
                    isActive ? "text-[#FF5200]" : ""
                  }
                >
                  <li>My Toys</li>
                </NavLink>    
                <NavLink
                  to={"/addToys"}
                  className={({ isActive }) =>
                    isActive ? "text-[#FF5200]" : ""
                  }
                >
                  <li>Add A Toy</li>
                </NavLink>
            </ul>
            {user ? (
              <div className="flex gap-4 items-center ">
                <img
                  className="w-12 h-12 rounded-full"
                  title={user?.displayName}
                  src={user?.photoURL}
                  alt="logo"
                />
                <button
                  onClick={handleLogOut}
                  className="font-bold px-5 py-2 bg-[#FF5200] rounded-lg hover:bg-[#ff0000] "
                >
                  LogOut
                </button>
              </div>
            ) : (
              <Link to={"/login"}>
                <button className="font-bold px-5 py-2 bg-[#FF5200] rounded-lg hover:bg-[#ff0000] ">
                  LogIn
                </button>
              </Link>
            )}
          </div>
        </div>
        <div onClick={() => setOpen(!open)} className="md:hidden">
          {!open ? (
            <span className="text-4xl">
              <HiBars3BottomRight />
            </span>
          ) : (
            <span className="text-4xl">
              <HiXMark />
            </span>
          )}
        </div>
      </nav>

      {!open || (
        <div className="absolute top-[100px] right-0 rounded-lg md:hidden z-10">
          <div className="flex rounded-md p-5 flex-col items-center gap-5 bg-gray-900 text-white">
            <ul className="flex flex-col gap-4 text-[17px] font-medium">
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "text-[#FF5200]" : "")}
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to={"/allToys"}
                className={({ isActive }) => (isActive ? "text-[#FF5200]" : "")}
              >
                <li>All Toys</li>
              </NavLink>
              <NavLink
                to={"/blog"}
                className={({ isActive }) => (isActive ? "text-[#FF5200]" : "")}
              >
                <li>Blogs</li>
              </NavLink>
              {user ? (
                <NavLink
                  to={"/myToys"}
                  className={({ isActive }) =>
                    isActive ? "text-[#FF5200]" : ""
                  }
                >
                  <li>My Toys</li>
                </NavLink>
              ) : (
                ""
              )}
              {user ? (
                <NavLink
                  to={"/addToys"}
                  className={({ isActive }) =>
                    isActive ? "text-[#FF5200]" : ""
                  }
                >
                  <li>Add A Toy</li>
                </NavLink>
              ) : (
                ""
              )}
            </ul>
            {user ? (
              <div className="flex gap-4 items-center ">
                <img
                  className="w-12 h-12 rounded-full"
                  title={user?.displayName}
                  src={user?.photoURL}
                  alt="logo"
                />
                <button
                  onClick={handleLogOut}
                  className="font-bold px-5 py-2 bg-[#FF5200] rounded-lg hover:bg-[#ff0000] "
                >
                  LogOut
                </button>
              </div>
            ) : (
              <Link to={"/login"}>
                <button className="font-bold px-5 py-2 bg-[#FF5200] rounded-lg hover:bg-[#ff0000] ">
                  LogIn
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

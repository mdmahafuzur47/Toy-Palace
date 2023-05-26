import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";

const AllCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const redirectLogin = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You have to Login first',
    })
    navigate("/login");
  };
  const { _id, name,rating, img, price } = toy;
  return (
    <div className="border rounded-xl p-3 shadow-sm">
      <img className="w-full h-80 shadow-md rounded-lg mb-3" src={img} alt="" />
      <h1 className="text-xl text-gray-600">{name}</h1>
      <div className="flex items-center justify-between px-2 my-3">
        <p className="text-3xl text-gray-500">${price}</p>
        <p className="text-xl italic text-gray-500"><span className="text-3xl">{rating}</span>/5.0</p>
      </div>
        {user ? (
          <Link to={`/details/${_id}`}>
            <button className="p-2 w-full text-white font-semibold border rounded-xl bg-[#e15b1d] hover:bg-[#ff0000]">
              Details
            </button>
          </Link>
        ) : (
          <button
            onClick={redirectLogin}
            className="p-2 w-full text-white font-semibold border rounded-xl bg-[#5c5c5c] hover:bg-[#7c7c7c]"
          >
            Details
          </button>
        )}
    </div>
  );
};

export default AllCard;

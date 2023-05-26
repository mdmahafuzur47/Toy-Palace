import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const AllToysCard = ({ data, index }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  const redirectLogin = ()=>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You have to Login first',
    })
    navigate('/login')
  }

  const { _id, name, price, quantity, category, SellerEmail } = data || "";
  return (
    <tr className="text-center">
      <td className="font-medium">{index + 1}.</td>
      <td className="border-2 p-1">{SellerEmail}</td>
      <td className="border-2 p-1">{name}</td>
      <td className="border-2 p-1">{category}</td>
      <td className="border-2 p-1">${price}</td>
      <td className="border-2 p-1">{quantity}</td>
      <td className="border-2 p-1">
        {user ? (
          <Link to={`/details/${_id}`}>
            <button className="p-2 text-white font-semibold border rounded-xl bg-[#e15b1d] hover:bg-[#ff0000]">
              Details
            </button>
          </Link>
        ) : (
          <button onClick={redirectLogin} className="p-2 text-white font-semibold border rounded-xl bg-[#5c5c5c] hover:bg-[#7c7c7c]">
            Details
          </button>
        )}
      </td>
    </tr>
  );
};

export default AllToysCard;

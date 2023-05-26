import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const MyToysCard = ({ data, index, myToys, setMyToys }) => {
  const { _id, name, price, quantity, category, SellerEmail } = data || "";
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-palace-server.vercel.app/myToys/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount > 0) {
              Swal.fire("Deleted!", "Your post has been deleted.", "success");
              const remainnig = myToys.filter((toy) => toy._id != id);
              setMyToys(remainnig);
            }
          });
      }
    });
  };

  return (
    <tr className="text-center">
      <td className="font-medium border-2 p-1">{index + 1}.</td>
      <td className="border-2 p-1">{SellerEmail}</td>
      <td className="border-2 p-1">{name}</td>
      <td className="border-2 p-1">{category}</td>
      <td className="border-2 p-1">${price}</td>
      <td className="border-2 p-1">{quantity}</td>
      <td className="border-2 p-1">
        <Link to={`/details/${_id}`}>
          <button className="p-2 text-white font-semibold border rounded-xl bg-[#e15b1d] hover:bg-[#ff0000]">
            Details
          </button>
        </Link>
      </td>
      <td className="border-2 p-1">
        <div className="text-4xl flex gap-5 justify-center">
          <Link to={`/update/${_id}`}>
          <span className="text-blue-500 hover:text-blue-700">
            <FaEdit />
          </span>
          </Link>
          <span
            onClick={() => handleDelete(_id)}
            className="text-red-800 hover:text-red-950"
          >
            <MdDeleteForever />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default MyToysCard;

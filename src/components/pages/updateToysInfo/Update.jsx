import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const Update = () => {
  useTitle("Update")
  const { user } = useContext(AuthContext);
  const singleToyInfo = useLoaderData();
  const { _id, description, name, img, price, rating, quantity, category } =
    singleToyInfo || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`https://toy-palace-server.vercel.app/allToys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Update has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="bg-gray-50 p-4 md:p-10">
      <h1 className=" text-4xl font-semibold mb-5 text-[#FF0000] text-center">
        Update Your Toy Posts
      </h1>
      <form
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 border p-5 md:p-12 rounded-xl bg-gray-100 shadow-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Toy Name</label>
          <input
            defaultValue={name}
            placeholder="Enter your toy name"
            className="p-3 rounded-md outline-none border"
            {...register("name", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Toy Img</label>
          <input
            defaultValue={img}
            placeholder="Enter toy img url"
            className="p-3 rounded-md outline-none border"
            {...register("img", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Toy Price</label>
          <input
            defaultValue={price}
            type="number"
            placeholder="Enter the price"
            className="p-3 rounded-md outline-none border"
            {...register("price", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Rating</label>
          <input
            defaultValue={rating}
            placeholder="toy ratings"
            className="p-3 rounded-md outline-none border"
            {...register("rating", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Available Quantity</label>
          <input
            defaultValue={quantity}
            type="number"
            placeholder="Total toys Quantity"
            className="p-3 rounded-md outline-none border"
            {...register("quantity", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Categorys</label>
          <div className="">
            <select
              defaultValue={category}
              className="w-full p-3 outline-none border bg-white rounded-lg"
              {...register("category")}
            >
              <option value="marvels">marvels</option>
              <option value="dc">dc</option>
              <option value="transformers">transformers</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Seller Name</label>
          <input
            defaultValue={user?.displayName}
            placeholder="Enter seller Name"
            className="p-3 rounded-md outline-none border"
            {...register("sellerName", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Seller Email</label>
          <input
            defaultValue={user?.email}
            placeholder="Enter seller Email"
            className="p-3 rounded-md outline-none border"
            {...register("SellerEmail", { required: true })}
          />
        </div>
        <div className="flex md:col-span-2 flex-col gap-1">
          <label className="font-semibold">Description</label>
          <input
            defaultValue={description}
            placeholder="Write some description about your toy.........."
            className="p-3 outline-none border h-20 rounded-md"
            {...register("description", { required: true })}
          />
        </div>

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          className="md:col-span-2 w-36 mx-auto bg-[#ff5900] text-white font-semibold py-3 rounded-lg hover:bg-[#FF0000]"
          type="submit"
          value="Update Toys"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Update;

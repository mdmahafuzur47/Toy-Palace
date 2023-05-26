import { useLoaderData } from "react-router-dom";
import AllToysCard from "./AllToysCard";
import { useState } from "react";
import useTitle from "../../../hooks/useTitle";

const AllToys = () => {
  useTitle('AllToys')
  const loaderData = useLoaderData();
  const [show, setShow] = useState(false);

  const handleShowAll = () => {
    setShow(true);
  };

  const [toyData, setToyData] = useState(loaderData);

  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    fetch(`https://toy-palace-server.vercel.app/toySearchByName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToyData(data);
      });
  };

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className=" text-4xl font-semibold mb-5 text-[#FF0000] text-center">
        All Toys Are Here
      </h1>
      <div className="flex my-7 shadow-sm justify-center p-3">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="p-2 rounded-lg outline-none border"
          placeholder="Search Here....."
        />
        <p
          onClick={handleSearch}
          className="p-2 text-white bg-blue-600 hover:bg-blue-800 font-semibold rounded-md -ml-2"
        >
          Search
        </p>
      </div>
      <div className="bg-gray-50 overflow-auto p-10 rounded-xl">
        <table className="w-full border-2 shadow-sm">
          <thead>
            <th className="border-2 p-2">#</th>
            <th className="border-2 p-2">Seller</th>
            <th className="border-2 p-2">Toy Name</th>
            <th className="border-2 p-2">Category</th>
            <th className="border-2 p-2">Price</th>
            <th className="border-2 p-2">Quantity</th>
            <th className="border-2 p-2">Action</th>
          </thead>
          <tbody>
            {toyData?.slice(0, show? '1000' : '20').map((data, index) => (
              <AllToysCard index={index} key={data?._id} data={data} />
            ))}
            
          </tbody>
        </table>
        {!show && (
              <div className="text-center mt-5">
                <button
                  onClick={handleShowAll}
                  className="p-2 text-white font-semibold border rounded-xl bg-[#e15b1d] hover:bg-[#ff0000]"
                >
                  Show All
                </button>
              </div>
            )}
      </div>
    </div>
  );
};

export default AllToys;

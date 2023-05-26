import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import MyToysCard from "./MyToysCard";
import useTitle from "../../../hooks/useTitle";

const MyToys = () => {
  useTitle("MyToys")
    const {user} = useContext(AuthContext);
    const [myToys,setMyToys] = useState([])
    const uri = `https://toy-palace-server.vercel.app/myToys?email=${user?.email}`

    useEffect(()=>{
        fetch(uri,{
            method: 'GET',
            headers: {
                'content-type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setMyToys(data);
        })
    },[uri])
    

    return (
        <div className="max-w-7xl mx-auto my-10">
      <h1 className=" text-4xl font-semibold mb-5 text-[#FF0000] text-center">
        My Added Toys Are Here
      </h1>
      <div className="bg-gray-50 overflow-auto p-10 rounded-xl">
        <table className="w-full border-2 shadow-xl">
          <thead>
            <th>#</th>
            <th className="border-2 p-2">Seller</th>
            <th className="border-2 p-2">Toy Name</th>
            <th className="border-2 p-2">Category</th>
            <th className="border-2 p-2">Price</th>
            <th className="border-2 p-2">Quantity</th>
            <th className="border-2 p-2">Show</th>
            <th className="border-2 p-2">Action</th>
          </thead>
          <tbody>
            {myToys?.slice(0, 20).map((data,index) => (
              <MyToysCard myToys={myToys} setMyToys={setMyToys} index={index} key={data?._id} data={data} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyToys;
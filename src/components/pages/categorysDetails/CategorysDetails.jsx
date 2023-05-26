import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const CategorysDetails = () => {

    useTitle("CategorysDetails")
    const singleData = useLoaderData()
    const {img,name,price,rating,quantity,category,sellerName,SellerEmail,description} = singleData;

    console.log(singleData);

    return (
        <div className="flex flex-col md:flex-row items-center gap-5 max-w-7xl mx-auto my-10">
            <img className="w-[90vw] md:w-1/2" src={img} alt="" />
            <div className="bg-gray-50 p-10 rounded-lg shadow-md">
                <h1 className="text-3xl mb-4 font-semibold">{name}</h1>
                <p className="text-gray-500">{description}</p>

                <h3 className="text-[17px] font-medium text-gray-600 mt-5 mb-1">Available Quantity : <span className="text-xl text-gray-800">{quantity}</span></h3>
                <h3 className="text-[17px] font-medium text-gray-600 mb-1">Category : <span className="text-xl text-gray-800">{category}</span></h3>
                <h3 className="text-[17px] font-medium text-gray-600 mb-1">Seller Name : <span className="text-xl text-gray-800">{sellerName}</span></h3>
                <h3 className="text-[17px] font-medium text-gray-600 mb-5">Seller Email : <span className="text-xl text-gray-800">{SellerEmail}</span></h3>

                <div className="my-3 flex-wrap flex justify-between text-xl font-medium">
                <h3>Price : $<span>{price}</span></h3>
                <h3>Rating : <span>{rating}</span></h3>
                <button className="font-bold px-5 py-2 bg-[#FF5200] rounded-lg hover:bg-[#ff0000] text-white">buy now</button>
                </div>

            </div>
        </div>
    );
};

export default CategorysDetails;
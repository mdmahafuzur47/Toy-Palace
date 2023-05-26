import { useEffect, useState } from "react";
import TransformerCard from "./Cards/TransformerCard";


const Transformers = () => {

      const [transformers,setTransformers] = useState([])

      const uri = 'https://toy-palace-server.vercel.app/transformers'

      useEffect(()=>{
        fetch(uri)
        .then(res => res.json())
        .then(data => {
          setTransformers(data)
        })
      },[uri])

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-10 ">
            {
                transformers?.map(toys => <TransformerCard key={toys?._id} toy={toys} />)
            }
          </div>
    );
};

export default Transformers;
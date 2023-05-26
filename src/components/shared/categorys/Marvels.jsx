import { useEffect, useState } from "react";
import MarvelsCard from "./Cards/ MarvelsCard";

const Marvels = () => {
  const [marvels, setMarvels] = useState([]);

  const uri = "https://toy-palace-server.vercel.app/marvels";

  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setMarvels(data);
      });
  }, [uri]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-10">
      {marvels?.map((toys) => (
        <MarvelsCard key={toys?._id} toy={toys} />
      ))}
    </div>
  );
};

export default Marvels;

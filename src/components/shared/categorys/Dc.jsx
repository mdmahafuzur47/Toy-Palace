import { useEffect, useState } from "react";
import DcCard from "./Cards/DcCard";

const Dc = () => {
  const [dc, setDc] = useState([]);
  const uri = "https://toy-palace-server.vercel.app/dc";

  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setDc(data);
      });
  }, [uri]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-10">
      {dc?.map((toys) => (
        <DcCard key={toys?._id} toy={toys} />
      ))}
    </div>
  );
};

export default Dc;

import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllCard from "./Cards/AllCard";
import Marvels from "./Marvels";
import Dc from "./Dc";
import Transformers from "./Transformers";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Categorys = () => {
  const [alltoy, setAlltoy] = useState([]);
  const [show,setShow] = useState(false)

  const handleShowAll = () => {
    setShow(true)
  }

  const uri = "https://toy-palace-server.vercel.app/allToys";

  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setAlltoy(data);
      });
  }, [uri]);

  return (
    <div  data-aos="zoom-in" className="max-w-7xl text-[18px] bg-gray-50 font-semibold border md:p-10 rounded-lg mx-auto my-12">
      <Tabs>
        <TabList className="flex justify-center pt-3 flex-wrap bg-[#FF5200] rounded-lg text-white">
          <Tab>All</Tab>
          <Tab>Marvels Toys</Tab>
          <Tab>DC Toys</Tab>
          <Tab>Transformers Toys</Tab>
        </TabList>

        <TabPanel>
          <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-10">
            {alltoy?.slice(0,show?'1000': '6').map((toys) => (
              <AllCard key={toys?._id} toy={toys} />
            ))}
          </div>
          {
            !show && (
              <div className="text-center mt-5">
            <button onClick={handleShowAll} className="p-2 text-white font-semibold border rounded-xl bg-[#e15b1d] hover:bg-[#ff0000]">Show All</button>
          </div>
            )
          }
          </>
        </TabPanel>
        <TabPanel>
          <Marvels />
        </TabPanel>
        <TabPanel>
          <Dc />
        </TabPanel>
        <TabPanel>
          <Transformers />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categorys;
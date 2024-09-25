import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInfoStore } from "../store/carInfo";
import { mapStore } from "../store/map";
import { citiesData } from "../data/cities";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Map = () => {
  const { address, done } = useInfoStore();
  const { updateMapClicked } = mapStore();
  const { updateAddress } = useInfoStore();
  const [selectedMap, setSelectedMap] = useState("");
  return (
    <motion.div
      initial={{
        position: "absolute",
        top: "100%",
        left: "0px",
        opacity: 0,
      }}
      animate={{
        top: done ? "2%" : "100%",
        opacity: done ? 1 : 0,
      }}
      className="relative bg-white w-full h-full -z-10 md:z-10 "
    >
      <p className="semi bg-white md:text-3xl text-center py-10">
        SÉLECTIONNEZ UN DE NOS DISTRIBUTEURS
      </p>
      <div className=" left-3  top-12 md:top-6">
        <p className="semi pl-5  text-2xl py-5">
          {address}
          <p className="border-b pt-3 w-28 border-[#FFBA00]"></p>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-4 mx-3">
          {citiesData
            .filter((kik) => kik.city === address)[0]
            ?.dealers.map((bb, ik) => (
              <div
                onClick={() => {
                  setSelectedMap(bb.name);
                  updateAddress(bb.name);
                }}
                key={ik}
                className="hover:bg-white pl-5 md:w-[28rem] py-5 border rounded-lg "
              >
                <p className="semi pb-5">{bb.name}</p>
                <p className="text-sm pb-5 flex items-center gap-x-2">
                  <FaLocationDot />
                  {bb.address}
                </p>
                <p className="pb-5 flex items-center gap-x-2">
                  <IoMdCall />
                  {bb.number}
                </p>
                <button
                  onClick={() => updateMapClicked(true)}
                  className="semi bg-[#FFBA00]  px-4 py-2 flex items-center gap-x-3"
                >
                  SÉLECTIONNER
                  <RiArrowRightSLine size={23} />
                </button>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Map;

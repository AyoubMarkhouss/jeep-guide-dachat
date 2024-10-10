import React from "react";
import { useCarStore } from "../store/car";
import { RiArrowRightSLine } from "react-icons/ri";

const Models = () => {
  const { car, updateCar } = useCarStore();
  return (
    <div className="mx-10 md:mx-20 py-20 ">
      <h2 className="text-3xl text-center font-semibold pb-20">
        SÉLECTIONNEZ UN MODÈLE
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 items-center md:gap-x-14">
        {cars.map((item) => {
          return (
            <div
              key={item.label}
              className="mb-6"
              onClick={() => updateCar(item.label)}
            >
              <div className="flex justify-center">
                <img
                  about="model"
                  alt={item.label}
                  src={item.image}
                  width={1500}
                  height={1500}
                  className="md:w-52"
                />
              </div>
              <div className="flex items-center gap-2 flex-col">
               

                <label className="semi text-lg">{item.label}</label>
                <a className="cursor-pointer">
                  <button
                    id={item.value}
                    value={item.value}
                    name="model"
                    className="flex text-lg  font-semibold items-center"
                  >
                    sélectionnez
                    <RiArrowRightSLine
                      size={23}
                      className="fill-[#FFBA00] pt-1"
                    />
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Models;

const cars = [
  { image: "/avenger.png", label: "AVENGER", value: "Avenger" },
  {
    image: "/compass-ehybrid.png",
    label: "COMPASS E-HYBRID",
    value: "Compass Hybrid",
  },

  {
    image: "/renegade-ehybrid.png",
    label: "RENEGADE E-HYBRID",
    value: "Renagde Hybrid",
  },
  {
    image: "/grande-cherokee2.png",
    label: "GRANDE CHEROKEE",
    value: "Grand Cherokee",
  },
];

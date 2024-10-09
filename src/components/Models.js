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
                {/* <input
                  className="relative float-left  h-6 w-6 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                  type="radio"
                  name="model"
                  checked={car === item.label}
                  id={item.label}
                  value={item.label}
                /> */}

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
    image: "/grande-cherokee2.png",
    label: "GRANDE CHEROKEE",
    value: "Grand Cherokee",
  },
  {
    image: "/renegade-ehybrid.png",
    label: "RENEGADE E-HYBRID",
    value: "Renagde Hybrid",
  },
];

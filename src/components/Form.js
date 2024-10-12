import { motion } from "framer-motion";
import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { citiesData } from "../data/cities";
import { useCarStore } from "../store/car";
import { useInfoStore } from "../store/carInfo";
import { cn } from "../utils/cn";
import { IoIosArrowBack } from "react-icons/io";
const Form = () => {
  const { car, updateCar } = useCarStore();
  const [query, setQuery] = useState("");
  console.log(car);
  const [clicked, setClicked] = useState("");
  const {
    updateVille,
    updateCivilité,
    updatePrénom,
    updateNom,
    updateEmail,
    updateTel,
    updateAddress,
    updateCallType,
    updateLabel,
    updateSiren,
    updateMarketing,
    updateDone,
    setMap,
    address,
    nom,
    prénom,
  } = useInfoStore();
  console.log(address);
  const fixedData = citiesData.map((items) => items.city);
  const filteredPeople =
    query === ""
      ? []
      : fixedData.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        mode: "no-cors",
      });

      if (response.ok || response.type === "opaque") {
        alert("Form submitted successfully!");

        updateDone(true);
      } else {
        alert("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Form submission failed.");
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const form = event.target;

  //   // Collect form data into an object
  //   const formData = new FormData(form);
  //   const data = {};
  //   for (let [key, value] of formData.entries()) {
  //     data[key] = value;
  //     console.log(`${key}: ${value}`);
  //   }

  //   try {
  //     const response = await fetch("http://localhost:5000/api/submit", {
  //       // Change form.action to your API endpoint
  //       method: "POST", // You can also use form.method if you want to keep it dynamic
  //       headers: {
  //         "Content-Type": "application/json", // Set the appropriate headers for JSON
  //       },
  //       body: JSON.stringify(data), // Send the JSON-serialized data
  //     });

  //     if (response.ok) {
  //       alert("Form submitted successfully!");
  //       updateDone(true);
  //     } else {
  //       const errorText = await response.text();
  //       console.error("Error response:", errorText);
  //       alert("Form submission failed: " + errorText);
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     alert("Form submission failed.");
  //   }
  // };

  return (
    <motion.div
      initial={{
        position: "absolute",
        top: "100%",
        left: "0px",
        opacity: 0,
      }}
      animate={{
        top: car !== "" ? "10%" : "100%",
        opacity: car !== "" ? 1 : 0,
      }}
      className="grid bg-white w-full grid-cols-3 px-10 md:px-10 py-16 lg:py-0"
    >
      <div className="col-span-3 md:col-span-1 mb-5 md:mb-0">
        <h2 className="text-lg">Votre sélection:</h2>
        <h2 className="semi text-lg">
          {cars.filter((cr) => cr.label === car)[0]?.label}
        </h2>
        <img
          src={cars.filter((cr) => cr.label === car)[0]?.image}
          className="w-96"
        />
        <button
          onClick={() => updateCar("")}
          className="semi h-12 hover:cursor-pointer text-black mt-14 flex items-center justify-center"
        >
          <IoIosArrowBack size={20} className="fill-[#FFBA00]" />
          CHANGER DE MODÈLE
        </button>
      </div>
      <div className="col-span-3 md:col-span-2">
        <form
          // onSubmit={handleSubmit}
          // action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&amp;orgId=00D8d000009q2y7"
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D8d000009q2y7"
          method="POST"
        >
          <input
            type="hidden"
            name="retURL"
            value={`https://jeep-guide-dachat.vercel.app?step=dealers&&city=${address}&&firstName=${prénom}&&lastName=${nom}`}
          />

          {/* <input type="hidden" name="debug" value="1" />

          <input
            type="hidden"
            name="debugEmail"
            value="ayoub.markhouss@gmail.com"
          /> */}
          <input type="hidden" name="oid" value="00D8d000009q2y7" />

          <input
            id="00N8d00000UVYP7"
            name="00N8d00000UVYP7"
            type="hidden"
            value="1"
          />
          <input
            id="lead_source"
            name="lead_source"
            type="hidden"
            value="event_website"
          />
          <input type="hidden" name="recordType" value="0128d000000DtwF" />
          <input
            type="hidden"
            id="00N8d00000UVYOu"
            name="00N8d00000UVYOu"
            value="57"
            title="Marque d&#39;intérêt"
          />
          <input
            type="hidden"
            id="00N8d00000UVYP5"
            name="00N8d00000UVYP5"
            value="Devis commercial"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-10">
            <input
              type="text"
              hidden
              id="00N8d00000UVYPn"
              name="00N8d00000UVYPn"
              value={car}
              defaultValue={car}
            />

            {/* <input
              type="text"
              hidden
              id="Mode"
              name="Mode"
              value="Essai"
              defaultValue="Essai"
            /> */}
            <div className="flex flex-col">
              <select
                name="salutation"
                id="salutation"
                onChange={(e) => updateCivilité(e.target.value)}
                className="semi bg-white border-b h-16 pl-3 "
              >
                <option className="semi " value="" hidden>
                  CIVILITÉ*
                </option>
                <option className="semi" value="Mr.">
                  M.
                </option>
                <option className="semi" value="MME.">
                  MME.
                </option>
                <option className="semi" value="MLLE.">
                  MLLE.
                </option>
              </select>
            </div>
            <div></div>
            <input
              name="first_name"
              id="first_name"
              onChange={(e) => updatePrénom(e.target.value)}
              type="text"
              placeholder="PRÉNOM*"
              className="semi bg-white border-b h-16 pl-3  placeholder:text-black placeholder:pl-2"
            />
            <input
              name="last_name"
              id="last_name"
              onChange={(e) => updateNom(e.target.value)}
              type="text"
              placeholder="NOM*"
              className="semi bg-white border-b h-16 pl-3  placeholder:text-black placeholder:pl-2"
            />

            {/* <input
              name="ville"
              id="ville"
              onChange={(e) => updateVille(e.target.value)}
              type="text"
              placeholder="VILLE"
              className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
            /> */}
            <input
              name="email"
              id="email"
              onChange={(e) => updateEmail(e.target.value)}
              type="email"
              placeholder="E-MAIL*"
              className="semi bg-white border-b h-16 pl-3 placeholder:text-black placeholder:pl-2"
            />
            <input
              name="mobile"
              id="mobile"
              onChange={(e) => updateTel(e.target.value)}
              type="tel"
              maxLength={13}
              placeholder="TELEPHONE*"
              className="semi bg-white border-b h-16 pl-3  placeholder:text-black placeholder:pl-2"
            />
            <div className="relative w-full">
              <input
                name="city"
                id="city"
                onClick={() => setClicked(true)}
                onChange={(e) => {
                  setQuery(e.target.value);
                  updateAddress(e.target.value);
                }}
                type="text"
                value={query}
                placeholder="VILLE*"
                className="semi bg-white border-b h-16 pl-3 w-full placeholder:text-black placeholder:pl-2"
              />
              {clicked && query !== "" && (
                <div
                  className={cn(
                    "z-50 absolute divide-y w-full bg-white",
                    filteredPeople.length > 0 && clicked
                      ? "border border-black"
                      : ""
                  )}
                >
                  {filteredPeople.map((file) => {
                    return (
                      <p
                        onClick={() => {
                          setClicked(false);
                          setQuery(file);
                          updateAddress(file);
                          setMap(file);
                          updateLabel(file);
                        }}
                        key={file}
                        className="semi text-xs text-start cursor-pointer pl-2 py-4 line-clamp-1 bg-white"
                      >
                        {file}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="pt-10">
            <div className="pb-5">
              <label className="semi ">CONSENTEMENT</label>
              <p>
                Après avoir lu la
                <a href="" className="underline pl-1 cursor-pointer ">
                  Note d&apos;information*
                </a>
              </p>
            </div>

            <div className="grid md:grid-cols-3 pt-3 items-center mb-3">
              <div className="flex items-center">
                <input
                  onClick={() => updateMarketing(true)}
                  value=""
                  type="radio"
                  name="x"
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">J&apos;ACCEPTE</label>
              </div>
              <div className="flex items-center ">
                <input
                  onClick={() => updateMarketing(false)}
                  type="radio"
                  name="x"
                  value=""
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">JE REFUSE</label>
              </div>
              <a className="semi max-w-96 underline text-[10px] uppercase">
                Conditions générales d'utilisation
              </a>
            </div>
          </div>
          <button
            type="submit"
            name="submit"
            // onClick={() => }
            className="semi h-12 text-black px-7 bg-[#FFBA00] mt-14 flex items-center justify-center"
          >
            ÉTAPE SUIVANTE
            <RiArrowRightSLine size={23} />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Form;

// const cars = [
//   { image: "/compass-ehybrid.png", label: "COMPASS E-HYBRID" },
//   { image: "/renegade-ehybrid.png", label: "RENEGADE E-HYBRID" },

//   { image: "/avenger.png", label: "AVENGER" },
//   { image: "/grande-cherokee2.png", label: "GRANDE CHEROKEE" },
// ];
const cars = [
  { image: "/avenger.png", label: "Avenger", value: "Avenger" },
  {
    image: "/compass-ehybrid.png",
    label: "Compass Hybrid",
    value: "Compass Hybrid",
  },

  {
    image: "/renegade-ehybrid.png",
    label: "Renagde Hybrid",
    value: "Renagde Hybrid",
  },
  {
    image: "/grande-cherokee2.png",
    label: "Grand Cherokee",
    value: "Grand Cherokee",
  },
];

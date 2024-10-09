import React from "react";
import { motion } from "framer-motion";
import { mapStore } from "../store/map";
import { useInfoStore } from "../store/carInfo";
import { RiArrowRightSLine } from "react-icons/ri";

const Merci = ({ fullName, city }) => {
  const { mapClicked } = mapStore();
  const { prénom, nom, label, address } = useInfoStore();
  const searchParams = window.location.search;
  console.log(searchParams);
  return (
    <motion.div
      initial={{
        position: "absolute",
        top: "100%",
        left: "0px",
        opacity: 0,
      }}
      animate={{
        top: mapClicked ? "10%" : "100%",
        opacity: mapClicked ? 1 : 0,
      }}
      className="md:w-fit z-40 md:mx-20 mt-6 md:mt-0 py-10 lg:py-0 bg-white w-screen h-screen"
    >
      <div className="md:pl-0 px-5">
        <h1 className="semi text-2xl text-center md:text-3xl pb-5">
          Merci {fullName} de l&apos;intérêt que vous portez à notre marque.
        </h1>
        <p className="semi text-center">Votre demande a été enregistrée.</p>
        <br />
        <br />
        <p className="semi text-lg text-center">{label}</p>
        <p className="semi text-lg text-center">{address}</p>
      </div>
      <div className="flex justify-center items-center pt-14">
        <h2 className="semi text-xl">Quoi d'autre?</h2>
      </div>

      <div className="grid md:grid-cols-3 pt-16">
        <div className="flex flex-col justify-center items-center text-center gap-5 pt-5 md:pt-0">
          <img src="/icon1.png" width={1500} height={2000} className="w-14" />
          <p className="semi text-sm max-w-60">
            Le Distributeur a reçu votre requête
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-5 pt-5 md:pt-0">
          <img src="/icon2.png" width={1500} height={2000} className="w-14" />
          <p className="semi w-60 md:w-full text-sm">
            Vous serez contacté(e) dans les plus brefs délais, conformément au
            décret gouvernemental relatif au COVID-19, afin de convenir d’un
            rendez-vous
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-5 pt-5 md:pt-0">
          <img src="/icon3.png" width={1500} height={2000} className="w-14" />
          <p className="semi text-sm max-w-60">
            Vous allez apprécier la route avec Jeep® !
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full items-center">
        <a href="https://www.jeep.ma/">
          <button className="semi h-12 uppercase text-black px-7 bg-[#FFBA00] mt-14 flex items-center justify-center">
            Revenir à l'accueil
            <RiArrowRightSLine size={23} />
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default Merci;

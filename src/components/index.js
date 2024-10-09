import React from "react";
import Models from "./Models";
import Form from "./Form";
import Dealers from "./dealers";
import { cn } from "../utils/cn";
import { useCarStore } from "../store/car";
import { useInfoStore } from "../store/carInfo";
import Merci from "./Merci";
import { mapStore } from "../store/map";
import { useSearchParams } from "next/navigation";

const Index = () => {
  const { done, map } = useInfoStore();
  const { mapClicked } = mapStore();
  const { car } = useCarStore();
  const searchParams = useSearchParams();

  const search = searchParams.get("step");

  return (
    <div className="relative bg-white">
      <div
        className={cn(
          "relative ",
          done || car === ""
            ? map !== ""
              ? "md:h-[120vh] md:overflow-y-clip"
              : "overflow-y-clip overflow-hidden md:h-screen md:max-h-screen "
            : "md:h-[150vh] md:overflow-y-clip"
        )}
      >
        {/* <Steps /> */}
        {car === "" && <Models />}
        {!done && <Form />}
        {search === "dealers" && <Dealers />}
        {mapClicked && <Merci />}
      </div>
    </div>
  );
};

export default Index;

const stepsLabel = [
  { label: "MODÈLE" },
  { label: "VOS COORDONNÉES" },
  { label: "DISTRIBUTEUR" },
];

const Steps = () => {
  const { car } = useCarStore();
  const { done } = useInfoStore();
  return (
    <div className="mx-10 z-50 md:max-w-2xl relative md:mx-auto">
      <div className="flex z-20  justify-between">
        {stepsLabel.map((lab, idx) => {
          return (
            <div key={idx} className="relative shrink-0 ">
              <div
                className={cn(
                  "bg-zinc-500 z-20 w-10 h-10 relative rounded-full",
                  car !== "" && idx === 1 ? "bg-zinc-900" : "",
                  done && idx === 2 ? "bg-zinc-900" : "",
                  idx === 0 ? "bg-zinc-900" : ""
                )}
              >
                <p className="semi  absolute left-1/2 top-1/2 text-white -translate-x-1/2 -translate-y-1/2">
                  {idx + 1}
                </p>
              </div>
              <p className="semi mt-3 text-xs md:text-sm shrink-0 absolute text-center left-1/2 -translate-x-1/2">
                {lab.label}
              </p>
            </div>
          );
        })}
      </div>
      <div className="h-[2px] w-full top-1/2 z-10 -translate-y-1/2 absolute bg-zinc-950" />
    </div>
  );
};

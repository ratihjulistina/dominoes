import React from "react";

type Props = {
  value: number[];
};

export default function Card({ value }: Props) {
  console.log("MASUUUkSS", value);
  return (
    <div className="w-6 m-auto border border-black max-h-max flex flex-col gap-2 ">
      <p className="inline-block text-center pt-2">{value[0]}</p>
      <div className="mx-1 bg-black h-[0.5px]"></div>
      <p className="inline-block text-center pb-2">{value[1]}</p>
    </div>
  );
}

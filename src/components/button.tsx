import React from "react";

type Props = {
  title: string;
  onClick: () => void;
};

export default function Button({ title, onClick }: Props) {
  console.log(title);
  return (
    <button
      className="bg-blue-800 rounded-md px-3 py-1 font-semibold text-white"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

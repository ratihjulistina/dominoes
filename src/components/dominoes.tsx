"use client";

import React, { useState } from "react";
import Card from "./card";
import Button from "./button";

function Dominoes() {
  const source: number[][] = [
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
  ];

  const [inputSource, setInputSource] = useState<number[][]>(source);
  const [inputNumber, setInputNumber] = useState<number | null>(null);

  // Counting double number in an array
  let countDouble = 0;
  for (const x of source) {
    if (x[0] === x[1]) countDouble++;
  }

  // To sort asc
  const sortAsc = () => {
    const sortedA = [...inputSource].sort(
      (a, b) => a[0] + a[1] - (b[0] + b[1])
    );
    setInputSource(sortedA);
  };

  // To sort desc
  const sortDesc = () => {
    const sortedB = [...inputSource].sort(
      (a, b) => b[0] + b[1] - (a[0] + a[1])
    );
    setInputSource(sortedB);
  };

  // Flip
  const flip = () => {
    const flipped = inputSource.map(([a, b]) => [b, a] as [number, number]);
    setInputSource(flipped);
  };

  // Remove duplicates
  const removeDup = () => {
    const normalized = inputSource.map(([a, b]) => (a < b ? [a, b] : [b, a]));
    const distinct = Array.from(
      new Set(normalized.map((item) => JSON.stringify(item)))
    ).map((item) => JSON.parse(item) as [number, number]);

    setInputSource(distinct);
  };

  // Reset
  const reset = () => {
    setInputSource(source);
    setInputNumber(null); // Clear input on reset
  };

  // Remove dominoes with a specific sum
  const removeBySum = () => {
    if (inputNumber !== null) {
      const filtered = inputSource.filter(([a, b]) => a + b !== inputNumber);
      setInputSource(filtered);
    }
  };

  return (
    <div className="text-black m-auto w-[80%] my-10 flex flex-col justify-center items-start gap-1">
      <h1 className="font-bold text-3xl">Dominoes</h1>
      <div className="bg-gray-300 flex flex-col justify-center items-start p-4 w-[100%] m-auto gap-1 border border-gray-400">
        <h2 className="font-bold">Source</h2>
        <div>{JSON.stringify(source, null, 2)}</div>
      </div>
      <div className="bg-gray-300 flex flex-col justify-center items-start p-4 w-[100%] m-auto gap-1 border border-gray-400">
        <h2 className="font-bold">Double Numbers</h2>
        <div>{countDouble}</div>
      </div>
      {/* Render dominoes using inputSource */}
      <div className="flex gap-2 mt-5">
        {inputSource.map((item, index) => (
          <Card key={index} value={item} />
        ))}
      </div>
      <div className="flex gap-2 my-5">
        <Button title="Sort (ASC)" onClick={sortAsc} />
        <Button title="Sort (DESC)" onClick={sortDesc} />
        <Button title="Flip" onClick={flip} />
        <Button title="Remove Dup" onClick={removeDup} />
        <Button title="Reset" onClick={reset} />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <input
          className="border border-gray-300 py-1 px-3"
          placeholder="Input Number"
          type="number"
          value={inputNumber ?? ""}
          onChange={(e) => {
            const num = parseInt(e.target.value);
            setInputNumber(isNaN(num) ? null : num);
          }}
        />
        <div>
          <Button title="Remove" onClick={removeBySum} />
        </div>
      </div>
    </div>
  );
}

export default Dominoes;

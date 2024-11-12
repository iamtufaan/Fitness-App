import React, { useState } from "react";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) { 
      const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
      setBMI(bmiValue);
    } else {
      alert("Please enter both weight and height");
    }
  };

  return (
    <div className="w-full h-auto p-2 flex items-center mt-5 flex-col">
      <h1 className="text-white mb-1 text-center w-full font-semibold">
        <span>
          <i className="fa-solid fa-dumbbell text-purple-600"></i>
        </span>{" "}
        Calculate Your BMI
      </h1>
      <div className="w-full h-auto flex items-end justify-center bg-slate-800 rounded-md lg:gap-5 md:gap-3 gap-2 py-10 md:px-0 px-4 flex-wrap">
        <div className="flex-col flex">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            id="weight"
            type="number"
            className="bg-transparent px-4 border py-2 rounded-lg outline-none border-gray-500 text-white"
            placeholder="Enter your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="flex-col flex">
          <label htmlFor="height">Height (cm)</label>
          <input
            id="height"
            type="number"
            className="bg-transparent px-4 border py-2 rounded-lg outline-none border-gray-500 text-white"
            placeholder="Enter your height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="w-60">
          <button
            onClick={calculateBMI}
            className="bg-transparent border border-purple-400 cursor-pointer active:scale-90 w-full py-2 rounded-lg text-purple-400"
          >
            Calculate BMI
          </button>
        </div>
      </div>
        {bmi !== null && (
          <div className="text-indigo-600 bg-gray-900 px-6 py-2.5">
            Your BMI: <span className="font-bold">{bmi}</span>
          </div>
        )}
    </div>
  );
};

export default BMI;

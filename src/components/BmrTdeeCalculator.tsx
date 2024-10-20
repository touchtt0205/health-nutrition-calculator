import React, { useState } from "react";

const BmrTdeeCalculator: React.FC = () => {
  const [age, setAge] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [bodyFat, setBodyFat] = useState<number | "">("");
  const [bmr, setBmr] = useState<number | null>(null);
  const [tdee, setTdee] = useState<number | null>(null);

  const calculateBmrTdee = () => {
    if (
      typeof weight === "number" &&
      typeof height === "number" &&
      typeof age === "number"
    ) {
      const bmrCalc = 10 * weight + 6.25 * height - 5 * age + 5;
      const tdeeCalc = bmrCalc * 1.55; // Assuming moderate activity level
      setBmr(parseFloat(bmrCalc.toFixed(2)));
      setTdee(parseFloat(tdeeCalc.toFixed(2)));
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateBmrTdee();
        }}
      >
        <label>
          Age:{" "}
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
        </label>
        <label>
          Weight (kg):{" "}
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
          />
        </label>
        <label>
          Height (cm):{" "}
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
          />
        </label>
        <label>
          Body Fat (%):{" "}
          <input
            type="number"
            value={bodyFat}
            onChange={(e) => setBodyFat(parseFloat(e.target.value))}
          />
        </label>
        <button type="submit">Calculate</button>
      </form>
      {bmr !== null && <p>BMR: {bmr} kcal/day</p>}
      {tdee !== null && <p>TDEE: {tdee} kcal/day</p>}
    </div>
  );
};

export default BmrTdeeCalculator;

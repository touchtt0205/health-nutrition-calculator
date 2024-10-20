import React, { useState } from "react";

const Calculate: React.FC = () => {
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(170);
  const [age, setAge] = useState<number>(25);
  const [gender, setGender] = useState<string>("male");
  const [activityLevel, setActivityLevel] = useState<number>(1.2);
  const [bmr, setBmr] = useState<number | null>(null);
  const [tdee, setTdee] = useState<number | null>(null);
  const [calorieGoal, setCalorieGoal] = useState<number | null>(null);

  const calculateBMR = () => {
    let bmrValue;
    if (gender === "male") {
      bmrValue = 66 + 13.7 * weight + 5 * height - 6.8 * age;
    } else {
      bmrValue = 665 + 9.6 * weight + 1.8 * height - 4.7 * age;
    }
    setBmr(bmrValue);
    calculateTDEE(bmrValue);
  };

  const calculateTDEE = (bmrValue: number) => {
    const tdeeValue = bmrValue * activityLevel;
    setTdee(tdeeValue);
    calculateCalorieGoal(tdeeValue);
  };

  const calculateCalorieGoal = (tdeeValue: number) => {
    const goal = tdeeValue - 500;
    setCalorieGoal(goal);
  };

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="card-title text-center">Calculate BMR and TDEE</h1>
              <form>
                <div className="mb-3">
                  <label className="form-label">Weight (kg)</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Height (cm)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="form-select"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Activity Level</label>
                  <select
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(Number(e.target.value))}
                    className="form-select"
                  >
                    <option value={1.2}>Sedentary</option>
                    <option value={1.375}>Lightly active</option>
                    <option value={1.55}>Moderately active</option>
                    <option value={1.725}>Very active</option>
                    <option value={1.9}>Super active</option>
                  </select>
                </div>
                <button
                  type="button"
                  onClick={calculateBMR}
                  className="btn btn-primary w-100"
                >
                  Calculate
                </button>
              </form>
              {bmr && (
                <div className="mt-4">
                  <h2 className="h5">Results:</h2>
                  <p>BMR: {bmr.toFixed(2)} kcal/day</p>
                  <p>TDEE: {tdee!.toFixed(2)} kcal/day</p>
                  <p>
                    To lose weight, aim for: {calorieGoal!.toFixed(2)} kcal/day
                  </p>
                </div>
              )}
              <div className="mt-4">
                <h2 className="h5">How to Use This Information</h2>
                <p>
                  For effective weight loss, consume fewer calories than your
                  TDEE. We recommend subtracting 500 calories from your TDEE to
                  set a daily caloric goal.
                </p>
                <p>
                  Track your food intake to ensure you're meeting your caloric
                  target.
                </p>
                <p>
                  Choose nutrient-dense foods to ensure you’re getting enough
                  vitamins and minerals while you lose weight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculate;

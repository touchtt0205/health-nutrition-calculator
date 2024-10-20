import React from "react";

interface Meal {
  name: string;
  calories: number;
  protein: number;
  fats: number;
  carbs: number;
  mealType: string;
}

const mealsDatabase: Meal[] = [
  {
    name: "Oatmeal",
    calories: 350,
    protein: 8,
    fats: 10,
    carbs: 58,
    mealType: "breakfast",
  },
  {
    name: "Greek yogurt",
    calories: 250,
    protein: 10,
    fats: 5,
    carbs: 30,
    mealType: "breakfast",
  },
  {
    name: "Grilled chicken",
    calories: 450,
    protein: 30,
    fats: 15,
    carbs: 50,
    mealType: "lunch",
  },
  {
    name: "Baked salmon",
    calories: 500,
    protein: 35,
    fats: 20,
    carbs: 40,
    mealType: "dinner",
  },
];

const getMealByType = (type: string): Meal => {
  const filteredMeals = mealsDatabase.filter((meal) => meal.mealType === type);
  return filteredMeals[Math.floor(Math.random() * filteredMeals.length)];
};

const MealPlan: React.FC = () => {
  const mealPlan = [
    getMealByType("breakfast"),
    getMealByType("lunch"),
    getMealByType("dinner"),
  ];

  return (
    <div>
      <ul>
        {mealPlan.map((meal, index) => (
          <li key={index}>
            <strong>
              {meal.mealType.charAt(0).toUpperCase() + meal.mealType.slice(1)}:
            </strong>{" "}
            {meal.name} ({meal.calories} kcal, P: {meal.protein}g, F:{" "}
            {meal.fats}g, C: {meal.carbs}g)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealPlan;

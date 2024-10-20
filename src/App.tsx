import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Calculate from "./pages/Calculate";
import Nutrition from "./pages/NutritionInfo";
import MealPlan from "./pages/WeeklyMealPlan";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Welcome to Health Calculator</div>} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/meal-plan" element={<MealPlan />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

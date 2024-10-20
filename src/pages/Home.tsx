import React from "react";

const Home: React.FC = () => {
  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Welcome to Health Nutrition
        </h1>
        <p className="text-gray-700 mb-4">
          This application helps you calculate your Basal Metabolic Rate (BMR)
          and Total Daily Energy Expenditure (TDEE). Use the tools provided to
          manage your diet and nutrition effectively.
        </p>
        <p className="text-gray-700 mb-4">
          Start by calculating your BMR and TDEE, and then get personalized meal
          plans for your weekly nutrition needs!
        </p>
        <div className="text-center">
          <a
            href="/calculate"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200"
          >
            Calculate Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

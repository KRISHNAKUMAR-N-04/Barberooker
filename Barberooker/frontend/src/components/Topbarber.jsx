import React from "react";
import { useNavigate } from "react-router-dom";
import { dbarbers } from "../assets/assets";

const Topbarber = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4 text-gray-900 px-4 md:px-10">
      <h1 className="text-2xl md:text-3xl font-medium text-center">
        Our Top Barbers
      </h1>
      <p className="w-full max-w-lg text-center text-sm md:text-base text-gray-600">
        Browse through specialized hair-stylists. Get your desired look.
      </p>
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5 gap-y-6 w-full px-3 sm:px-0">
        {dbarbers.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appoinment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <img
              className="w-full h-40 sm:h-48 md:h-56 object-cover bg-zinc-800"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4 border-gray-950">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button
        onClick={() => {
          navigate(`/barbers`);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="bg-black text-white shadow-lg px-10 py-3 rounded-full mt-6 sm:mt-10 hover:scale-105 transition-all duration-200"
      >
        More
      </button>
    </div>
  );
};

export default Topbarber;

"use client";
import { useState } from "react";
import { menuItems } from "@/utils/menu";

export default function Card() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl relative group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-blue-600 font-medium">
                  {item.category}
                </span>
                <span className="text-lg font-bold text-gray-800">
                  ${item.price}
                </span>
              </div>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div
                className="absolute inset-0 bg-cover bg-center transform scale-110 brightness-75 transition duration-300"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <button
                onClick={() => setSelectedItem(item)}
                className="relative z-10 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 cursor-pointer"
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white rounded-xl overflow-hidden w-full max-w-md shadow-lg">
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{selectedItem.title}</h2>
                <span className="text-lg font-semibold">
                  ${selectedItem.price}
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-600">
                {selectedItem.description}
              </p>

              {selectedItem.badges && (
                <div className="mt-3 flex gap-2 flex-wrap">
                  {selectedItem.badges.map((badge, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-200 rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 border-t pt-3 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>
                    <strong>Calorías:</strong> {selectedItem.calories} cal
                  </span>
                  <span>
                    <strong>Grasas:</strong> {selectedItem.fat}g
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>
                    <strong>Carbs:</strong> {selectedItem.carbs}g
                  </span>
                  <span>
                    <strong>Proteínas:</strong> {selectedItem.protein}g
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="mt-4 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

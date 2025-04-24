"use client";
import { useState } from "react";
import { menuItems } from "@/utils/menu";
import Modal from "../components/modal";

type MenuItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  badges: string[];
};

const groupByCategory = (items: MenuItem[]) => {
  return items.reduce((acc: Record<string, MenuItem[]>, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});
};

export default function Card() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const handleClose = () => setSelectedItem(null);

  const groupedItems = groupByCategory(menuItems);

  return (
    <>
      {Object.entries(groupedItems).map(([category, items]) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl font-bold mb-4 px-4 text-primary-txt">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl relative group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm mt-2">{item.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm font-medium">{item.category}</span>
                    <span className="text-lg font-bold">${item.price}</span>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform scale-110 brightness-75 transition duration-300"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="relative z-10 px-4 py-2 bg-background text-white font-semibold rounded-lg shadow hover:bg-gray-700 cursor-pointer"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedItem && <Modal item={selectedItem} onClose={handleClose} />}
    </>
  );
}

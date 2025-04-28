"use client";
import { useState } from "react";
import { menuItems } from "@/utils/menu";
import Link from "next/link";
import Modal from "../components/modal";
import { MenuItem } from "@/types";

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
        <div key={category} className="w-full mb-10 ">
          <h2 className="text-2xl font-bold mb-4 text-primary-txt">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl relative group cursor-pointer"
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
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <Link
              href={`/menu/${category.toLowerCase()}`}
              className="text-primary hover:underline text-xl font-semibold"
            >
              Ver todo
            </Link>
          </div>
        </div>
      ))}

      {selectedItem && <Modal item={selectedItem} onClose={handleClose} />}
    </>
  );
}

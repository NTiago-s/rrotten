"use client";
import { useParams } from "next/navigation";
import { menuItems } from "@/utils/menu";
import Modal from "@/components/modal";
import { useState } from "react";
import Link from "next/link";
import { MenuItem } from "@/types";

export default function CategoryPage() {
  const params = useParams();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const handleClose = () => setSelectedItem(null);
  const rawCategory = params.category;
  const categoryParam = decodeURIComponent(
    Array.isArray(rawCategory) ? rawCategory[0] : rawCategory || ""
  ).toLowerCase();

  const items = menuItems.filter(
    (item) => item.category.toLowerCase() === categoryParam
  );

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-6 capitalize text-primary-txt">
          {categoryParam}
        </h1>
        <Link
          href="/"
          className="text-primary hover:underline text-xl font-semibold underline"
        >
          Volver atras
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
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
      {selectedItem && <Modal item={selectedItem} onClose={handleClose} />}
    </div>
  );
}

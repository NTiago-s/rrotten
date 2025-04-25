"use client";
import { useParams } from "next/navigation";
import { menuItems } from "@/utils/menu";

export default function CategoryPage() {
  const params = useParams();

  const rawCategory = params.category;
  const categoryParam = decodeURIComponent(
    Array.isArray(rawCategory) ? rawCategory[0] : rawCategory || ""
  ).toLowerCase();

  const items = menuItems.filter(
    (item) => item.category.toLowerCase() === categoryParam
  );

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize text-primary-txt">
        {categoryParam}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white h-fit rounded-xl shadow-md overflow-hidden"
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
          </div>
        ))}
      </div>
    </div>
  );
}

import { MenuItem } from "@/types";
import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  item: MenuItem;
  onClose: () => void;
}

export default function Modal({ item, onClose }: ModalProps) {
  if (typeof window === "undefined") return null;

  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 backdrop-blur-md bg-black/40 flex items-center justify-center px-4"
    >
      <div className="bg-white rounded-xl overflow-hidden w-full max-w-md shadow-lg flex flex-col">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <span className="text-lg font-semibold">${item.price}</span>
          </div>
          <p className="text-sm text-gray-600">{item.description}</p>

          {item.badges && (
            <div className="flex gap-2 flex-wrap">
              {item.badges.map((badge, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-gray-200 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          <div className="border-t pt-3 text-sm text-gray-700 space-y-2">
            <div className="flex justify-between">
              <span>
                <strong>Calorías:</strong> {item.calories} cal
              </span>
              <span>
                <strong>Grasas:</strong> {item.fat}g
              </span>
            </div>
            <div className="flex justify-between">
              <span>
                <strong>Carbs:</strong> {item.carbs}g
              </span>
              <span>
                <strong>Proteínas:</strong> {item.protein}g
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full cursor-pointer bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

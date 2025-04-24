import React from "react";

interface MenuItem {
  title: string;
  price: number;
  description: string;
  image: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  badges?: string[];
  category?: string;
}

interface ModalProps {
  item: MenuItem;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 backdrop-blur-md bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl overflow-hidden w-full max-w-xl shadow-lg">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <span className="text-lg font-semibold">${item.price}</span>
          </div>

          <p className="mt-2 text-sm text-gray-600">{item.description}</p>

          {item.badges && (
            <div className="mt-3 flex gap-2 flex-wrap">
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

          <div className="mt-4 border-t pt-3 text-sm text-gray-700">
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
            className="mt-4 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

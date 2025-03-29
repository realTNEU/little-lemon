import React, { useState } from "react";
import { menuItems } from "../constants";

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="p-8 bg-[#89AC46]">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#D3E671] shadow-md rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.category} - {item.subCategory}</p>
              <p className="text-lg font-bold text-green-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#FF8989] bg-opacity-50 p-4">
          <div className="bg-[#D3E671] p-6 rounded-lg shadow-lg max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl"
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-bold mt-4">{selectedItem.name}</h3>
            <p className="text-gray-700 mt-2">{selectedItem.description}</p>
            <p className="text-lg font-bold text-green-600 mt-2">
              {selectedItem.price}
            </p>
            <p className="text-sm text-gray-500 mt-1">Quantity: {selectedItem.quantity}</p>
            <div className="mt-3">
              <p className="text-sm font-semibold">Nutritional Info:</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Protein: {selectedItem.nutrients.protein}g</li>
                <li>Carbs: {selectedItem.nutrients.carbs}g</li>
                <li>Fats: {selectedItem.nutrients.fats}g</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;

import React, { useState } from "react";

const CustomizationPanel = ({ setText, setColor }: { setText: (text: string) => void; setColor: (color: string) => void }) => {
  return (
    <div className="w-1/4 bg-white p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-2">Customize</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Add Text:</label>
        <input type="text" onChange={(e) => setText(e.target.value)} className="border p-2 w-full" />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Pick a Color:</label>
        <input type="color" onChange={(e) => setColor(e.target.value)} className="w-full h-10" />
      </div>
    </div>
  );
};

export default CustomizationPanel;

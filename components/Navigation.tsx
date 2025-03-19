import React from "react";

const Navigation = () => {
  return (
    <div className="w-full flex justify-between p-4 bg-white shadow-md">
      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">Preview</button>
      <button className="px-4 py-2 bg-purple-800 text-white rounded-lg">Next</button>
    </div>
  );
};

export default Navigation;

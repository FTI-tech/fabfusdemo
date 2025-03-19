import React from "react";

const designs = ["/shirt1.png", "/shirt2.png", "/shirt3.png"];

const Sidebar = ({ setDesign }: { setDesign: (design: string) => void }) => {
  return (
    <div className="w-1/5 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-purple-600 p-4">
      <h2 className="text-white text-xl font-semibold mb-4">Tie & Dye</h2>
      <div className="flex flex-col gap-4">
        {designs.map((design, index) => (
          <button key={index} onClick={() => setDesign(design)} className="p-2 rounded-lg bg-white">
            <img src={design} alt={`Design ${index + 1}`} className="w-16 h-16 rounded-md" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

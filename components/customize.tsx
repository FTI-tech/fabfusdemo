'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function TshirtCustomizer() {
  const [text, setText] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [shirtColor, setShirtColor] = useState('#FFC0CB'); // Default pink

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string); // Ensure it's a string
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center bg-purple-200 min-h-screen p-5">
      <h1 className="text-3xl font-bold text-purple-700">Customize Your T-Shirt</h1>
      <div className="flex gap-10 mt-5">
        {/* T-shirt Preview */}
        <div className="relative w-80 h-96 bg-white flex items-center justify-center border rounded-xl" style={{ backgroundColor: shirtColor }}>
          {uploadedImage && (
            <Image src={uploadedImage} alt="Custom Design" width={200} height={200} className="absolute" />
          )}
          <p className="absolute top-10 text-xl font-bold" style={{ color: textColor }}>{text}</p>
        </div>

        {/* Customization Panel */}
        <div className="flex flex-col space-y-4">
          {/* Text Customization */}
          <div>
            <label className="block text-purple-800">Add Text:</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block text-purple-800">Text Color:</label>
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="w-full h-10"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-purple-800">Upload Image:</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full border p-2 rounded" />
          </div>

          {/* Shirt Color */}
          <div>
            <label className="block text-purple-800">T-Shirt Color:</label>
            <input
              type="color"
              value={shirtColor}
              onChange={(e) => setShirtColor(e.target.value)}
              className="w-full h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

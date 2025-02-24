import React from "react";
import { motion } from "framer-motion";

interface ColorPickerProps {
  onColorChange: (color: string) => void;
  currentColor?: string;
}

const ColorPicker = ({
  onColorChange,
  currentColor = "#E0FF1E",
}: ColorPickerProps) => {
  const colors = [
    "#E0FF1E", // Lime
    "#FF6B6B", // Coral
    "#4ECDC4", // Turquoise
    "#FFD93D", // Yellow
    "#95A5A6", // Gray
    "#FF8C00", // Orange
    "#FF1493", // Pink
    "#00FF00", // Green
    "#40E0D0", // Turquoise
    "#9370DB", // Purple
  ];

  return (
    <div className="fixed right-4 top-24 bg-black/90 p-4 rounded-lg border border-zinc-800 z-50">
      <h3 className="text-white font-exo mb-3 text-sm">Theme Color</h3>
      <div className="grid grid-cols-2 gap-2">
        {colors.map((color) => (
          <motion.button
            key={color}
            onClick={() => onColorChange(color)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-8 h-8 rounded-full ${color === currentColor ? "ring-2 ring-white" : ""}`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;

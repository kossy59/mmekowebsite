import React from "react";
import DropdownMenu from "./Dropdown";

interface FollowerCardProps {
  image: string;
  name: string;
  modelid: string;
}

const FollowerCard: React.FC<FollowerCardProps> = ({ image, name, modelid }) => (
  <div className="flex items-center justify-between w-full px-2 py-3 mb-3 rounded-lg">
    {/* Left side: avatar + name */}
    <div className="flex items-center gap-4 flex-1 min-w-0">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <div className="text-white font-semibold truncate">{name}</div>
        
      </div>
    </div>

    {/* Right side: Dropdown (three dots) */}
    <div className="flex-shrink-0">
      <DropdownMenu />
    </div>
  </div>
);

export default FollowerCard;

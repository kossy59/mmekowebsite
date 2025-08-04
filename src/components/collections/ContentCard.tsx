"use client";

import React from "react";
import Image from "next/image";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

interface ContentCardProps {
  id: string;
  title: string;
  imageUrl: string;
  modelName: string;
  modelAvatar: string;
  likes: number;
  comments: number;
  price?: number;
  isPurchased?: boolean;
  type: "image" | "video" | "text";
}

const ContentCard: React.FC<ContentCardProps> = ({
  id,
  title,
  imageUrl,
  modelName,
  modelAvatar,
  likes,
  comments,
  price,
  isPurchased = false,
  type,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Content Image/Video */}
      <div className="relative aspect-square">
        <Image
          src={imageUrl || "/placeholder-image.jpg"}
          alt={title}
          fill
          className="object-cover"
        />
        {type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 rounded-full p-3">
              <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
            </div>
          </div>
        )}
        {price && !isPurchased && (
          <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            ${price}
          </div>
        )}
        {isPurchased && (
          <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Owned
          </div>
        )}
      </div>

      {/* Content Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {title}
        </h3>
        
        {/* Model Info */}
        <div className="flex items-center mb-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
            <Image
              src={modelAvatar || "/default-avatar.jpg"}
              alt={modelName}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {modelName}
          </span>
        </div>

        {/* Engagement Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FaHeart className="w-4 h-4" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaComment className="w-4 h-4" />
              <span>{comments}</span>
            </div>
          </div>
          <button className="hover:text-gray-700 dark:hover:text-gray-200">
            <FaShare className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;

"use client";

import React from "react";
import Image from "next/image";
import { FaHeart, FaMessage, FaUserPlus } from "react-icons/fa6";

interface CrushCardProps {
  id: string;
  name: string;
  username: string;
  avatar: string;
  coverImage?: string;
  isVerified?: boolean;
  isFollowing?: boolean;
  mutualFollowers?: number;
  lastActive?: string;
  onFollow?: (id: string) => void;
  onMessage?: (id: string) => void;
  onRemoveCrush?: (id: string) => void;
}

const CrushCard: React.FC<CrushCardProps> = ({
  id,
  name,
  username,
  avatar,
  coverImage,
  isVerified = false,
  isFollowing = false,
  mutualFollowers = 0,
  lastActive,
  onFollow,
  onMessage,
  onRemoveCrush,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Cover Image */}
      <div className="relative h-24 bg-gradient-to-r from-purple-400 to-pink-400">
        {coverImage && (
          <Image
            src={coverImage}
            alt={`${name} cover`}
            fill
            className="object-cover"
          />
        )}
        {/* Remove from Crush button */}
        <button
          onClick={() => onRemoveCrush?.(id)}
          className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full transition-colors duration-200"
          title="Remove from crush list"
        >
          <FaHeart className="w-3 h-3" />
        </button>
      </div>

      {/* Profile Section */}
      <div className="relative px-4 pb-4">
        {/* Avatar */}
        <div className="relative -mt-8 mb-3">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 mx-auto">
            <Image
              src={avatar || "/default-avatar.jpg"}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          {isVerified && (
            <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>

        {/* User Info */}
        <div className="text-center mb-3">
          <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
            {name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            @{username}
          </p>
          {mutualFollowers > 0 && (
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              {mutualFollowers} mutual followers
            </p>
          )}
          {lastActive && (
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Active {lastActive}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={() => onFollow?.(id)}
            className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              isFollowing
                ? "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                : "bg-purple-600 hover:bg-purple-700 text-white"
            }`}
          >
            <div className="flex items-center justify-center space-x-1">
              <FaUserPlus className="w-3 h-3" />
              <span>{isFollowing ? "Following" : "Follow"}</span>
            </div>
          </button>
          <button
            onClick={() => onMessage?.(id)}
            className="px-3 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200"
          >
            <FaMessage className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CrushCard;

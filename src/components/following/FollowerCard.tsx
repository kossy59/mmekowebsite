"use client";

import React from "react";
import Image from "next/image";
import { FaUserMinus, FaMessage, FaUserCheck } from "react-icons/fa6";

interface FollowerCardProps {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  isVerified?: boolean;
  isFollowingBack?: boolean;
  followersCount?: number;
  mutualFollowers?: number;
  lastActive?: string;
  onUnfollow?: (id: string) => void;
  onMessage?: (id: string) => void;
  onViewProfile?: (id: string) => void;
}

const FollowerCard: React.FC<FollowerCardProps> = ({
  id,
  name,
  username,
  avatar,
  bio,
  isVerified = false,
  isFollowingBack = false,
  followersCount = 0,
  mutualFollowers = 0,
  lastActive,
  onUnfollow,
  onMessage,
  onViewProfile,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
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
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <button
              onClick={() => onViewProfile?.(id)}
              className="font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 truncate"
            >
              {name}
            </button>
            {isFollowingBack && (
              <div className="flex items-center space-x-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-2 py-1 rounded-full text-xs">
                <FaUserCheck className="w-3 h-3" />
                <span>Follows you</span>
              </div>
            )}
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
            @{username}
          </p>
          
          {bio && (
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2 line-clamp-2">
              {bio}
            </p>
          )}
          
          <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
            {followersCount > 0 && (
              <span>{followersCount.toLocaleString()} followers</span>
            )}
            {mutualFollowers > 0 && (
              <span>{mutualFollowers} mutual</span>
            )}
            {lastActive && (
              <span>Active {lastActive}</span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <button
            onClick={() => onMessage?.(id)}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            title="Send message"
          >
            <FaMessage className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => onUnfollow?.(id)}
            className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 border border-gray-300 dark:border-gray-600 hover:border-red-300 dark:hover:border-red-600 rounded-lg transition-colors duration-200"
          >
            <div className="flex items-center space-x-1">
              <FaUserMinus className="w-3 h-3" />
              <span>Unfollow</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowerCard;

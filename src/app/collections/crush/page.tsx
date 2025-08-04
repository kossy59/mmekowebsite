"use client";

import React, { useState } from "react";
import CrushCard from "@/components/collections/CrushCard";
import { FaSearch, FaHeart } from "react-icons/fa";

export const metadata = {
  title: "Crush List",
  description: "Your favorite models and creators",
};

// Mock data - replace with actual API calls
const mockCrushes = [
  {
    id: "1",
    name: "Sarah Johnson",
    username: "sarahj_model",
    avatar: "/default-avatar.jpg",
    coverImage: "/placeholder-image.jpg",
    isVerified: true,
    isFollowing: true,
    mutualFollowers: 12,
    lastActive: "2 hours ago",
  },
  {
    id: "2",
    name: "Emma Wilson",
    username: "emma_w",
    avatar: "/default-avatar.jpg",
    isVerified: false,
    isFollowing: false,
    mutualFollowers: 5,
    lastActive: "1 day ago",
  },
  {
    id: "3",
    name: "Jessica Brown",
    username: "jess_b_model",
    avatar: "/default-avatar.jpg",
    coverImage: "/placeholder-image.jpg",
    isVerified: true,
    isFollowing: true,
    mutualFollowers: 8,
    lastActive: "5 minutes ago",
  },
  {
    id: "4",
    name: "Olivia Davis",
    username: "olivia_d",
    avatar: "/default-avatar.jpg",
    isVerified: false,
    isFollowing: false,
    mutualFollowers: 3,
    lastActive: "3 days ago",
  },
];

const CrushListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [crushes, setCrushes] = useState(mockCrushes);

  const filteredCrushes = crushes.filter(crush =>
    crush.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    crush.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFollow = (id: string) => {
    setCrushes(prev => prev.map(crush => 
      crush.id === id ? { ...crush, isFollowing: !crush.isFollowing } : crush
    ));
  };

  const handleMessage = (id: string) => {
    console.log("Message user:", id);
    // Implement message logic - redirect to message page
  };

  const handleRemoveCrush = (id: string) => {
    setCrushes(prev => prev.filter(crush => crush.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <FaHeart className="text-red-500 text-2xl" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Crush List
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          Your favorite models and creators in one place
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search your crushes..."
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {crushes.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Total Crushes
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {crushes.filter(c => c.isFollowing).length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Following
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {crushes.filter(c => c.isVerified).length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Verified Models
          </div>
        </div>
      </div>

      {/* Crush Grid */}
      {filteredCrushes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCrushes.map((crush) => (
            <CrushCard
              key={crush.id}
              {...crush}
              onFollow={handleFollow}
              onMessage={handleMessage}
              onRemoveCrush={handleRemoveCrush}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-500 mb-4">
            {searchQuery ? (
              <FaSearch className="w-16 h-16 mx-auto" />
            ) : (
              <FaHeart className="w-16 h-16 mx-auto" />
            )}
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {searchQuery ? "No crushes found" : "No crushes added yet"}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {searchQuery 
              ? `No crushes match "${searchQuery}"`
              : "Start adding your favorite models to your crush list"
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default CrushListPage;

"use client";

import React, { useState } from "react";
import ContentCard from "@/components/collections/ContentCard";
import { FaFilter, FaSort } from "react-icons/fa";

export const metadata = {
  title: "Purchased Content",
  description: "Your purchased content collection",
};

// Mock data - replace with actual API calls
const mockPurchasedContent = [
  {
    id: "1",
    title: "Beautiful sunset photography session",
    imageUrl: "/placeholder-image.jpg",
    modelName: "Sarah Johnson",
    modelAvatar: "/default-avatar.jpg",
    likes: 245,
    comments: 18,
    price: 15,
    isPurchased: true,
    type: "image" as const,
  },
  {
    id: "2",
    title: "Exclusive behind the scenes video",
    imageUrl: "/placeholder-image.jpg",
    modelName: "Emma Wilson",
    modelAvatar: "/default-avatar.jpg",
    likes: 189,
    comments: 32,
    price: 25,
    isPurchased: true,
    type: "video" as const,
  },
  {
    id: "3",
    title: "Personal story and thoughts",
    imageUrl: "/placeholder-image.jpg",
    modelName: "Jessica Brown",
    modelAvatar: "/default-avatar.jpg",
    likes: 156,
    comments: 24,
    price: 10,
    isPurchased: true,
    type: "text" as const,
  },
];

const PurchasedContentPage = () => {
  const [sortBy, setSortBy] = useState<"recent" | "popular" | "price">("recent");
  const [filterBy, setFilterBy] = useState<"all" | "image" | "video" | "text">("all");

  const filteredContent = mockPurchasedContent.filter(content => 
    filterBy === "all" || content.type === filterBy
  );

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.likes - a.likes;
      case "price":
        return b.price - a.price;
      case "recent":
      default:
        return 0; // In real app, sort by purchase date
    }
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Purchased Content
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          All your purchased content in one place
        </p>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center space-x-4">
          {/* Filter */}
          <div className="flex items-center space-x-2">
            <FaFilter className="text-gray-500 dark:text-gray-400" />
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value as any)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">All Types</option>
              <option value="image">Images</option>
              <option value="video">Videos</option>
              <option value="text">Text Posts</option>
            </select>
          </div>

          {/* Sort */}
          <div className="flex items-center space-x-2">
            <FaSort className="text-gray-500 dark:text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="price">Highest Price</option>
            </select>
          </div>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          {sortedContent.length} items
        </div>
      </div>

      {/* Content Grid */}
      {sortedContent.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedContent.map((content) => (
            <ContentCard key={content.id} {...content} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No content found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {filterBy === "all" 
              ? "You haven't purchased any content yet"
              : `No ${filterBy} content found`
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default PurchasedContentPage;

"use client";

import React, { useState } from "react";
import CollectionTabs from "@/components/collections/CollectionTabs";
import ContentCard from "@/components/collections/ContentCard";
import CrushCard from "@/components/collections/CrushCard";

export const metadata = {
  title: "Collections",
  description: "Your purchased content and crush list",
};

// Mock data - replace with actual API calls
const mockContent = [
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
];

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
];

const CollectionsPage = () => {
  const [activeTab, setActiveTab] = useState<"content" | "crush">("content");

  const handleFollow = (id: string) => {
    console.log("Follow user:", id);
    // Implement follow logic
  };

  const handleMessage = (id: string) => {
    console.log("Message user:", id);
    // Implement message logic
  };

  const handleRemoveCrush = (id: string) => {
    console.log("Remove from crush list:", id);
    // Implement remove crush logic
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          My Collections
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your purchased content and crush list
        </p>
      </div>

      {/* Tabs */}
      <CollectionTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        contentCount={mockContent.length}
        crushCount={mockCrushes.length}
      />

      {/* Content */}
      {activeTab === "content" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockContent.map((content) => (
            <ContentCard key={content.id} {...content} />
          ))}
          {mockContent.length === 0 && (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No purchased content yet
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Start exploring and purchase content from your favorite models
              </p>
            </div>
          )}
        </div>
      )}

      {activeTab === "crush" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockCrushes.map((crush) => (
            <CrushCard
              key={crush.id}
              {...crush}
              onFollow={handleFollow}
              onMessage={handleMessage}
              onRemoveCrush={handleRemoveCrush}
            />
          ))}
          {mockCrushes.length === 0 && (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No crushes added yet
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Add models to your crush list to keep track of your favorites
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CollectionsPage;

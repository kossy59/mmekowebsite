"use client";

import React, { useState } from "react";
import FollowingTabs from "@/components/following/FollowingTabs";
import FollowerCard from "@/components/following/FollowerCard";
import SearchBar from "@/components/following/SearchBar";
import { FaUsers } from "react-icons/fa";

export const metadata = {
  title: "Following",
  description: "People you follow on Mmeko",
};

// Mock data - replace with actual API calls
const mockFollowing = [
  {
    id: "1",
    name: "Sarah Johnson",
    username: "sarahj_model",
    avatar: "/default-avatar.jpg",
    bio: "Professional model and content creator. Sharing my journey and exclusive content.",
    isVerified: true,
    isFollowingBack: true,
    followersCount: 15420,
    mutualFollowers: 12,
    lastActive: "2 hours ago",
    isModel: true,
  },
  {
    id: "2",
    name: "Emma Wilson",
    username: "emma_w",
    avatar: "/default-avatar.jpg",
    bio: "Lifestyle blogger and photographer. Love capturing beautiful moments.",
    isVerified: false,
    isFollowingBack: false,
    followersCount: 3240,
    mutualFollowers: 5,
    lastActive: "1 day ago",
    isModel: false,
  },
  {
    id: "3",
    name: "Jessica Brown",
    username: "jess_b_model",
    avatar: "/default-avatar.jpg",
    bio: "Fashion model and entrepreneur. Building my brand one post at a time.",
    isVerified: true,
    isFollowingBack: true,
    followersCount: 28750,
    mutualFollowers: 8,
    lastActive: "5 minutes ago",
    isModel: true,
  },
  {
    id: "4",
    name: "Mike Davis",
    username: "mike_d_photo",
    avatar: "/default-avatar.jpg",
    bio: "Professional photographer and content creator.",
    isVerified: false,
    isFollowingBack: true,
    followersCount: 1850,
    mutualFollowers: 3,
    lastActive: "3 hours ago",
    isModel: false,
  },
];

const FollowingPage = () => {
  const [activeTab, setActiveTab] = useState<"all" | "mutual" | "models">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [following, setFollowing] = useState(mockFollowing);

  // Filter based on active tab
  const getFilteredByTab = () => {
    switch (activeTab) {
      case "mutual":
        return following.filter(user => user.isFollowingBack);
      case "models":
        return following.filter(user => user.isModel);
      case "all":
      default:
        return following;
    }
  };

  // Filter by search query
  const filteredFollowing = getFilteredByTab().filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.bio?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate counts for tabs
  const allCount = following.length;
  const mutualCount = following.filter(user => user.isFollowingBack).length;
  const modelsCount = following.filter(user => user.isModel).length;

  const handleUnfollow = (id: string) => {
    setFollowing(prev => prev.filter(user => user.id !== id));
  };

  const handleMessage = (id: string) => {
    console.log("Message user:", id);
    // Implement message logic - redirect to message page
  };

  const handleViewProfile = (id: string) => {
    console.log("View profile:", id);
    // Implement profile view logic - redirect to profile page
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <FaUsers className="text-purple-500 text-2xl" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Following
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          People you follow on Mmeko
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <SearchBar
          placeholder="Search people you follow..."
          onSearch={handleSearch}
          onClear={handleClearSearch}
          initialValue={searchQuery}
        />
      </div>

      {/* Tabs */}
      <FollowingTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        allCount={allCount}
        mutualCount={mutualCount}
        modelsCount={modelsCount}
      />

      {/* Results Count */}
      {searchQuery && (
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {filteredFollowing.length} results for "{searchQuery}"
          </p>
        </div>
      )}

      {/* Following List */}
      {filteredFollowing.length > 0 ? (
        <div className="space-y-4">
          {filteredFollowing.map((user) => (
            <FollowerCard
              key={user.id}
              {...user}
              onUnfollow={handleUnfollow}
              onMessage={handleMessage}
              onViewProfile={handleViewProfile}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-500 mb-4">
            {searchQuery ? (
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            ) : (
              <FaUsers className="w-16 h-16 mx-auto" />
            )}
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {searchQuery ? "No results found" : getEmptyStateTitle()}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {searchQuery 
              ? `No users match "${searchQuery}"`
              : getEmptyStateDescription()
            }
          </p>
        </div>
      )}
    </div>
  );

  function getEmptyStateTitle() {
    switch (activeTab) {
      case "mutual":
        return "No mutual followers";
      case "models":
        return "No models followed";
      case "all":
      default:
        return "Not following anyone yet";
    }
  }

  function getEmptyStateDescription() {
    switch (activeTab) {
      case "mutual":
        return "None of the people you follow are following you back";
      case "models":
        return "You haven't followed any verified models yet";
      case "all":
      default:
        return "Start following people to see them here";
    }
  }
};

export default FollowingPage;

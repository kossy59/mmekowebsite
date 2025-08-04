"use client";

import React, { useState } from "react";
import { FaImages, FaHeart } from "react-icons/fa";

interface CollectionTabsProps {
  activeTab: "content" | "crush";
  onTabChange: (tab: "content" | "crush") => void;
  contentCount?: number;
  crushCount?: number;
}

const CollectionTabs: React.FC<CollectionTabsProps> = ({
  activeTab,
  onTabChange,
  contentCount = 0,
  crushCount = 0,
}) => {
  const tabs = [
    {
      id: "content" as const,
      label: "Purchased Content",
      icon: FaImages,
      count: contentCount,
    },
    {
      id: "crush" as const,
      label: "Crush List",
      icon: FaHeart,
      count: crushCount,
    },
  ];

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
      <nav className="flex space-x-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                isActive
                  ? "border-purple-500 text-purple-600 dark:text-purple-400"
                  : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.count > 0 && (
                <span className={`px-2 py-1 text-xs rounded-full ${
                  isActive
                    ? "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300"
                    : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default CollectionTabs;

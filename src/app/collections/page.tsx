"use client";
import React, { useState } from "react";
import { MdShoppingBag, MdFavorite } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";


const ImageCard = ({ src }: { src: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg mb-6 min-h-[24rem] bg-gray-800">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <FaSpinner className="animate-spin text-white text-2xl" />
        </div>
      )}
      <img
        src={src}
        alt="Preview"
        className={`w-full h-96 object-cover sm:rounded-xl transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
      {isLoaded && (
        <button className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
          <BsThreeDotsVertical />
        </button>
      )}
    </div>
  );
};


const Content = () => {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
   "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=800&q=80",
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  ];

  return (
    <div className="mt-4">
      {images.map((src, idx) => (
        <ImageCard key={idx} src={src} />
      ))}
    </div>
  );
};

const Crush = () => {
  const images = [
    "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1595152772835-219674b2a8a0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1614289966287-3a1bb7f9e2dc?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <div className="mt-4">
      {images.map((src, idx) => (
        <ImageCard key={idx} src={src} />
      ))}
    </div>
  );
};

const CollectionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"content" | "crush">("content");

  const getBtnStyle = (tab: "content" | "crush") =>
    activeTab === tab
      ? { backgroundColor: "#292d31", borderColor: "#d1d5db" }
      : { backgroundColor: "#18181b", borderColor: "#334155" };

  return (
    <div className="min-h-screen bg-[#0e0f2a] text-white">
      <div className="w-screen sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto pt-16">
        <div className="w-full flex flex-col text-gray-400 px-4 md:px-0">
      
          <div className="sticky z-10 top-0 bg-[#0e0f2a] pb-4">
            <div className="grid grid-cols-2 gap-4 pt-2">
              <button
                className="flex items-center justify-center gap-2 border-2 transition-all duration-200 ease-in-out text-white py-3 px-4 rounded-lg font-medium w-full shadow-sm hover:shadow-md text-sm sm:text-base"
                style={getBtnStyle("content")}
                onClick={() => setActiveTab("content")}
              >
                <MdShoppingBag className="text-xl" />
                Purchased Content
              </button>
              <button
                className="flex items-center justify-center gap-2 border-2 transition-all duration-200 ease-in-out text-white py-3 px-4 rounded-lg font-medium w-full shadow-sm hover:shadow-md text-sm sm:text-base"
                style={getBtnStyle("crush")}
                onClick={() => setActiveTab("crush")}
              >
                <MdFavorite className="text-xl" />
                Crush List
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div>{activeTab === "content" ? <Content /> : <Crush />}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;

import React from "react";
import MyContentList from "./MyContentList";
import type { ContentItem } from "@/types/collection";

// Replace this with your Redux selector or API call as needed
const mockContent: ContentItem[] = [
  {
    exclusiveid: "1",
    name: "Premium Photo Set 1",
    id: "content1",
    exclusivelink: "https://picsum.photos/400/600?random=1",
    contenttype: "image",
  },
  {
    exclusiveid: "2",
    name: "Exclusive Video Content",
    id: "content2",
    exclusivelink: "https://picsum.photos/400/600?random=2",
    contenttype: "image",
  },
  {
    exclusiveid: "3",
    name: "Special Photo Collection",
    id: "content3",
    exclusivelink: "https://picsum.photos/400/600?random=3",
    contenttype: "image",
  },
];

const Content: React.FC = () => {
  const listofcontent = mockContent; // Replace with Redux selector if needed

  if (!listofcontent.length) {
    return (
      <div className="w-full">
        <p className="mt-16 text-yellow-200 text-xs w-full text-center">
          you have bought zero content
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-6 mb-3 p-2 h-[70vh]">
      {listofcontent.map((item, idx) => (
        <MyContentList key={idx} {...item} />
      ))}
    </div>
  );
};

export default Content;
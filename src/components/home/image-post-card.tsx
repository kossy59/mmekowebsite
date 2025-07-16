import Image from "next/image";
import React from "react";

export default function ImagePostCard() {
  return (
    <div className="h-screen bg-black/50 mx-3 p-3 rounded-md">
      <div className="flex items-center gap-x-3">
        <div className="size-10 rounded-full overflow-hidden">
          <Image
            src={"/icons/profile.png"}
            alt="profile"
            width={500}
            height={500}
            className="object-cover object-center size-full"
          />
        </div>
        <div>
          <p>abjlakjkd</p>
          <span className="text-gray-400">@super</span>
        </div>
      </div>
    </div>
  );
}

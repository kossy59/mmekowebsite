import React from "react";
import VideoPostCard from "./video-post-card";
import ImagePostCard from "./image-post-card";
import TextPostCard from "./text-post-card";
interface PostsParams {
  type: "video" | "image" | "text";
}

export default function PostsCard({ type }: PostsParams) {
  if (type === "video") return <VideoPostCard />;
  else if (type === "image") return <ImagePostCard />;

  return <TextPostCard />;
}

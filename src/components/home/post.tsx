"use client"
import React, { useState } from "react";
import VideoPostCard from "./video-post-card";
import ImagePostCard from "./image-post-card";
import TextPostCard from "./text-post-card";
import PostSkeleton from "../PostSkeleton";
interface PostsParams {
  type: "video" | "image" | "text";
  isLoading?: boolean
}

export default function PostsCard({ type }: PostsParams) {
  const [loading, setLoading] = useState(false)
  if(!loading) return <PostSkeleton />
  if (type === "video") return <VideoPostCard />;
  else if (type === "image") return <ImagePostCard />;

  // return <TextPostCard />;
}

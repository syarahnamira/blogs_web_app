"use client";

import React, { useState } from "react";
import { Comment } from "@/app/type";

export default function CommentComponen({ key, name, body }: Comment) {

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showReply, setShowReply] = useState(false);
  const [reply, setReply] = useState("");

  const toggleLike = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
      setLiked(true);
    } else {
      setLikeCount(likeCount - 1);
      setLiked(false);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-4">
      <strong className="font-semibold">{name}</strong>
      <p className="text-sm text-gray-700 mt-1">{body}</p>
      <div className="mt-2 flex items-center space-x-2 text-gray-500 text-xs">
        <button
          onClick={toggleLike}
          className={`hover:text-red-500 ${liked ? "text-red-500" : ""}`}
        >
          {liked ? "Unlike" : "Like"} {likeCount > 0 ? likeCount : ""}
        </button>
        <button
          className="hover:text-blue-500"
          onClick={() => setShowReply(!showReply)}
        >
          Reply
        </button>
      </div>
      {showReply && (
        <div className="mt-2">
          <input
            type="text"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="border p-2 text-sm w-full rounded-md"
            placeholder="Write a reply..."
          />
          <button
            onClick={() => {
              console.log(`Replying with: ${reply}`);
              setReply("");
              setShowReply(false);
            }}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
}

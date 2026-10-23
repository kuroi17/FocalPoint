"use client";

import React, { useState } from "react";

interface CommentItem {
  id: string;
  name: string;
  content: string;
  avatar: string;
}

export default function ArticleComments() {
  const [commentText, setCommentText] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: "1",
      name: "A Grade 11 reader",
      content: "This made me look at my own route differently.",
      avatar: "/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png",
    },
    {
      id: "2",
      name: "Anonymous",
      content: "More stories like this please!",
      avatar: "/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    setComments((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        name: isAnonymous ? "Anonymous" : "Campus Reader",
        content: commentText.trim(),
        avatar: "/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png",
      },
    ]);
    setCommentText("");
  };

  return (
    <div
      className="flex flex-col gap-[12px] items-start w-full pt-4"
      data-node-id="6:625"
      data-name="comments"
    >
      {/* Comments Section Title */}
      <h3
        className="font-display font-black leading-[0.88] not-italic text-[48px] text-[#b51d42] whitespace-nowrap tracking-wide select-none"
        data-node-id="6:626"
      >
        COMMENTS
      </h3>

      {/* Circulation Notice Banner */}
      <div
        className="bg-[#fff4f5] border-[#e0506a] border-l-3 border-solid p-[12px] w-full"
        data-node-id="6:627"
      >
        <p className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px]">
          Comments are reviewed by Circulation before they appear.
        </p>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-[12px] w-full">
        <div className="flex flex-col gap-[6px] w-full">
          <label className="font-sans font-semibold text-[13px] text-[#2b2226] tracking-[-0.13px]">
            Comment
          </label>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Share your thoughts…"
            className="border-[1.5px] border-[#f1c9d0] border-solid rounded-[4px] p-[12px] h-[90px] w-full font-sans text-[14px] text-[#2b2226] placeholder-[#6c5a61] focus:outline-none focus:border-[#b51d42] resize-none"
          />
        </div>

        <div className="flex items-center justify-between w-full">
          <label className="flex items-center gap-[8px] cursor-pointer select-none">
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
              className="accent-[#b51d42] size-[16px] rounded-[3px] border-[1.5px] border-[#6c5a61]"
            />
            <span className="font-sans font-normal text-[14px] text-[#2b2226] tracking-[-0.14px]">
              Comment anonymously
            </span>
          </label>

          <button
            type="submit"
            className="bg-[#b51d42] hover:bg-[#a8283f] text-white font-sans font-bold text-[14px] tracking-[-0.14px] px-[18px] py-[12px] rounded-[4px] transition-colors"
          >
            Post comment
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="w-full flex flex-col mt-4">
        {comments.map((c) => (
          <div
            key={c.id}
            className="border-[#f1c9d0] border-t border-solid py-[14px] flex gap-[12px] items-start w-full"
          >
            <div className="border-2 border-[#e0506a] border-solid rounded-full overflow-hidden size-[40px] bg-[#ffe1e5] shrink-0">
              <img
                src={c.avatar}
                alt={c.name}
                className="size-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-[2px] min-w-0">
              <span className="font-sans font-bold text-[14px] text-[#2b2226] tracking-[-0.14px]">
                {c.name}
              </span>
              <p className="font-sans font-normal text-[15px] text-[#2b2226] tracking-[-0.15px] leading-relaxed">
                {c.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

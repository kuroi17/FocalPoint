"use client";

import React, { useState } from "react";

interface ChatMessage {
  id: string;
  sender: string;
  isStaff?: boolean;
  isYou?: boolean;
  time: string;
  text: string;
  channel: string;
}

interface QuestionItem {
  id: string;
  question: string;
  answer: string;
}

export default function CommunityBox() {
  const [activeChannel, setActiveChannel] = useState<string>("# general");
  const [inputText, setInputText] = useState<string>("");
  const [askText, setAskText] = useState<string>("");

  const channels = [
    { id: "# general", desc: "Say hi and talk about anything Focalpoint." },
    { id: "# favorites", desc: "Share your top picks from our published stories." },
    { id: "# opinion-corner", desc: "Debate editorials and columns respectfully." },
    { id: "# photo-talk", desc: "Discuss campus shots, gear, and camera techniques." },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "Fokie",
      isStaff: true,
      time: "9:00 AM",
      text: "Welcome to the Focalpoint community! Be kind, and no personal info please.",
      channel: "# general",
    },
    {
      id: "2",
      sender: "A Grade 10 reader",
      time: "9:12 AM",
      text: "The commute story is so real. My ride is two jeeps too.",
      channel: "# general",
    },
    {
      id: "3",
      sender: "Anonymous",
      time: "9:30 AM",
      text: "Can we get a story about the new gas prices?",
      channel: "# general",
    },
    {
      id: "4",
      sender: "You",
      isYou: true,
      time: "9:41 AM",
      text: "Same! The gas story should be next.",
      channel: "# general",
    },
    {
      id: "5",
      sender: "Kat Mendoza",
      isStaff: true,
      time: "10:15 AM",
      text: "Drop your op-ed topic ideas here! We read every thread.",
      channel: "# opinion-corner",
    },
    {
      id: "6",
      sender: "Photo Desk",
      isStaff: true,
      time: "8:45 AM",
      text: "Submit your campus photos via the Image Board!",
      channel: "# photo-talk",
    },
  ]);

  const [questions, setQuestions] = useState<QuestionItem[]>([
    {
      id: "1",
      question: "When will the website launch?",
      answer: "November 1, 2026! — WebDev",
    },
    {
      id: "2",
      question: "Can non-members submit photos?",
      answer: "Yes. Use Submit your photo in the Gallery. — Circulation",
    },
    {
      id: "3",
      question: "Do you accept letters to the editor?",
      answer: "Waiting for a staff answer…",
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "You",
      isYou: true,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      text: inputText.trim(),
      channel: activeChannel,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText("");
  };

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!askText.trim()) return;

    const newQ: QuestionItem = {
      id: Date.now().toString(),
      question: askText.trim(),
      answer: "Waiting for a staff answer…",
    };

    setQuestions((prev) => [newQ, ...prev]);
    setAskText("");
  };

  const currentChannelInfo =
    channels.find((c) => c.id === activeChannel) || channels[0];

  const channelMessages = messages.filter(
    (m) => m.channel === activeChannel
  );

  return (
    <div
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] pb-[64px]"
      data-node-id="11:1246"
      data-name="chat area"
    >
      <div
        className="border-[1.5px] border-[#f1c9d0] border-solid rounded-[4px] flex flex-col lg:flex-row items-stretch w-full overflow-hidden bg-white shadow-sm"
        data-node-id="11:1249"
        data-name="community box"
      >
        {/* Left Column: Channels */}
        <div
          className="bg-[#fff4f5] lg:w-[220px] p-[14px] flex flex-col gap-[6px] shrink-0 border-b lg:border-b-0 border-[#f1c9d0]"
          data-node-id="11:1250"
          data-name="channels"
        >
          <span
            className="font-sans font-bold text-[12px] text-[#6c5a61] tracking-[0.96px] uppercase px-1 pb-1"
            data-node-id="11:1251"
          >
            CHANNELS
          </span>
          <div className="flex flex-row lg:flex-col gap-[4px] overflow-x-auto lg:overflow-visible scrollbar-none">
            {channels.map((ch) => {
              const isActive = activeChannel === ch.id;
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => setActiveChannel(ch.id)}
                  className={`px-[10px] py-[8px] rounded-[4px] text-left transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-white text-[#b51d42] shadow-xs"
                      : "text-[#2b2226] hover:bg-white/60"
                  }`}
                >
                  <span className="font-sans font-semibold text-[14px] tracking-[-0.14px]">
                    {ch.id}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Center Column: Live Chat Messages & Compose */}
        <div
          className="flex-1 flex flex-col border-b lg:border-b-0 lg:border-r border-[#f1c9d0] min-w-0"
          data-node-id="11:1260"
          data-name="chat"
        >
          {/* Chat Header Bar */}
          <div
            className="border-b border-[#f1c9d0] px-[16px] py-[12px] flex flex-col sm:flex-row sm:items-center justify-between gap-1 w-full"
            data-node-id="11:1261"
          >
            <span
              className="font-sans font-bold text-[15px] text-[#2b2226] tracking-[-0.15px]"
              data-node-id="11:1262"
            >
              {currentChannelInfo.id}
            </span>
            <span
              className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px]"
              data-node-id="11:1263"
            >
              {currentChannelInfo.desc}
            </span>
          </div>

          {/* Messages Stream */}
          <div
            className="flex-1 p-[16px] flex flex-col gap-[14px] overflow-y-auto max-h-[440px] min-h-[320px]"
            data-node-id="11:1264"
            data-name="messages"
          >
            {channelMessages.length === 0 ? (
              <p className="font-sans text-[14px] text-[#6c5a61] text-center my-auto">
                No messages yet in {activeChannel}. Say hi first!
              </p>
            ) : (
              channelMessages.map((msg) => (
                <div
                  key={msg.id}
                  className="flex gap-[10px] items-start w-full"
                >
                  {/* Round Avatar */}
                  <div className="size-[36px] rounded-full border-2 border-[#e0506a] overflow-hidden bg-[#ffe1e5] relative shrink-0">
                    <img
                      src="/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png"
                      alt={msg.sender}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Message Bubble */}
                  <div className="flex-1 flex flex-col gap-[2px] items-start min-w-0">
                    <div className="flex items-center gap-[6px] whitespace-nowrap">
                      <span
                        className={`font-sans font-bold text-[14px] tracking-[-0.14px] ${
                          msg.isYou ? "text-[#b51d42]" : "text-[#2b2226]"
                        }`}
                      >
                        {msg.sender}
                      </span>
                      {msg.isStaff && (
                        <span
                          className="bg-[#b51d42] text-white px-[8px] py-[1px] rounded-[2px] font-sans font-bold text-[11px] tracking-[0.88px] uppercase leading-tight"
                          data-name="tag"
                        >
                          STAFF
                        </span>
                      )}
                      <span className="font-sans font-normal text-[12px] text-[#6c5a61] tracking-[-0.12px]">
                        {msg.time}
                      </span>
                    </div>
                    <p className="font-sans font-normal text-[15px] text-[#2b2226] leading-[1.45] tracking-[-0.15px] break-words">
                      {msg.text}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Compose Bar */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-[#f1c9d0] p-[12px] flex items-center gap-[8px] w-full bg-white"
            data-node-id="11:1295"
            data-name="compose"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Say something nice…"
              className="flex-1 border-[1.5px] border-[#f1c9d0] rounded-[4px] px-[12px] py-[10px] text-[14px] text-[#2b2226] placeholder-[#6c5a61] focus:outline-hidden focus:border-[#b51d42]"
              data-node-id="11:1296"
            />
            <button
              type="submit"
              className="bg-[#b51d42] hover:bg-[#961836] text-white px-[18px] py-[10px] rounded-[4px] font-sans font-bold text-[14px] tracking-[-0.14px] transition-colors cursor-pointer shrink-0"
              data-node-id="11:1298"
              data-name="button"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right Column: Ask Focalpoint */}
        <div
          className="lg:w-[300px] p-[16px] flex flex-col gap-[10px] shrink-0 bg-white"
          data-node-id="11:1300"
          data-name="ask focalpoint"
        >
          <span
            className="font-sans font-bold text-[12px] text-[#6c5a61] tracking-[0.96px] uppercase"
            data-node-id="11:1301"
          >
            ASK FOCALPOINT
          </span>
          <p
            className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px] leading-snug"
            data-node-id="11:1302"
          >
            Anonymous questions, answered by the staff.
          </p>

          {/* Ask Input */}
          <form onSubmit={handleAskQuestion} className="flex gap-[8px] w-full pt-1">
            <input
              type="text"
              value={askText}
              onChange={(e) => setAskText(e.target.value)}
              placeholder="Ask anything"
              className="flex-1 border-[1.5px] border-[#f1c9d0] rounded-[4px] px-[12px] py-[10px] text-[14px] text-[#2b2226] placeholder-[#6c5a61] focus:outline-hidden focus:border-[#b51d42] min-w-0"
              data-node-id="11:1304"
            />
            <button
              type="submit"
              className="bg-[#b51d42] hover:bg-[#961836] text-white px-[16px] py-[10px] rounded-[4px] font-sans font-bold text-[14px] tracking-[-0.14px] transition-colors cursor-pointer shrink-0"
              data-node-id="11:1306"
              data-name="button"
            >
              Ask
            </button>
          </form>

          {/* Q&A List */}
          <div className="flex flex-col gap-[2px] w-full pt-2">
            {questions.map((q) => (
              <div
                key={q.id}
                className="border-t border-[#f1c9d0] py-[10px] flex flex-col gap-[4px] w-full"
              >
                <p className="font-sans font-bold text-[14px] text-[#2b2226] leading-[1.35] tracking-[-0.14px]">
                  {q.question}
                </p>
                <p className="font-sans font-normal text-[13.5px] text-[#6c5a61] leading-[1.4] tracking-[-0.135px]">
                  {q.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

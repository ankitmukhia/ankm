"use client";

import { useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { GridTopLayout, GridBottomLayout } from "@/components/grid-layout/grid";

export const AnkitAI = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { messages, input, handleSubmit, handleInputChange } = useChat();

  useEffect(() => {
    if (chatContainerRef.current) {
      const scrollToBottom = () => {
        // scrollHeight: height of current area
        // scrollTo: scrolles to the bottom based on the changing height
        chatContainerRef.current?.scrollTo({
          top: chatContainerRef.current!.scrollHeight,
          behavior: "smooth",
        });
      };

      setTimeout(scrollToBottom, 100);
    }
  }, [messages]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="relative flex flex-col h-[600px] text-sm font-satoshi">
      <div className="absolute right-0 overflow-y-auto bg-blue-500 gradient-circle" />
      {messages.length === 0 && (
        <div className="absolute left-4 max-w-xs top-6 border-body/5 flex-1 bg-green-300/30 overflow-y-auto rounded-xl border p-4">
          <p className="text-sm text-green-300 font-manrope">
            Hi, I am ankit&apos;s AI, ask me anything about him!
          </p>
        </div>
      )}

      <GridTopLayout />

      <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto">
        <div>
          {messages.map((msg) => {
            return (
              <div
                key={msg.id}
                className={`flex mb-4 font-manrope
			    ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`${
                    msg.role === "user"
                      ? "rounded-full border border-body/5 bg-orange-300/30 text-orange-300"
                      : "rounded-full border border-body/5 bg-green-300/30 text-green-300"
                  } max-w-xs rounded-lg px-2.5 py-1.5`}
                >
                  <p>{msg.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <GridTopLayout />

      <form
        className="relative focus-within:outline-1 focus-within:outline-gray-500/50 w-full"
        onSubmit={handleSubmit}
      >
        <input
          ref={inputRef}
          className="w-full h-14 pl-4 outline-none placeholder:font-geist"
          value={input}
          placeholder="ask me anything..."
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-hoverColor/40 flex items-center justify-center"
        >
          <ArrowUpIcon className="w-4 h-4 text-blue-300" />
        </button>
      </form>

      <GridBottomLayout />
    </div>
  );
};

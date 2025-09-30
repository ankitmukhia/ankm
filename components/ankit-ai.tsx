"use client";

import { useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import Linkify from "linkify-react";
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
        <div className="absolute left-4 max-w-xs top-6 border border-body/5 flex-1 overflow-y-auto tracking-wider rounded-tr-2xl rounded-bl-2xl rounded-br-2xl p-4">
          <p className="text-sm font-manrope">
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
                  className={`max-w-xs${
                    msg.role === "user"
                      ? "tracking-wider border border-white/5 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl"
                      : "tracking-wider border border-body/5 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl"
                  } max-w-xs rounded-lg px-2.5 py-1.5`}
                >
                  <Linkify
                    options={{
                      render: ({ attributes, content }) => (
                        <a
                          {...attributes}
                          className="text-[#CAE8BD]/80 hover:text-[#CAE8BD]/90 underline font-medium"
                        >
                          {content}
                        </a>
                      ),
                    }}
                  >
                    {msg.content}
                  </Linkify>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <GridTopLayout />
      {/* focus-within:outline-1 focus-within:outline-gray-500/50 */}

      <form className="relative w-full" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className="w-full h-14 pl-4 outline-none placeholder:font-geist"
          spellCheck={false}
          value={input}
          placeholder="ask me anything... and press enter ↵"
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 cursor-pointer rounded-full bg-hoverColor/40 flex items-center justify-center"
        >
          <ArrowUpIcon className="w-4 h-4 text-blue-300" />
        </button>
      </form>

      <GridBottomLayout />
    </div>
  );
};

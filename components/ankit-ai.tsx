"use client";

import { useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import Linkify from "linkify-react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { preQueries } from "@/lib/constants";

export const AnkitAI = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { messages, input, setInput, handleSubmit, handleInputChange } =
    useChat();

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
    <div className="relative flex flex-col h-[600px] font-geist">
      {/* <div className="absolute right-0 overflow-y-auto bg-blue-500 gradient-circle" /> */}

      <div
        ref={chatContainerRef}
        className="relative flex-1 p-4 overflow-y-auto border-2 border-neutral-800/80 rounded-t-4xl"
      >
        {messages.length === 0 && (
          <div className="absolute inset-4 flex text-center justify-end">
            <div>
              {preQueries.map(({ id, query }) => (
                <div
                  key={id}
                  className="group flex justify-end mb-4"
                  onClick={() => setInput(query)}
                >
                  <div className="max-w-xs px-4 py-2 tracking-wider bg-neutral-800/50 hover:bg-neutral-800/70 rounded-lg rounded-t-3xl rounded-br-3xl cursor-pointer text-neutral-300 group-hover:text-neutral-100 transition-colors duration-300 ease-out">
                    <p>{query}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          {messages.map((msg) => {
            return (
              <div
                key={msg.id}
                className={`flex mb-4
									${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs rounded-lg px-4 py-2 ${
                    msg.role === "user"
                      ? "tracking-wider bg-neutral-800/50 rounded-t-3xl rounded-br-3xl"
                      : "tracking-wider bg-neutral-800 rounded-t-3xl rounded-br-3xl"
                  }`}
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

      {/* focus-within:outline-1 focus-within:outline-gray-500/50 */}

      <form
        className="flex items-center gap-3 border-x-2 p-1 border-b-2 border-neutral-800/80 rounded-b-4xl"
        onSubmit={handleSubmit}
      >
        <input
          ref={inputRef}
          className="w-full pl-5 outline-none placeholder:font-geist"
          spellCheck={false}
          value={input}
          placeholder="ask me anything... and press enter ↵"
          onChange={handleInputChange}
        />

        <div className="h-6 w-[2px] bg-neutral-800/50" />

        <button
          type="submit"
          className="group p-4 cursor-pointer bg-neutral-800/80 rounded-br-3xl"
        >
          <ArrowUpIcon className="size-4 text-neutral-400" />
        </button>
      </form>
    </div>
  );
};

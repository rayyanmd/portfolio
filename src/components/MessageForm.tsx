"use client";

import type React from "react";

import { useState } from "react";
import { createSupabaseClient } from "@/src/lib/supabase";

export function MessageForm() {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) {
      setFeedback({ type: "error", text: "Please enter a message" });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const supabase = createSupabaseClient();

      const { error } = await supabase
        .from("messages")
        .insert([{ content: message }]);

      if (error) {
        setFeedback({
          type: "error",
          text: "Failed to send message. Please try again.",
        });
        console.error("Error submitting message:", error);
      } else {
        setFeedback({ type: "success", text: "Message sent successfully!" });
        setMessage("");
      }
    } catch (error) {
      console.error("Error:", error);
      setFeedback({
        type: "error",
        text: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="retro-card w-full max-w-md mx-auto opacity-0 fade-in fade-in-2">
      <h3 className="text-xl font-bold retro-text mb-4">
        Send Anonymous Message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="retro-input w-full h-32 resize-none"
            disabled={isSubmitting}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="retro-button bg-retro-green text-black hover:bg-retro-green/90 w-full"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {feedback && (
          <div
            className={`p-2 text-center retro-text ${
              feedback.type === "success" ? "text-retro-green" : "text-red-500"
            }`}
          >
            {feedback.text}
          </div>
        )}
      </form>
    </div>
  );
}

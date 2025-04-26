"use client";

import { useState, useEffect } from "react";
import { createSupabaseClient } from "@/src/lib/supabase";

type Message = {
  id: string;
  content: string;
  created_at: string;
  reply: string | null;
  replied_at: string | null;
};

export function AdminMessageList() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [replyText, setReplyText] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState<Record<string, boolean>>({});

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const supabase = createSupabaseClient();

      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      setMessages(data || []);

      // Initialize reply text for messages without replies
      const initialReplyText: Record<string, string> = {};
      data?.forEach((message) => {
        if (message.reply) {
          initialReplyText[message.id] = message.reply;
        } else {
          initialReplyText[message.id] = "";
        }
      });

      setReplyText(initialReplyText);
    } catch (err) {
      console.error("Error fetching messages:", err);
      setError("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  const handleReply = async (id: string) => {
    if (!replyText[id]?.trim()) return;

    setSubmitting((prev) => ({ ...prev, [id]: true }));

    try {
      const response = await fetch("/api/messages", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, reply: replyText[id] }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update reply");
      }

      // Refresh messages
      fetchMessages();
    } catch (err) {
      console.error("Error replying to message:", err);
      setError("Failed to send reply");
    } finally {
      setSubmitting((prev) => ({ ...prev, [id]: false }));
    }
  };

  if (loading) {
    return (
      <div className="text-center p-4 retro-text">Loading messages...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4 retro-text text-red-500">{error}</div>
    );
  }

  if (messages.length === 0) {
    return <div className="text-center p-4 retro-text">No messages yet.</div>;
  }

  return (
    <div className="space-y-6 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold retro-text">
        Messages ({messages.length})
      </h2>
      {messages.map((message) => (
        <div key={message.id} className="retro-card space-y-4">
          <div>
            <div className="flex justify-between items-start">
              <div className="text-xs text-muted-foreground retro-text">
                {new Date(message.created_at).toLocaleString()}
              </div>
              <div
                className={`text-xs px-2 py-1 rounded ${
                  message.reply
                    ? "bg-retro-green/20 text-retro-green"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {message.reply ? "Replied" : "New"}
              </div>
            </div>
            <p className="retro-text text-lg mt-2">{message.content}</p>
          </div>

          <div className="border-t pt-4">
            <label className="block text-sm font-medium retro-text mb-2">
              {message.reply ? "Edit Reply" : "Reply to this message"}
            </label>
            <textarea
              value={replyText[message.id] || ""}
              onChange={(e) =>
                setReplyText((prev) => ({
                  ...prev,
                  [message.id]: e.target.value,
                }))
              }
              className="retro-input w-full h-24 resize-none mb-2"
              placeholder="Type your reply here..."
              disabled={submitting[message.id]}
            />
            <button
              onClick={() => handleReply(message.id)}
              disabled={
                !replyText[message.id]?.trim() || submitting[message.id]
              }
              className="retro-button bg-retro-green text-black hover:bg-retro-green/90"
            >
              {submitting[message.id]
                ? "Sending..."
                : message.reply
                ? "Update Reply"
                : "Send Reply"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

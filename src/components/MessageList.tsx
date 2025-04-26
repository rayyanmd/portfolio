"use client";

import { useEffect, useState } from "react";
import { createSupabaseClient } from "@/src/lib/supabase";

type Message = {
  id: string;
  content: string;
  created_at: string;
  reply?: string | null;
  replied_at?: string | null;
};

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const supabase = createSupabaseClient();

        const { data, error } = await supabase
          .from("messages")
          .select("*")
          .not("reply", "is", null)
          .order("created_at", { ascending: false })
          .limit(10);

        if (error) {
          throw error;
        }

        setMessages(data || []);
      } catch (err) {
        console.error("Error fetching messages:", err);
        setError("Failed to load messages");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

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
    return (
      <div className="text-center p-4 retro-text">
        No messages with replies yet.
      </div>
    );
  }

  return (
    <div className="space-y-4 w-full max-w-md mx-auto opacity-0 fade-in fade-in-3">
      <h3 className="text-xl font-bold retro-text mb-4">Recent Messages</h3>
      <div className="h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-retro-green scrollbar-track-transparent pr-2 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="retro-card space-y-3">
            <div className="p-3 bg-muted/50 rounded">
              <p className="retro-text">{message.content}</p>
              <div className="text-xs text-muted-foreground mt-1 retro-text">
                {new Date(message.created_at).toLocaleDateString()}
              </div>
            </div>
            {message.reply && (
              <div className="p-3 bg-retro-green/10 rounded">
                <p className="retro-text">{message.reply}</p>
                <div className="text-xs text-muted-foreground mt-1 retro-text">
                  Reply:{" "}
                  {message.replied_at
                    ? new Date(message.replied_at).toLocaleDateString()
                    : "N/A"}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

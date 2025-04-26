"use client";
import { useEffect } from "react";

export default function Donate({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const handleMessage = (e: MessageEvent) => {
    if (e.data.type == "embed.modalClosed") setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  });

  return (
    <>
      {open && (
        <div className="block fixed top-0 left-0 w-full h-full z-50">
          <iframe
            src="https://trakteer.id/raayyan/tip/embed/modal"
            className="w-full h-full border-none"
          ></iframe>
        </div>
      )}
    </>
  );
}

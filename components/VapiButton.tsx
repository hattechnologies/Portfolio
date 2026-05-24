"use client";

import { useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";
import { Phone, PhoneOff, Loader2 } from "lucide-react";

interface VapiButtonProps {
  variant?: "floating" | "inline";
  label?: string;
  className?: string;
}

export default function VapiButton({
  variant = "floating",
  label = "Talk to AI assistant",
  className = "",
}: VapiButtonProps) {
  const vapiRef = useRef<Vapi | null>(null);
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [showTip, setShowTip] = useState(true);

  useEffect(() => {
    const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY!);
    vapiRef.current = vapi;

    vapi.on("call-start", () => { setConnected(true); setConnecting(false); });
    vapi.on("call-end", () => { setConnected(false); setConnecting(false); });

    const timer = setTimeout(() => setShowTip(false), 4000);
    return () => { clearTimeout(timer); vapi.stop(); vapiRef.current = null; };
  }, []);

  const start = async () => {
    try {
      setConnecting(true);
      await vapiRef.current?.start("87e91265-ca9d-42ec-838a-6508d79b5ef7");
    } catch {
      setConnecting(false);
    }
  };

  const stop = () => {
    vapiRef.current?.stop();
    setConnected(false);
    setConnecting(false);
  };

  const isActive = connected || connecting;

  /* ─── Inline variant ─── */
  if (variant === "inline") {
    return (
      <button
        onClick={isActive ? stop : start}
        aria-label={connecting ? "Connecting…" : connected ? "End call" : label}
        className={[
          "inline-flex items-center gap-2 px-4 py-[9px] rounded-[6px] text-[13px] font-medium tracking-[0.01em] cursor-pointer select-none outline-none transition-all duration-[120ms] ease-out border",
          connected
            ? "border-red-300/60 bg-red-50 text-red-600 dark:border-red-800/60 dark:bg-red-950/40 dark:text-red-400"
            : "border-neutral-900 bg-neutral-950 text-white hover:bg-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-900",
          "active:scale-[0.98]",
          className,
        ].join(" ")}
      >
        {connecting ? (
          <Loader2
            size={14}
            className="animate-spin text-neutral-400 dark:text-neutral-500"
          />
        ) : connected ? (
          <PhoneOff size={14} className="text-red-500 dark:text-red-400" />
        ) : (
          <Phone size={14} className="text-white/80 dark:text-neutral-300" />
        )}
        <span className={connecting ? "text-neutral-400 dark:text-neutral-500" : ""}>
          {connecting ? "Connecting" : connected ? "End call" : label}
        </span>
      </button>
    );
  }

  /* ─── Floating FAB variant ─── */
  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 ${className}`}>

      {/* Tooltip */}
      <p
        className={[
          "text-[12px] text-neutral-400 dark:text-neutral-500 bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-700/80 rounded-[6px] px-2.5 py-1 leading-none transition-opacity duration-300 select-none",
          showTip ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        Talk to our agent
      </p>

      {/* Button */}
      <button
        onClick={isActive ? stop : start}
        aria-label={connecting ? "Connecting…" : connected ? "End call" : "Start call"}
        className={[
          "relative w-11 h-11 rounded-full border flex items-center justify-center outline-none transition-all duration-[120ms] ease-out cursor-pointer",
          "hover:scale-[1.04] active:scale-[0.97]",
          connected
            ? "border-red-300/60 bg-red-50 dark:border-red-800/60 dark:bg-red-950/40"
            : "border-neutral-900 bg-black dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-900",
        ].join(" ")}
      >
        {/* Recording indicator */}
        {connected && !connecting && (
          <span className="absolute top-[9px] right-[9px] w-[5px] h-[5px] rounded-full bg-red-500 dark:bg-red-400 animate-[blink_1.4s_ease-in-out_infinite]" />
        )}

        {connecting && (
          <Loader2 size={15} className="animate-spin text-neutral-400 dark:text-neutral-500" />
        )}
        {connected && !connecting && (
          <PhoneOff size={15} className="text-red-500 dark:text-red-400" />
        )}
        {!connected && !connecting && (
          <Phone size={15} className="text-white dark:text-neutral-200" />
        )}
      </button>
    </div>
  );
}
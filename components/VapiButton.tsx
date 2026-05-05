"use client";

import { useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";
import { Phone, PhoneOff, Loader2 } from "lucide-react";
import { ShimmerButton } from "./ui/shimmer-button";

export default function VapiFloatingButton() {
  const vapiRef = useRef<Vapi | null>(null);

  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [showTip, setShowTip] = useState(true);

  useEffect(() => {
    const key = "73c44959-d84a-443e-a5f9-3ae45d9e09f6";
    const vapi = new Vapi(key);
    vapiRef.current = vapi;

    vapi.on("call-start", () => {
      setConnected(true);
      setConnecting(false);
    });

    vapi.on("call-end", () => {
      setConnected(false);
      setConnecting(false);
    });

    const timer = setTimeout(() => {
      setShowTip(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      vapi.stop();
      vapiRef.current = null;
    };
  }, []);

  const start = async () => {
    try {
      setConnecting(true);

      await vapiRef.current?.start(
        "87e91265-ca9d-42ec-838a-6508d79b5ef7"
      );
    } catch (err) {
      setConnecting(false);
    }
  };

  const stop = () => {
    vapiRef.current?.stop();
    setConnected(false);
    setConnecting(false);
  };

  const isActive = connected || connecting;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">

      {/* Tooltip */}
      {showTip && (
        <div className="mb-3 px-3 py-1 text-xs text-white bg-black/80 rounded-md shadow-md">
          Talk to our agent
        </div>
      )}
      <ShimmerButton
        onClick={isActive ? stop : start}
        className={`
          flex items-center justify-center
          w-14 h-14 rounded-full
          shadow-lg transition-all duration-300
          text-white
          ${connected
            ? "bg-red-500 hover:bg-red-600"
            : "bg-amber-500 hover:bg-amber-600"}
        `}
      >
        {connecting && (
          <Loader2 size={22} className="animate-spin text-amber-500" />
        )}
        {connected && !connecting && (
          <PhoneOff size={22} className="text-red-500" />
        )}
        {!connected && !connecting && (
          <Phone size={22} className="text-amber-500" />
        )}
      </ShimmerButton>
    </div>
  );
}
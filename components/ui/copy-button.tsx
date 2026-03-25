"use client";

import { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className={`btn btn-outline group font-mono text-xs ${className}`}
      title="Copy to clipboard"
    >
      <span className="truncate max-w-[180px] sm:max-w-[280px]">{text}</span>
      {copied ? (
        <Check className="w-3.5 h-3.5 shrink-0 text-accent" />
      ) : (
        <Copy className="w-3.5 h-3.5 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
      )}
    </button>
  );
}

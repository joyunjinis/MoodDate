"use client";

import { useMemo, useRef } from "react";
import { Input } from "@/components/ui/input";

type Props = {
  length?: number;
  value: string;
  onChange: (value: string) => void;
};

export default function OtpInput({ length = 6, value, onChange }: Props) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const values = useMemo(() => {
    return Array.from({ length }, (_, i) => value?.[i] ?? "");
  }, [value, length]);

  const focusIndex = (idx: number) => {
    inputsRef.current[idx]?.focus();
  };

  const sanitize = (v: string) => v.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();

  const handleChange = (idx: number, val: string) => {
    const cleaned = sanitize(val);

    const next = values.slice();
    if (cleaned === "") {
      next[idx] = "";
      onChange(next.join(""));
      return;

      next[idx] = cleaned[0];
      onChange(next.join(""));
    }
    if (idx < length - 1) focusIndex(idx + 1);
  };

  const handleKeyDown = (
    idx: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace") {
      if (!values[idx] && idx > 0) {
        e.preventDefault();
        focusIndex(idx - 1);
      }
    }
  };

  return (
    <div className="flex gap-2 mt-4">
      {values.map((digit, idx) => (
        <Input
          key={idx}
          ref={(el) => {
            inputsRef.current[idx] = el;
          }}
          value={digit}
          maxLength={1}
          onChange={(e) => handleChange(idx, e.target.value)}
          onKeyDown={(e) => handleKeyDown(idx, e)}
          className="
            h-12 w-12 rounded-xl text-center text-[20px] font-bold
            border-[#7A5CFF] hover:border-[#FF6B81]
            focus-visible:ring-[#7A5CFF]
          "
        />
      ))}
    </div>
  );
}

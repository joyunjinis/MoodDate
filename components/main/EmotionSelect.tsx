"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const EMOTIONS = [
  { id: "happy", emoji: "😊", label: "행복" },
  { id: "sad", emoji: "😭", label: "슬픔" },
  { id: "angry", emoji: "🤬", label: "화남" },
  { id: "sick", emoji: "😷", label: "아픔" },
  { id: "tired", emoji: "😪", label: "피곤함" },
  { id: "depressed", emoji: "😔", label: "우울함" },
];

export default function EmotionSelect() {
  const [selected, setSelelcted] = useState<string | null>(null);
  return (
    <div className="grid grid-cols-3 gap-3">
      {EMOTIONS.map((emotion) => (
        <Button
          key={emotion.id}
          onClick={() => setSelelcted(emotion.id)}
          className={cn(
            "text-[#2D2D2D] space-x-0.5 px-2 bg-[#7A5CFF] hover:bg-[#FF6B81]",

            selected === emotion.id
              ? "border-2 border-[#F3F0FF] scale-120"
              : "border-transparent bg-gray-100",
          )}
        >
          <span>{emotion.emoji}</span>
          <span>{emotion.label}</span>
        </Button>
      ))}
    </div>
  );
}

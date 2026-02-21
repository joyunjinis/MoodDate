"use client";

import Emotion from "@/components/main/Emotion";

export default function MainPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2>
        {new Date().toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        })}
      </h2>
      <Emotion />
    </div>
  );
}

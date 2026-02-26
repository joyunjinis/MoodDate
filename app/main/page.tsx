"use client";

import EmotionSelect from "@/components/main/EmotionSelect";
import EmotionBox from "@/components/main/EmotionBox";

export default function MainPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl text-[#8B8B8B] font-bold">
        {new Date().toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        })}
      </h1>
      <p className="text-[#2D2D2D] font-bold text-[21px] mt-1">
        서로의 감정을 공유해보아요
      </p>
      <EmotionBox>
        <EmotionSelect />
      </EmotionBox>
    </div>
  );
}

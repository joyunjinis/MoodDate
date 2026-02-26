"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";

type Props = {
  children: ReactNode;
};

export default function EmotionBox({ children }: Props) {
  const handleShareEmotion = () => {
    toast.success("감정 공유가 완료되었어요!");
  };

  return (
    <div className="flex gap-18 mt-4">
      {/* 남자 카드 */}
      <Card className="w-80 h-90 mt-3 flex items-center justify-center">
        <CardHeader className="text-4xl text-center mt-11 flex justify-center">
          💙
        </CardHeader>
        <CardContent className="mt-10">{children}</CardContent>
        <Button
          className="w-60 bg-[#7A5CFF] hover:bg-[#6C8CFF]"
          onClick={handleShareEmotion}
        >
          감정 공유하기
        </Button>
      </Card>

      {/* 여자 카드 */}
      <Card className="w-80 h-90 mt-3 flex items-center justify-center">
        <CardHeader className="text-4xl text-center mt-11 flex justify-center">
          💗
        </CardHeader>
        <CardContent className="mt-10">{children}</CardContent>
        <Button
          className="w-60 bg-[#7A5CFF] hover:bg-[#FF8FA3]"
          onClick={handleShareEmotion}
        >
          감정 공유하기
        </Button>
      </Card>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Connect() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1
          className="
            text-[64px] 
            font-extrabold 
            bg-linear-to-r 
            from-[#FF6B81] 
            to-[#7A5CFF] 
            bg-clip-text 
            text-transparent
            leading-tight
          "
        >
          MoodDate
        </h1>
        <p
          className="
            text-[#2D2D2D] 
            font-bold 
            text-[30px] 
            mt-0
            leading-relaxed
          "
        >
          서로를 연결해볼까요?
        </p>
      </div>
      <div className="mt-5 w-110 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <p className="text-[#2D2D2D] font-bold text-[23px]">
          연결 방법을 선택해주세요
        </p>
        <div className="text-[19px] text-[#2D2D2D] text-center">
          <p>내가 먼저 가입했나요? </p>
          <p>내 코드를 만들고 상대에게 공유해요</p>
        </div>
        <Button
          className="text-[#FAFAFA] text-[15px] font-bold  hover:bg-[#FF6B81] bg-[#7A5CFF] mt-2 w-80"
          onClick={() => router.push("/connect/create")}
        >
          내 코드 생성하기
        </Button>

        <Button
          className="text-[#FAFAFA] text-[15px] font-bold  hover:bg-[#FF6B81] bg-[#7A5CFF] mt-2 w-80"
          onClick={() => router.push("/connect/join")}
        >
          상대 코드 입력하기
        </Button>
      </div>
    </div>
  );
}

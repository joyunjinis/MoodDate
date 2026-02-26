"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import OtpInput from "@/components/ui/OtpInput";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Join() {
  const router = useRouter();
  const [code, setCode] = useState("");

  const handleJoin = () => {
    const myCode = localStorage.getItem("myCode");

    if (code === myCode) {
      toast.success("커플 연결 완료되었습니다!");
      router.push("/main");
    } else {
      toast.error("코드가 올바르지 않습니다.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mt-5 w-110 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <p className="text-[#2D2D2D] font-bold text-[23px]">코드 생성하기</p>
        <p className="text-[19px] text-[#2D2D2D] text-center">
          상대 코드를 입력하면 커플 연결이 되요!
        </p>
        <OtpInput value={code} onChange={setCode} />
        <Button
          className="text-[#FAFAFA] text-[15px] font-bold  hover:bg-[#FF6B81] bg-[#7A5CFF] mt-2 w-80"
          onClick={handleJoin}
        >
          MoodDate와 시작해볼까요?
        </Button>
      </div>
    </div>
  );
}

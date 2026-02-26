"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { generateInviteCode } from "@/lib/generateCode";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Create() {
  const router = useRouter();
  const [myCode, setMyCode] = useState("");

  const handleCreateCode = () => {
    const newCode = generateInviteCode();
    setMyCode(newCode);
    localStorage.setItem("mycode", myCode);
    toast.success("초대코드가 생성되었습니다.");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mt-5 w-110 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <p className="text-[#2D2D2D] font-bold text-[23px]">코드 생성하기</p>
        <div className="text-[19px] text-[#2D2D2D] text-center">
          <p>코드를 생성해서</p>
          <p>상대에게 공유하면 커플 연결이 되요!</p>
        </div>
        {myCode && (
          <div className="w-80 mt-4 rounded-xl bg-white/60 border border-[#7A5CFF]/30 px-4 py-3">
            <p className="text-[13px] text-[#8B8B8B] font-semibold">
              내 초대코드
            </p>
            <div className="flex items-center justify-between">
              <p className="text-[20px] font-extrabold tracking-[0.35em] text-[#2D2D2D]">
                {myCode}
              </p>
            </div>
          </div>
        )}

        <Button
          className="text-[#FAFAFA] text-[15px] font-bold  hover:bg-[#FF6B81] bg-[#7A5CFF] mt-2 w-80"
          onClick={handleCreateCode}
        >
          코드 생성하기
        </Button>
        <Button
          className="text-[#FAFAFA] text-[15px] font-bold  hover:bg-[#FF6B81] bg-[#7A5CFF] mt-1 w-80"
          onClick={() => router.push("/connect/anniversary")}
        >
          기념일 설정하러 가기
        </Button>
      </div>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import DateSelectPage from "@/components/main/DateSelect";

export default function AnniversaryInput() {
  const router = useRouter();
  const [anniversary, setAnniversary] = useState<Date | undefined>(undefined);
  const [myBirthday, setMyBirthday] = useState<Date | undefined>(undefined);
  const [partnerBirthday, setPartnerBirthday] = useState<Date | undefined>(
    undefined,
  );

  const handleSave = () => {
    if (anniversary) {
      localStorage.setItem("anniversary", anniversary.toISOString());
      localStorage.setItem("myBirthday", myBirthday?.toISOString() ?? "");
      localStorage.setItem(
        "partnerBirthday",
        partnerBirthday?.toISOString() ?? "",
      );
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mt-5 w-110 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <p className="text-[#2D2D2D] font-bold text-[23px]">
          우리의 기념일을 설정해요
        </p>
        <div className="w-full text-left mt-3">
          <p className="text-[#2D2D2D] font-bold text-[16px]">
            💘 우리의 시작일
          </p>
          <DateSelectPage date={anniversary} onSelect={setAnniversary} />
          <p className="text-[#2D2D2D] font-bold text-[16px] mt-2">
            🎂 나의 생일
          </p>
          <DateSelectPage date={myBirthday} onSelect={setMyBirthday} />
          <p className="text-[#2D2D2D] font-bold text-[16px] mt-2 ">
            🎂 상대의 생일
          </p>
          <DateSelectPage
            date={partnerBirthday}
            onSelect={setPartnerBirthday}
          />
          <Button
            className="text-[#FAFAFA] text-[15px] font-bold  hover:bg-[#FF6B81] bg-[#7A5CFF] mt-2 w-full"
            onClick={() => {
              handleSave();
              router.push("/main");
            }}
          >
            MoodDate와 시작해볼까요?
          </Button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

import { useState } from "react";

export default function DateSelectPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="mt-1 text-center">
      <h1 className="font-bold text-[#2D2D2D] text-2xl">❤️ 데이트 플랜 ❤️</h1>
      <div className="mt-1">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-40">
              {date ? date.toLocaleDateString("ko-KR") : "날짜 선택"}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

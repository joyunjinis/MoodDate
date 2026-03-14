"use client";

import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

interface Props {
  date: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}

export default function DateSelectPage({ date, onSelect }: Props) {
  return (
    <div className="mt-1">
      <div className="mt-1">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-40">
              {date ? date.toLocaleDateString("ko-KR") : "날짜 선택"}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={onSelect}
              captionLayout="dropdown"
              fromYear={1900}
              toYear={2030}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "sonner";

type PlanItem = {
  id: string;
  place: string;
  time: string;
  memo: string;
};

interface Props {
  onAdd: (item: PlanItem) => void;
}

export default function AddPlacePage({ onAdd }: Props) {
  const [place, setPlace] = useState("");
  const [time, setTime] = useState("");
  const [memo, setMemo] = useState("");

  const handleSave = () => {
    if (!place) return toast.error("장소를 입력하세요");
    if (!time) return toast.error("시간을 입력하세요");

    onAdd({
      id: Date.now().toString(),
      place,
      time,
      memo,
    });

    setPlace("");
    setTime("");
    setMemo("");
    toast.success("추가되었습니다!");
  };

  return (
    <div className="w-80 flex flex-col gap-3 mx-auto">
      <Input
        type="text"
        value={place}
        placeholder="장소를 입력하세요."
        onChange={(e) => setPlace(e.target.value)}
      />
      <Input
        type="text"
        value={time}
        placeholder="시간을 입력하세요."
        onChange={(e) => setTime(e.target.value)}
      />
      <Input
        type="text"
        value={memo}
        placeholder="메모를 입력하세요."
        onChange={(e) => setMemo(e.target.value)}
      />

      <Button
        onClick={handleSave}
        className="w-80 bg-[#7A5CFF] hover:bg-[#FF6B81] text-white  py-4"
      >
        추가하기
      </Button>
    </div>
  );
}

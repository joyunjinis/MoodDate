"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";

type PlanItem = {
  id: string;
  place: string;
  time: string;
  memo: string;
};

interface Props {
  items: PlanItem[];
  onDelete: (id: string) => void;
  onMove: (index: number, direction: "up" | "down") => void;
}

export default function CardListPage({ items, onDelete, onMove }: Props) {
  return (
    <div>
      {items.map((item, index) => (
        <Card key={item.id} className="bg-[#DCDCDC]/20 border-none">
          <CardContent className="p-2 flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <p className="font-semibold">📍 {item.place}</p>
              <p className="text-[#8B8B8B]">⏱️ {item.time}</p>
              {item.memo && <p className="tex-[#8B8B8B]">📝 {item.memo}</p>}
            </div>
            <div className="flex flex-col gap-2 items-end">
              <Button
                onClick={() => onDelete(item.id)}
                className="px-3 py-1 bg-red-100 text-red-500 hover:bg-red-200 l h-auto"
              >
                삭제
              </Button>
              <div className="flex gap-1">
                <Button
                  onClick={() => onMove(index, "up")}
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-500 hover:bg-gray-200"
                >
                  ↑
                </Button>
                <Button
                  onClick={() => onMove(index, "down")}
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-500 hover:bg-gray-200"
                >
                  ↓
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

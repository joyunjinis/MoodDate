"use client";

import DateSelectPage from "../planner/DateSelect";
import AddPlacePage from "../planner/AddPlace";
import { useEffect, useState } from "react";
import CardListPage from "../planner/CardList";

type PlanItem = {
  id: string;
  place: string;
  time: string;
  memo: string;
};

interface Props {
  currentDate?: Date;
}

export default function PlannerPage({ currentDate }: Props) {
  const [items, setItems] = useState<PlanItem[]>([]);

  // 불러오기
  useEffect(() => {
    const saved = localStorage.getItem("plans");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  // 저장
  useEffect(() => {
    localStorage.setItem("plans", JSON.stringify(items));
  }, [items]);

  const handleAdd = (item: PlanItem) => {
    setItems([...items, item]);
  };

  const handleDelete = (targerId: string) => {
    setItems(items.filter((item) => item.id != targerId));
  };

  const handleMove = (index: number, direction: "up" | "down") => {
    const newItems = [...items];
    const target = direction === "up" ? index - 1 : index + 1;
    if (target < 0 || target >= newItems.length) return;
    const temp = newItems[index];
    newItems[index] = newItems[target];
    newItems[target] = temp;
    setItems(newItems);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-4 mt-30 w-110 ml-20">
      <DateSelectPage />
      <hr className="mt-1" />

      <AddPlacePage onAdd={handleAdd} />
      <hr className="mt-3" />

      <CardListPage items={items} onDelete={handleDelete} onMove={handleMove} />
    </div>
  );
}

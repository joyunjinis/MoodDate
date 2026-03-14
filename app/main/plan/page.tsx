"use client";
import PlannerPage from "@/components/main/Plan";
import dynamic from "next/dynamic";

const KakaoMaps = dynamic(() => import("@/components/main/Map"), {
  ssr: false,
});

export default function PlanPage() {
  return (
    <div className="flex w-full h-screen p-4 gap-0 ">
      {/* 왼쪽 지도 */}
      <div className="w-[55%] h-full pl-15 mt-30">
        <KakaoMaps address="서울특별시 중구 세종대로 110" />
      </div>

      {/* 오른쪽 플래너 */}
      <div className="w-[45%] h-full overflow-y-auto">
        <PlannerPage />
      </div>
    </div>
  );
}

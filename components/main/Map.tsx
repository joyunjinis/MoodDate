"use client";
import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

// 카테고리 설정
const CATEGORIES: { lable: string; code: string }[] = [
  { lable: "음식점", code: "FD6" },
  { lable: "카페", code: "CE7" },
  { lable: "관광명소", code: "AT4" },
  { lable: "숙박", code: "AD5" },
  { lable: "문화시설", code: "CT1" },
  { lable: "편의점", code: "CS2" },
  { lable: "주차장", code: "PK6" },
  { lable: "병원", code: "HP8" },
  { lable: "약국", code: "PM9" },
];

export default function KakaoMaps({ address }: { address: string }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const markersRef = useRef<any[]>([]);

  // 마커 제거
  const clearMakers = () => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  };

  // 지도 초기화
  useEffect(() => {
    const loadMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        setTimeout(loadMap, 300);
        return;
      }
      window.kakao.maps.load(() => {
        const container = mapRef.current;
        if (!container) return;
        mapInstance.current = new window.kakao.maps.Map(container, {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        });

        const zoomControl = new window.kakao.maps.ZoomControl();
        mapInstance.current.addControl(
          zoomControl,
          window.kakao.maps.ControlPosition.RIGHT,
        );
      });
    };
    loadMap();
  }, []);

  // 키워드 검색
  const handleSearch = () => {
    if (!query || !mapInstance.current) return;
    const ps = new window.kakao.maps.services.Places();
    clearMakers();
    ps.keywordSearch(query, (data: any, status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const bounds = new window.kakao.maps.LatLngBounds();
        data.forEach((place: any) => {
          const coords = new window.kakao.maps.LatLng(place.y, place.x);
          const marker = new window.kakao.maps.Marker({
            map: mapInstance.current,
            position: coords,
          });

          const infowindow = new window.kakao.maps.InfoWindow({
            content: `<div style="padding:4px 8px; font-size:12px; white-space:nowrap;">${place.place_name}</div>`,
          });

          window.kakao.maps.event.addListener(marker, "click", () => {
            infowindow.open(mapInstance.current, marker);
          });
          markersRef.current.push(marker);
          bounds.extend(coords);
        });
        mapInstance.current.setBounds(bounds);
      }
    });
  };

  // 카테고리 검색
  const handleCategory = (code: string) => {
    if (!mapInstance.current) return;
    setSelectedCategory(code);
    const ps = new window.kakao.maps.services.Places();
    clearMakers();

    const center = mapInstance.current.getCenter();

    ps.categorySearch(
      code as any,
      (data: any, status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const bounds = new window.kakao.maps.LatLngBounds();
          data.forEach((place: any) => {
            const coords = new window.kakao.maps.LatLng(place.y, place.x);
            const marker = new window.kakao.maps.Marker({
              map: mapInstance.current,
              position: coords,
            });

            const infowindow = new window.kakao.maps.InfoWindow({
              content: `<div style="padding:4px 8px; font-size:12px; white-space:nowrap;">${place.place_name}</div>`,
            });

            window.kakao.maps.event.addListener(marker, "click", () => {
              infowindow.open(mapInstance.current, marker);
            });
            markersRef.current.push(marker);
            bounds.extend(coords);
          });
          mapInstance.current.setBounds(bounds);
        }
      },
      {
        location: center,
        radius: 5000,
      },
    );
  };

  return (
    <div className="flex flex-col w-180 h-200 gap-1">
      {/* 검색바 */}
      <div className="flex gap-2">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="장소를 입력하세요."
          className="flex-1 px-4 py-2 rounded-full border-2 border-[#FF6B81] outline-none bg-white/80"
        />
        <Button
          onClick={handleSearch}
          className="px-4 py-2 bg-[#7A5CFF] text-[#FAFAFA] rounded-full hover:bg-[#FF6B81] font-bold"
        >
          검색
        </Button>
      </div>
      {/* 카테고리 + 지도 가로 배치 */}
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat.code}
              onClick={() => handleCategory(cat.code)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === cat.code
                  ? "bg-[#7A5CFF] hover:bg-[#FF6B81] text-white font-bold"
                  : "bg-white/80 text-gray-600 border-2 border-[#FF6B81] hover:bg-[#FF6B81] font-bold"
              }`}
            >
              {cat.lable}
            </Button>
          ))}
        </div>
        <div className="rounded-2xl overflow-hidden flex-1 border-4 border-[#7A5CFF]">
          <div ref={mapRef} style={{ width: "100%", height: "540px" }} />
        </div>
      </div>
    </div>
  );
}

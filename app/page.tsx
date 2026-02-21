"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    router.push("/signup");
  };

  const handleLogIn = () => {
    if (!email) {
      return toast.error("이메일을 입력하세요");
    }
    if (!password) {
      return toast.error("비밀번호를 입력하세요");
    } else {
      toast.success("MoodMate에 오신걸 환영합니다");
      setTimeout(() => router.push("/connect"), 1500);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        {/* 메인 타이틀 */}
        <h1
          className="
            text-[64px] 
            font-extrabold 
            bg-linear-to-r 
            from-[#FF6B81] 
            to-[#7A5CFF] 
            bg-clip-text 
            text-transparent
            leading-tight
          "
        >
          MoodDate
        </h1>

        {/* 서브 타이틀 */}
        <p
          className="
            text-[#8B8B8B] 
            font-bold 
            text-[30px] 
            mt-0
            leading-relaxed
          "
        >
          오늘의 기분으로 만드는 우리의 데이트
        </p>
      </div>

      <div className="mt-5 w-[420px] bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <p className="text-[#2D2D2D] font-bold text-[23px]">
          오늘의 하루를 시작해볼까요?
        </p>
        <div className="text-[19px] text-[#2D2D2D] text-center">
          <p>오늘의 기분을 공유하고,</p>
          <p>데이트 코스를 함께 계확해보세요</p>
        </div>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="이메일을 입력하세요"
          className="w-75 border-[#7A5CFF] hover:border-[#FF6B81] mt-2"
        />
        <div className="relative w-75 mt-1">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호를 입력하세요"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleLogIn();
              }
            }}
            className="w-75 border-[#7A5CFF] hover:border-[#FF6B81]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <Button
          className="mt-2 bg-[#7A5CFF] w-75 hover:bg-[#FF6B81]"
          onClick={handleLogIn}
        >
          로그인
        </Button>
        <Button
          className="mt-2 bg-[#7A5CFF] w-75 mt-1 hover:bg-[#FF6B81]"
          onClick={handleSignUp}
        >
          회원가입
        </Button>
      </div>
    </div>
  );
}

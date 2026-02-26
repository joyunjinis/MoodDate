"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignUp() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [gender, setGender] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleSignUp = () => {
    if (!name) {
      return toast.error("닉네임을 입력해주세요");
    }
    if (!email) {
      return toast.error("이메일을 입력해주세요");
    }
    if (!password || !passwordConfirm) {
      return toast.error("비밀번호를 입력해주세요");
    }
    if (password !== passwordConfirm) {
      return toast.error("비밀번호가 일치하지 읺습니다");
    }
    if (!gender) {
      return toast.error("성별을 선택해주세요");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("gender", gender);
      toast.success("회원가입이 완료되었습니다");
      setTimeout(() => router.push("/"), 1500);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mt-5 w-110 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <p className="text-[#2D2D2D] font-bold text-[23px]">
          오늘의 하루를 시작해볼까요?
        </p>
        <div className="text-[19px] text-[#2D2D2D] text-center">
          <p>MoodDate 계정을 만들고</p>
          <p>오늘의 기분을 함께 기록해보세요</p>
        </div>
        <div className="mt-2 w-75">
          <p className="text-[#2D2D2D] text-left">성별을 선택해주세요</p>

          <RadioGroup
            value={gender}
            onValueChange={(value) => setGender(value)}
            className="flex gap-8"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="male"
                id="male"
                className="
                border-[#4F8CFF]
                "
              />
              <span className="font-semibold text-[#2D2D2D]">남자</span>
              <RadioGroupItem
                value="female"
                id="female"
                className="
                border-[#FF6B81]
                "
              />
              <span className="font-semibold text-[#2D2D2D]">여자</span>
            </div>
          </RadioGroup>
        </div>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="닉네임을 입력하세요"
          className="w-75 border-[#7A5CFF] hover:border-[#FF6B81] mt-2"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="이메일을 입력하세요"
          className="w-75 border-[#7A5CFF] hover:border-[#FF6B81] mt-1.5"
        />
        <div className="relative w-75 mt-1.5">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호를 입력하세요"
            className="w-75 pr-10 border-[#7A5CFF] hover:border-[#FF6B81]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* 비밀번호 확인 */}
        <div className="relative w-75 mt-1.5">
          <Input
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type={showPasswordConfirm ? "text" : "password"}
            placeholder="비밀번호를 다시한번 입력하세요"
            className="w-75 pr-10 border-[#7A5CFF] hover:border-[#FF6B81]"
          />
          <button
            type="button"
            onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPasswordConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <Button
          className="mt-2 bg-[#7A5CFF] w-75 hover:bg-[#FF6B81]"
          onClick={handleSignUp}
        >
          회원가입하기
        </Button>
        <div className="mt-2 w-75">
          <span className="text-left text-[#8B8B8B] text-[15px]">
            이미 회원이신가요?
            <Link
              href="/"
              className="ml-29 text-[#7A5CFF] text-[15px] font-bold hover:underline hover:text-[#FF6B81]"
            >
              로그인하기
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("settings")) {
      router.push("/settings");
    }
  }, []);

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">音声認識タイピングゲーム</h1>
      <Button onClick={() => router.push("/game")}>ゲームスタート</Button>
      <Button onClick={() => router.push("/ranking")}>ランキング</Button>
      <Button onClick={() => router.push("/settings")}>設定</Button>
      <a
        href="https://github.com/ryo08271154/koetyping"
        target="_blank"
        className="mt-4 text-blue-500 hover:underline"
      >
        GitHub
      </a>
    </div>
  );
}

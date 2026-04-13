import { useRouter } from "next/navigation";
import { Sentence } from "../lib/sentences";
import Button from "./Button";

export default function Result({
  sentences,
  score,
}: {
  sentences: Sentence[];
  score: number;
}) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4">結果</h2>
      <p className="text-2xl mb-8">スコア: {score}</p>
      <Button onClick={() => router.back()}>もう一度プレイ</Button>
    </div>
  );
}

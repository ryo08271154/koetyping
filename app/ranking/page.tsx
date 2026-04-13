"use client";
import BackButton from "@/components/BackButton";
import { useEffect, useState } from "react";

type Score = {
  id: number;
  score: number;
  createdAt: string;
  updatedAt: string;
};
export default function Page() {
  const [scores, setScores] = useState<Score[]>([]);

  const getScores = async (): Promise<Score[]> => {
    const res = await fetch("/api/score");
    if (!res.ok) {
      throw new Error("Failed to fetch scores");
    }
    const data = await res.json();
    return data.scores;
  };
  useEffect(() => {
    (async () => {
      setScores(await getScores());
    })();
  }, []);
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold mb-4">ランキング</h2>
      <div className="">
        <table
          className="w-full max-w-md rounded-lg text-center
      "
        >
          <tbody>
            <tr>
              <th>順位</th>
              <th>スコア</th>
              <th>日時</th>
            </tr>
            {scores.map((score, index) => (
              <tr key={score.id}>
                <td>{index + 1}位</td>
                <td>{score.score}</td>
                <td>{new Date(score.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <BackButton />
    </div>
  );
}

"use client";
import { useState } from "react";
import Result from "../../components/Result";
import Game from "../../components/Game";
import { Sentence } from "../../lib/sentences";

export default function Page() {
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [sentences, setSentences] = useState<Sentence[]>([]);

  async function submitScore(sentences: Sentence[], score: number) {
    const res = await fetch("/api/score", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sentences: sentences, score: score }),
    });
    if (!res.ok) {
      throw new Error("Failed to submit score");
    }
    console.log(await res.json());
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      {isFinished ? (
        <Result sentences={sentences} score={score} />
      ) : (
        <Game
          onFinish={(sentences, score) => {
            setScore(score);
            setSentences(sentences);
            setIsFinished(true);
            submitScore(sentences, score);
          }}
        />
      )}
    </div>
  );
}

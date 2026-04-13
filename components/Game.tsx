import { useEffect, useState } from "react";
import { checkMicPermission, createRecognition } from "../lib/recognition";
import { getRandomSentence, judge, Sentence } from "../lib/sentences";
import { useRouter } from "next/navigation";
import ErrorModal from "@/components/ErrorModal";

export default function Game({
  onFinish,
}: {
  onFinish: (sentences: Sentence[], score: number) => void;
}) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [sentence, setSentence] = useState<Sentence>({
    sentence: "",
    words: [
      {
        text: "",
        yomi: "",
        completed: false,
      },
    ],
    score: 0,
    difficulty: 0,
    completed: false,
  });
  const [recognitionText, setRecognitionText] = useState("");
  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [settings, setSettings] = useState<{ mode: number; showYomi: boolean }>(
    () => {
      if (typeof window === "undefined") {
        return { mode: 0, showYomi: true };
      }

      const stored = localStorage.getItem("settings");
      if (stored) {
        return JSON.parse(stored);
      }
    },
  );
  const [mode, setMode] = useState<number>(settings.mode);
  let restartCount = 0;
  function start() {
    setSentence(getRandomSentence());
    setIsTimerRunning(true);
  }
  //音声認識の初期化
  useEffect(() => {
    if (mode === 1) {
      start();
      return;
    }
    //マイク使えるか確認
    (async () => {
      try {
        await checkMicPermission();
      } catch (e) {
        setError(
          "マイクの使用が許可されていません。設定からマイクの使用を許可してください。",
        );
        return;
      }
    })();

    //音声認識初期化
    let recognition: SpeechRecognition | null = null;
    try {
      recognition = createRecognition((text) => {
        setRecognitionText(() => text);
      });
    } catch {
      setError(
        "このブラウザでは音声認識がサポートされていません。Web Speech APIをサポートしているブラウザでアクセスしてください。例: Google Chrome",
      );
      return;
    }
    recognition.onend = () => {
      restartCount++;
      if (restartCount > 100) {
        setError("音声認識が何度も停止したため、ゲームを終了します。");
        throw new Error("音声認識が何度も停止しました。");
      }
      setTimeout(() => recognition.start(), 500);
    };

    recognition.onerror = (e) => {
      if (e.error === "not-allowed") {
        setError(
          "マイクの使用が許可されていません。設定からマイクの使用を許可してください。",
        );
      } else {
        setError(`音声認識エラー: ${e.error}`);
      }
    };
    //開始

    recognition.start();
    start();

    return () => {
      recognition.stop();
      recognition.onend = null;
      recognition.onerror = null;
    };
  }, []);

  //正誤判定
  useEffect(() => {
    if (!sentence) return;
    if (!recognitionText) return;

    const result = judge(recognitionText, sentence);

    //正解
    if (result.completed) {
      const sentenceScore = sentence.score;
      setScore((prev) => prev + sentenceScore);
      setSentences((prev) => [...prev, sentence]);
      setTime((prev) => prev + 1);
      console.log(`score: ${sentenceScore}`);
      setRecognitionText("");
      setSentence(getRandomSentence());
    } else {
      //不正解
      setSentence(result);
    }
  }, [recognitionText]);

  //終了
  function showResult() {
    onFinish(sentences, score);
  }

  //タイマー
  useEffect(() => {
    if (!isTimerRunning) return;
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [isTimerRunning]);
  useEffect(() => {
    if (time <= 0) {
      setIsTimerRunning(false);
      showResult();
    }
  }, [time]);

  useEffect(() => {}, [error]);

  if (!sentence) return null;

  return (
    <>
      {error && <ErrorModal message={error} onClose={() => router.push("/")} />}

      <div className="text-2xl font-bold px-6 pt-4 text-black">
        スコア: {score}
      </div>
      <div className="text-2xl font-bold px-6 pt-4 text-black">
        残り: {time}秒
      </div>
      <div className="font-semibold text-center px-8 leading-relaxed">
        {sentence.words.map((word, index) => (
          <ruby
            key={index}
            className={
              word.completed
                ? "text-5xl leading-loose text-green-500"
                : "text-5xl leading-loose text-red-500"
            }
          >
            {word.text}
            {settings.showYomi && (
              <rt className="text-xs tracking-widest">{word.yomi}</rt>
            )}
          </ruby>
        ))}
      </div>
      {mode === 1 ? (
        <input
          type="text"
          inputMode="text"
          className="border-2 border-gray-300 p-2 rounded-md"
          onChange={(e) => setRecognitionText(e.target.value)}
          value={recognitionText}
          autoFocus
        />
      ) : null}
      <button
        className="fixed bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-red-500 text-white rounded-lg"
        onClick={() => router.back()}
      >
        やめる
      </button>
    </>
  );
}

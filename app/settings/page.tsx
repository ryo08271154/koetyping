"use client";
import BackButton from "@/components/BackButton";
import { checkMicPermission } from "@/lib/recognition";
import { useEffect, useState } from "react";
type Settings = {
  mode: number;
  showYomi: boolean;
};
export default function Page() {
  const [settings, setSettings] = useState<Settings>(() => {
    if (typeof window === "undefined") {
      return { mode: 0, showYomi: true };
    }
    const stored = localStorage.getItem("settings");
    if (stored) {
      return JSON.parse(stored);
    }
    return {
      mode: 0,
      showYomi: true,
    };
  });
  //マイク使えるか確認
  useEffect(() => {
    (async () => {
      try {
        await checkMicPermission();
      } catch (e) {
        return;
      }
    })();
  }, []);

  function saveSettings() {
    localStorage.setItem("settings", JSON.stringify(settings));
  }
  useEffect(() => {
    saveSettings();
  }, [settings]);

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold mb-4">設定</h2>
      <div>
        <label>入力モード</label>
        <p className="text-sm text-gray-500 mb-2">
          正常に動作しない場合はキーボードモードをお試しください
        </p>
        <select
          className="border-2 border-gray-300"
          value={settings.mode}
          onChange={(e) =>
            setSettings({ ...settings, mode: Number(e.target.value) })
          }
        >
          <option value={0}>音声認識</option>
          <option value={1}>キーボード</option>
        </select>
      </div>
      <div>
        <label>読み仮名表示</label>
        <input
          type="checkbox"
          checked={settings.showYomi}
          onChange={(e) =>
            setSettings({ ...settings, showYomi: Boolean(e.target.checked) })
          }
        />
      </div>
      <BackButton />
    </div>
  );
}

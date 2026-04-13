"use client";
type Props = {
  message: string;
  onClose: () => void;
  onRetry?: () => void;
};
export default function ErrorModal({ message, onClose, onRetry }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg p-6 w-80 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-2">エラー</h2>
        <p className="text-red-500 mb-4">{message}</p>

        <div className="flex justify-center gap-3">
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              再試行
            </button>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
}

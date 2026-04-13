export async function checkMicPermission() {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false,
  });
  if (!stream) return;
  stream.getTracks().forEach((track) => track.stop());
}
export function createRecognition(onResult: (text: string) => void) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    throw new Error("SpeechRecognition is not supported");
  }
  const recognition = new SpeechRecognition();
  recognition.lang = "ja-JP";
  recognition.interimResults = true;
  recognition.continuous = true;

  recognition.onresult = (event: SpeechRecognitionEvent) => {
    const lastIndex = event.results.length - 1;
    const result = event.results[lastIndex];
    const transcript = result[0].transcript;
    onResult(transcript);
  };
  return recognition;
}

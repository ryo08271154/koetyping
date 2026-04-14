export function isInAppBrowser(): boolean {
  const ua = navigator.userAgent.toLowerCase();
  const names = [
    "line",
    "fban",
    "fbav",
    "instagram",
    "twitter",
    "musical_ly",
    "tiktok",
    "micromessenger",
    "snapchat",
    "linkedinapp",
    "wv",
  ];
  return names.some((name) => ua.includes(name));
}

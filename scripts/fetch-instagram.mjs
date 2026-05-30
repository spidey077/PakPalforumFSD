const ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36";

async function tryMedia(url) {
  const res = await fetch(url, { redirect: "manual", headers: { "User-Agent": ua } });
  return { status: res.status, location: res.headers.get("location") };
}

const tests = [
  "https://www.instagram.com/p/C-mcbTeik7A/media/?size=m",
  "https://www.instagram.com/pakpalforum_fsd/p/C-mcbTeik7A/media/?size=m",
  "https://www.instagram.com/reel/DI9rcYQtNYi/media/?size=m",
  "https://www.instagram.com/pakpalforum_fsd/reel/DI9rcYQtNYi/media/?size=m",
  "https://www.instagram.com/p/DJM5oniNmEE/media/?size=m",
  "https://www.instagram.com/pakpalforum_fsd/p/DJM5oniNmEE/media/?size=m",
];

for (const url of tests) {
  console.log(url, await tryMedia(url));
}

// profile shortcodes
const profile = await fetch("https://www.instagram.com/pakpalforum_fsd/", {
  headers: { "User-Agent": ua },
}).then((r) => r.text());

const codes = [...new Set(profile.match(/"shortcode":"([A-Za-z0-9_-]{5,})"/g)?.map((m) => m.match(/"shortcode":"([^"]+)"/)[1]) ?? [])];
console.log("shortcodes found:", codes.slice(0, 15));

# 東京與近郊自由行 Guide

## 免費發布到 Cloudflare Pages

1. 前往 Cloudflare Dashboard 的 **Workers & Pages**。
2. 選擇 **Create application → Get started → Drag and drop your files**。
3. 輸入網站名稱，例如 `tokyo-nearby-guide`。
4. 上傳 `tokyo-and-nearby-guide-static.zip`，然後選擇 **Deploy site**。

Cloudflare 會提供 `你的名稱.pages.dev` 網址，可直接分享給朋友。

## 本機開發

```bash
npm install
npm run dev
```

`npm run build` 會產生可上傳的 `out` 靜態網站資料夾。

import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'東京與近郊自由行 Guide', description:'一份整理多年旅遊經驗的東京與近郊旅行指南，含鎌倉、川越、輕井澤、行程、美食與交通建議。' };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="zh-Hant" suppressHydrationWarning><body>{children}</body></html>; }

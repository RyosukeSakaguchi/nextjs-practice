import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });           // メイン
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],                                     // 普通 & 太字
});

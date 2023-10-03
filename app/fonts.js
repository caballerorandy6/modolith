import { Caveat, Caveat_Brush, Roboto } from "next/font/google";

export const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: "400",
});

export const caveatbrush = Caveat_Brush({
  subsets: ["latin"],
  variable: "--font-caveatbrush",
  weight: "400",
});

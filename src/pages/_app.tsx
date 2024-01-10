import "@/styles/globals.css";
import type { AppProps } from "next/app";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

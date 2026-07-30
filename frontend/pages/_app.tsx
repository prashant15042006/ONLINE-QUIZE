import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../components/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

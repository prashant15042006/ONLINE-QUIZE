import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../components/ThemeProvider";
import ThemeToggle from "../components/ThemeToggle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background dark:bg-background-dark transition-colors">
        <header className="p-4 flex justify-end">
          <ThemeToggle />
        </header>
        <main className="p-4">
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  );
}

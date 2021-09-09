import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <header>
          <nav>
            <ul className="nav-list">
              <Link href="/">
                <a>Home</a>
              </Link>
            </ul>
          </nav>
          <button onClick={() => { console.log('Creating ...') }}>Artikel erstellen</button>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </QueryClientProvider>
  );
}
export default MyApp;

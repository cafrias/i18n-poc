import "../styles/globals.css";
import React, { useState } from "react";
import type { AppProps } from "next/app";
import { appWithTranslation, useTranslation } from "next-i18next";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [queryClient] = useState(new QueryClient());
  const { t } = useTranslation("common");

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <header className="main-header">
          <nav>
            <ul className="nav-list">
              <li>
                <Link href="/">
                  <a>{t("homeLink")}</a>
                </Link>
              </li>
              {router.locales?.map((l) => {
                return (
                  <li key={l}>
                    <Link href={router.asPath} locale={l}>
                      <a>{l}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button
            onClick={() => {
              console.log("Creating ...");
            }}
          >
            {t("createBtn")}
          </button>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
export default appWithTranslation(MyApp);

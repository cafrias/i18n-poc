import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "react-query";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Post } from "../models/models";

// -------------------------------------------------------
// Component
// -------------------------------------------------------

const Home: NextPage = () => {
  const { data: posts, isLoading } = useQuery<Post[]>("posts", () => {
    return fetch("/api/posts").then((res) =>
      res.json()
    );
  });

  if (!posts || isLoading) {
    return <div>... loading</div>;
  }

  return (
    <div>
      <Head>
        <title>Posts</title>
        <meta name="description" content="My i18n blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

// -------------------------------------------------------
// Static
// -------------------------------------------------------

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Home;

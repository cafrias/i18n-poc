import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "react-query";
import { Post } from "../models/models";
import styles from "../styles/Home.module.css";

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
    <div className={styles.container}>
      <Head>
        <title>Posts</title>
        <meta name="description" content="My i18n blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.main}>
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

export default Home;

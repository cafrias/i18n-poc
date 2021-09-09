import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useQuery } from 'react-query'
import { Post, User } from '../../models/models'

// -------------------------------------------------------
// Component
// -------------------------------------------------------
const Home: NextPage = () => {
	const { query: { pid } } = useRouter();
  const { data: post, isLoading: postLoading } = useQuery<Post>(['post', pid], () => {
    return fetch(`/api/posts/${pid}`)
      .then((response) => response.json());
  });
  const { data: user, isLoading: userLoading } = useQuery<User>(['user', post?.userId], () => {
    return fetch(`/api/users/${post?.userId}`)
      .then((res) => res.json())
  }, {
    enabled: Boolean(post),
  })

  if (
    postLoading
    || !post
    || userLoading
    || !user
  ) {
    return (
      <div>
        <Head>
          <title>Loading post {pid}</title>
        </Head>
        Loading ...
      </div>
    )
  }

  return (
    <article>
      <Head>
        <title>{post.title}</title>
      </Head>

      <header>
        <h1>{post.title}</h1>
        <p>By {user.username}</p>  
      </header>
      
      <p>{post.body}</p>
    </article>
  );
}

export default Home

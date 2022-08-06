import { useQuery } from "@apollo/client"
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import React from "react"
import { ALL_POST_QUERY } from "../lib/graphql/PostQueries"
import { AllPosts, AllPostsVariables } from "../lib/graphql/generated/AllPosts"
import { excerpt } from "src/lib/utils/utils"
import Header from "src/components/Header"

const Home: NextPage = () => {
  const { data, error, loading } = useQuery<AllPosts, AllPostsVariables>(ALL_POST_QUERY)

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-5">
          <div className="space-y-5 px-10">
            <h1 className="max-w-xl font-serif text-6xl">
              <span className="underline decoration-black decoration-4">BlogRedux</span> is a project to practice and learn.
            </h1>
            <h2>Learning Tailwind, Redux, and Bull, a queue process.</h2>
          </div>

          <img src="/images/logo/medium-1.svg" className="hidden h-32 px-10 md:inline-flex" />
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6">
          {data?.allPosts.map((post) => {
            return (
              <Link key={post.id} href={`/post/${post.id}`}>
                <div className="group cursor-pointer overflow-hidden rounded-lg border">
                  <div className="flex justify-between bg-white p-5">
                    <div>
                      <p className="text-lg font-bold">{post.title}</p>
                      <p>
                        {excerpt(post.content)} by {post.author.name}
                      </p>
                    </div>

                    <img className="h-12 w-12 rounded-full" src={`https://avatars.dicebear.com/api/bottts/${post.author.id}.svg`} alt="" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home

import Head from "next/head"
import { useState } from "react"
import { GetStaticProps } from "next"
import Header from "../../components/Header"
import { SinglePost_singlePost } from "src/lib/graphql/generated/SinglePost"
import { initializeApollo } from "../../lib/apollo"
import { ALL_POST_QUERY, SINGLE_POST_QUERY } from "../../lib/graphql/PostQueries"
import { SinglePostVariables, SinglePost } from "../../lib/graphql/generated/SinglePost"
import { AllPosts } from "../../lib/graphql/generated/AllPosts"
import { useEffect } from "react"

interface IFormInput {
  _id: string
  name: string
  email: string
  comment: string
}

interface Props {
  post: SinglePost_singlePost
}

const Post = ({ post }: Props) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/images/logo/medium-1.svg" />
      </Head>
      <div>
        <Header />
        {/* <img
          className="h-80 w-full object-cover "
          src={urlFor(post.mainImage).url()!}
          alt=""
        /> */}

        <article className="mx-auto max-w-3xl p-5">
          <h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>
          <div className="flex items-center space-x-2">
            <img className="h-10 w-10 rounded-full" src={`https://avatars.dicebear.com/api/bottts/${post.author.id}.svg`} alt="" />
            <p className="text-sm font-extralight">
              Blog post By <span className="text-green-700">{post.author.name}</span> - Published at {isMounted && new Date(post.createdAt).toLocaleString()}
            </p>
          </div>

          <div className="mt-10">{post.content}</div>
        </article>

        <hr className="my-5 mx-auto max-w-lg border border-yellow-500" />
      </div>
    </>
  )
}

export default Post

export const getStaticPaths = async () => {
  const client = initializeApollo()
  const posts = await client.query<AllPosts>({ query: ALL_POST_QUERY })
  const paths = posts.data.allPosts.map((post) => ({
    params: { id: post.id.toString() },
  }))
  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = initializeApollo()
  const { id } = params
  if (!id || Array.isArray(id)) {
    return {
      notFound: true,
    }
  }
  const post = await client.query<SinglePost, SinglePostVariables>({ query: SINGLE_POST_QUERY, variables: { singlePostId: parseInt(id) } })

  if (!post.data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post: post.data.singlePost,
    },
    revalidate: 60,
  }
}

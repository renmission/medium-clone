import React, { useState } from "react";
import { sanityClient, urlFor } from "../../sanity";
import { Post, PostProps, Comment } from "../../typing";
import { GetStaticProps } from "next";
import PostHeader from "../../components/PostHeader";
import { RiMailAddLine } from "react-icons/ri";
import Moment from "moment";
import PortableText from "react-portable-text";
import PostFooter from "../../components/PostFooter";
import {
  FaFacebook,
  FaLink,
  FaLinkedin,
  FaTag,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import Posts from "../../components/Posts";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

interface Props {
  post: Post;
  posts: [Post];
}

function Post({ post, posts }: Props) {

  
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    fetch("/api/createComment", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };

  Moment.locale("en");
  return (
    <main>
      <PostHeader />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-x mb-3">
        <article className="col-span-2 max-w-7xl mx-auto px-6 mt-10">
          <div className="flex flex-col sm:flex-row md:justify-between">
            <div className="flex flex-row items-center">
              <img
                className="h-12 w-12 rounded-full mr-4 "
                src={urlFor(post.author.image).url()!}
                alt=""
              />

              <div>
                <div className="">
                  <p className="font-semibold text-xl">{post.author.name}</p>
                  <p className="text-md text-gray-500 py-1">
                    {Moment(post._createdAt).format("MMM d, Y")}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row text-gray-500 items-center space-x-5 cursor-pointer pt-5">
              <p className="flex items-center space-x-1 border rounded-full py-2 px-3 text-xl">
                <span>
                  <MdOutlineBookmarkAdd />
                </span>{" "}
                <span className="text-sm">Save</span>
              </p>
              <div className="text-2xl flex items-center space-x-5">
                <FaTwitter />
                <FaFacebook />
                <FaLinkedin />
                <FaLink />
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold mt-10 mb-3">{post.title}</h1>

          <div className="py-6">
            <img
              className="border rounded-md"
              src={urlFor(post.mainImage).url()!}
              alt=""
            />
          </div>
          <div>
            <PortableText
              className="text-gray-500 text-xl leading-8"
              content={post.body}
              projectId={process.env.SANITY_PROJECT_ID}
              dataset={process.env.SANITY_DATASET}
              serializers={{
                h1: (props: any) => (
                  <h1 className="text-2xl font-bold mt-10 mb-3">{...props}</h1>
                ),
                div: (props: any) => (
                  <div className="text-xl font-bold mt-10 mb-3">{...props}</div>
                ),
                p: (props: any) => (
                  <p className="text-2xl font-bold mt-10 mb-3">{...props}</p>
                ),
                li: ({ children }: any) => (
                  <li className="ml-4 list-disc">{children}</li>
                ),
                link: ({ href, children }: any) => (
                  <a href={href} className="text-gray-500 hover:text-gray-700">
                    {children}
                  </a>
                ),
              }}
            />
          </div>

          <div className="my-16">
            <hr className="max-w-full h-px my-5 mx-auto" />
          </div>

          <input
            {...register("_id")}
            type="hidden"
            name="_id"
            value={post._id}
          />

          <div className="mb-6">
            <p className="text-sky-500 font-sm pb-1">Enjoyed the article?</p>
            <h3 className="text-xl md:text-3xl font-bold">
              Leave a comment below!
            </h3>
            <hr className="max-w-full h-px my-5 mx-auto" />
          </div>

          {submitted ? (
            <div className="flex flex-col py-10 my-10 bg-sky-500  max-w-2xl mx-auto text-center text-white border rounded-lg">
              <h3 className="font-bold text-2xl ">
                Thank you for submitting your comment
              </h3>
              <p className="">
                Once it has been approved, it will appear below!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-full"
            >
              <div className="mb-6">
                <div className="">
                  <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Full Name
                  </label>

                  {errors.name && (
                    <span className="text-red-500">
                      * The name feild is required
                    </span>
                  )}
                </div>
                <div className="">
                  <input
                    {...register("name", { required: true })}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="Jane Doe"
                  />
                </div>
              </div>
              <div className="w-full max-w-full">
                <div className="">
                  <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Email
                  </label>
                  {errors.email && (
                    <span className="text-red-500">
                      * The email feild is required
                    </span>
                  )}
                </div>
                <div className="">
                  <input
                    {...register("email", { required: true })}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="janedoe@gmail.com"
                  />
                </div>
              </div>

              <div className="py-8">
                <div className="">
                  <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Commet
                  </label>
                  {errors.comment && (
                    <span className="text-red-500">
                      * The comment feild is required
                    </span>
                  )}
                </div>
                <div>
                  <textarea
                    {...register("comment", { required: true })}
                    id="message"
                    className="p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-sky-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
              </div>

              <div className="mb-8">
                <div className="">
                  <button
                    className="shadow bg-sky-500 hover:bg-cyan-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Comments */}
          <div className="flex flex-col py-10 my-10 max-w-2xl">
            <h3 className="text-xl md:text-3xl font-semibold">Comments</h3>
            <hr className="max-w-full h-px my-5 mx-aut" />

            {post.comments.map((c) => (
              <div key={c._id} className="py-2">
                <p>
                  <span className="text-sky-500 font-semibold">{c.name} </span>{" "}
                  : <span className="text-gray-500">{c.comment}</span>
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="hidden md:block max-w-3xl mx-auto px-6">
          <div>
            <img
              className="h-20 w-20 rounded-full mr-2 mt-10 "
              src={urlFor(post.author.image).url()!}
              alt=""
            />
            <p className="font-semibold text-xl pt-3 text-gray-700">
              {post.author.name}
            </p>
            <p className="text-lg text-gray-500"> 196K Followers</p>

            <p className="text-sm text-gray-500 pt-3"> Dad, Husband, citizen</p>

            <div className="flex items-center space-x-5 text-center pt-5">
              <h3 className="text-sm border px-4 py-2 rounded-full bg-sky-600 border-sky-600 text-white cursor-pointer">
                Follow
              </h3>
              <h3 className="text-white text-sm border px-3 py-3 rounded-full bg-sky-600 border-sky-600 cursor-pointer">
                <RiMailAddLine />
              </h3>
            </div>
          </div>

          <div className="py-10">
            <h3 className="font-semibold">More from Medium</h3>
            {posts.map((post) => (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className="grid grid-cols-2 gap-3 p-5 cursor-pointer lg:w-4/6">
                  <div className="col-span-2">
                    <div className="flex justify-start items-center">
                      <img
                        className="h-6 w-6 rounded-full mr-2"
                        src={urlFor(post.author.image).url()!}
                        alt=""
                      />
                      <p className="font-semibold text-xs">
                        {post.author.name}
                      </p>
                    </div>

                    <p className="text-sm lg:text-xl font-bold py-1">
                      {post.title}
                    </p>
                    <p className="text-gray-500 py-1 text-xs">
                      {post.description}
                    </p>

                    <div className="text-gray-500 py-1">
                      <p className="text-sm">
                        {Moment(post._createdAt).format("MMM d, Y")} ⭐
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      className="max-w-full h-auto rounded-lg"
                      src={urlFor(post.mainImage).url()!}
                      alt=""
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="px-2">
            <PostFooter />
          </div>
        </article>
      </div>
    </main>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"] {
        _id,
        slug {
            current
        }
      }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postQuery = `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        author -> {
          name,
          image
        },
        'comments': *[
          _type == "comment" &&
          post._ref == ^._id &&
          approved == true
          ],
          body,
          mainImage,
          slug,
          _createdAt,
          description,
          body,
          categories[] -> {
            title,
            slug
          },
        
      }`;

  const postsQuery = `*[_type == "post"] {
        _id,
        title,
        author -> {
          name,
          image
        },
          body,
          mainImage,
          slug,
          _createdAt,
          description,
          categories[] -> {
            title,
            slug
        },
        
      }`;

  const posts = await sanityClient.fetch(postsQuery);

  const post = await sanityClient.fetch(postQuery, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      posts,
    },
    revalidate: 60, // after 60 seconds update old cache
  };
};

import React from "react";
import { PostProps } from "../typing";
import Link from "next/link";
import { BiTrendingUp } from "react-icons/bi";
import { urlFor } from "../sanity";
import Moment from "moment";

function TrendingPost({ posts }: PostProps) {
  Moment.locale('en');

  return (
    <div className="items-center space-x-5 px-3 py-16">
      <div>
        <h1 className="font-bold text-sm px-5 flex flex-row items-center">
          <span className="border border-black rounded-full p-1 mr-2"> <BiTrendingUp /></span>
          <span>TRENDING ON MEDIUM</span> 
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
        {posts.map(post =>(
          <Link key={post._id} href={`/post/${post.slug.current}`} >
            <div className="w-72 p-2 cursor-pointer">
            <div>
              <div className="flex justify-start items-center">
                <img
                  className="h-6 w-6 rounded-full mr-2"
                  src={urlFor(post.author.image).url()!}
                  alt=""
                />
                <p className="font-semibold text-xs"> {post.author.name}</p>
              </div>

              <p className="text-md lg:text-lg font-bold py-1">{post.title}</p>
              <p className="text-gray-500 py-1 text-xs">{post.description}</p>

              <div className="text-gray-500 py-1">
                <p className="text-xs">{Moment(post._createdAt).format('MMM d Y')} ⭐</p>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TrendingPost;

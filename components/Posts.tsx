import Link from "next/link";
import React from "react";
import Moment from 'moment';
import { urlFor } from "../sanity";
import { PostProps } from "../typing";

function Posts({ posts }: PostProps) {

  Moment.locale('en');
  
  return (
    <div className="">
      {posts.map((post) => (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
          <div className="grid grid-cols-3 gap-16 p-5 cursor-pointer lg:w-4/6">
            <div className="col-span-2">
              <div className="flex justify-start items-center">
                <img
                  className="h-6 w-6 rounded-full mr-2"
                  src={urlFor(post.author.image).url()!}
                  alt=""
                />
                <p className="font-semibold text-xs"> {post.author.name}</p>
              </div>

              <p className="text-sm lg:text-xl font-bold py-1">{post.title}</p>
              <p className="text-gray-500 py-1 text-xs">{post.description}</p>

              <div className="text-gray-500 py-1">
                <p className="text-sm">{Moment(post._createdAt).format('MMM d, Y')} ⭐</p>
              </div>
            </div>
            <div>
              <img className="object-cover h-24 w-24 sm:w-52 sm:h-32" src={urlFor(post.mainImage).url()!} alt="" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Posts;

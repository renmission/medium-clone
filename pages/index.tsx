import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { sanityClient } from "../sanity";
import Posts from "../components/Posts";
import { PostProps, Props } from "../typing";
import Category from "../components/Category";
import Footer from "../components/Footer";
import HorizontalLine from "../components/HorizontalLine";
import TrendingPost from "../components/TrendingPost";

const Home = ({ posts, categories }: Props) => {
  console.log(categories);
  return (
    <div className="mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Hero />

      <div className="w-5/6 mx-auto">
        
          <TrendingPost posts={posts} />

          <HorizontalLine />

          <Category categories={categories} />

          <Posts posts={posts} />
        
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const postQuery = `*[_type == "post"] {
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

  const categoryQuery = `*[_type == "category"] {
    _id,
    title,
    description,
    slug,
  }`;

  const posts = await sanityClient.fetch(postQuery);

  const categories = await sanityClient.fetch(categoryQuery);

  return {
    props: {
      posts,
      categories,
    },
  };
};

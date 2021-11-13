import React from "react";
import api from "../../utils/api";
import Nav from "../../components/nav";
import Image from "../../components/images";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import Feeds from "../../components/feeds";

export default function Blog({ story, feed }) {
  const feeds = feed.find((item) => item.title === "Hero2");
  console.log(feeds);
  return (
    <div>
      <Nav />
      <div className="grid lg:grid-cols-4 justify-center px-4 gap-8">
        <div className="col-span-1"></div>

        <div className="text-gray-900 col-span-2">
          <h1 className="text-2xl font-bold py-2">{story.title}</h1>
          <Image src={story.hero.url} />
          <h6 className="">{story.description}</h6>
          <ReactMarkdown children={story.body} skipHtml={false} />
        </div>

        <div className="flex flex-col divide-y col-span-2 lg:col-span-1">
          <Feeds data={feeds} />
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const { data } = await api.get("/stories");
  console.log(data);
  return {
    paths: data.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { data } = await api.get(`/stories?slug=${params.slug}`);
  const getFeeds = await api.get("/categories");
  const feed = getFeeds.data;
  return {
    props: { story: data[0], feed },
    revalidate: 1,
  };
};

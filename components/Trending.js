import React from "react";
import Heading from "./heading";
import Images from "./images";
import Link from "next/link";

export default function Trending({ data }) {
  console.log(data);
  return (
    <div>
      <div className=" lg:px-16">
        <Heading title="TODAYS'S TRENDING" />
        <div className="grid  lg:grid-cols-3 gap-4  ">
          {data.stories.map((item) => (
            <Link href={`http://localhost:3000/stories/${item.slug}`}>
              <a>
                <div className="col-span-1" key={item.id}>
                  <div className="">
                    <Images src={item.hero.url} style="w-full h-64" />
                  </div>
                  <div className="">
                    <h2 className="text-gray-800 text-lg font-bold">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Heading from "./heading";
import Link from "next/link";
import Images from "./images";
export default function Stories({ data }) {
  console.log("stories", data);
  return (
    <div>
      <div className=" lg:px-16 py-12">
        <Heading title="TOP STORIES" />
        <div className="space-y-8">
          {data.map((item) => (
            <Link href={`http://localhost:3000/stories/${item.slug}`}>
              <a>
                <div className="grid lg:grid-cols-3 gap-8" key={item.id}>
                  <div className="col-span-1">
                    {item.hero && (
                      <Images src={item.hero.url} style="w-full h-64" />
                    )}
                  </div>
                  <div className="col-span-2">
                    <h2 className="text-gray-800 text-lg font-bold">
                      {item.title}
                    </h2>
                    <p className="pt-2">{item.description}</p>
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

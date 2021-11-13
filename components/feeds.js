import React from "react";
import Images from "./images";
import Link from "next/link";
export default function Feeds({ data }) {
  return (
    <div>
      <h2 className="font-bold text-lg">Related Feeds</h2>
      <div className="flex flex-col divide-y">
        {data.stories.map((item) => (
          <Link href={`http://localhost:3000/stories/${item.slug}`}>
            <a>
              <div className="flex px-1 py-4 gap-4">
                <Images src={item.hero.url} style="w-20 h-20 " />

                <div className="flex flex-col flex-grow">
                  <a href="#" className="font-serif hover:underline">
                    Aenean ac tristique lorem, ut mollis dui.
                  </a>
                  <p className="mt-auto text-xs dark:text-coolGray-400">
                    5 minutes ago
                    <a
                      href="#"
                      className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                    >
                      Politics
                    </a>
                  </p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

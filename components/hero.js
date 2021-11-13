import React from "react";
import Images from "./images";
import Link from "next/link";

export default function Hero({ data }) {
  console.log("hero", data);
  return (
    <div>
      <div className="py-16 lg:px-16">
        <div className="grid grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-4  ">
          {data.map((item) => (
            <div
              className={`${
                item.id === 1
                  ? "col-span-2 row-span-3 row-start-1"
                  : "col-span-1 row-span-1"
              }   mb-4 flex flex-col`}
            >
              <Link href={`http://localhost:3000/stories/${item.slug}`}>
                <a>
                  <div>
                    <Images
                      src={item.hero.url}
                      style={`${item.id === 1 ? "h-4/6" : "h-44"} w-full`}
                    />
                    <div className="">
                      <h2
                        className={`${
                          item.id === 1 ? "text-xl " : "text-base"
                        }text-gray-800  font-bold `}
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </h2>
                      <p className="py-2 line-clamp-2">
                        been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting.
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

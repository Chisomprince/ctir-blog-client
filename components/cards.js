import React from "react";
import Images from "./images";

export default function Cards() {
  return (
    <div>
      <div className="py-16 lg:px-16">
        <div className="grid grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-4  ">
          <div className="col-span-2 row-span-3  mb-4 flex flex-col">
            <Images
              src="https://cdn.cdnparenting.com/articles/2019/04/14175650/278188052-H-696x476.webp"
              style="h-96"
            />
            <div className="">
              <h2 className="text-gray-800 text-xl font-bold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </h2>
              <p className="py-2">
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting.
              </p>
            </div>
          </div>
          <div className="col-span-1 row-span-1 ">
            <Images
              src="https://cdn.cdnparenting.com/articles/2019/04/14175650/278188052-H-696x476.webp"
              style="h-44"
            />
            <div className="">
              <h2 className="text-gray-800 text-lg font-bold">
                Lorem Ipsum is simply dummy text of the printing
              </h2>
              <p className="pt-2">
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled
              </p>
            </div>
          </div>
          <div className="col-span-1 row-span-1 ">
            <Images
              src="https://cdn.cdnparenting.com/articles/2019/04/14175650/278188052-H-696x476.webp"
              style="h-44"
            />
            <div className="">
              <h2 className="text-gray-800 text-lg font-bold">
                Lorem Ipsum is simply dummy text of the printing
              </h2>
              <p className="pt-2">
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

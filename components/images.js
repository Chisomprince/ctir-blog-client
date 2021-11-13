import React from "react";

export default function Images({ style, src }) {
  return (
    <div>
      <div className="">
        <img className={`${style} object-cover`} src={src} />
      </div>
    </div>
  );
}

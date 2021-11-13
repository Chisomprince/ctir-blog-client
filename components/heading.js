import React from "react";

export default function Heading({ title }) {
  return (
    <div>
      <div className="border-t border-b my-4 py-2">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </div>
  );
}

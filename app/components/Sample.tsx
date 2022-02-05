import React from "react";

export interface Props {
  text: string;
}

export function Sample({ text }: Props) {
  return (
    <div>
      <h1 className="text-lg text-red-500">{ text }</h1>
    </div>
  )
}
import React from "react"

function H1 (props){
  return (
    <h1 className="text-5xl font-normal bg-gradient-to-b from-white to-gray-700 text-transparent bg-clip-text ">{props.children}</h1>
  );
}

export default H1 ;
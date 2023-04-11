import React from 'react'

function Input (props){
  return (
    <div className="border border-white p-1  ">
    <input className="border w-full border-black   p-2 placeholder:text-base placeholder:text-gray-500 " placeholder={props.placeholder} onChange={props.onChange} value={props.value}/>
    </div>
  );
}

export default Input ;
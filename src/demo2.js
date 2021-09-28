import React, { useState } from "react";

export default function Demo2() {
  const [data, setData] = useState([
    {
      id: 1,
      value:[],
    }
  ]);
  let temp = [...data];  
  const onchangeInput = (val, index) =>{     
    temp[index] = val.target.value
    setData(temp)
  }
  const handleSubmit= (e)=>{
    e.preventDefault();
    console.log(JSON.stringify(data));
  }
  return (
    <>
      {data.map((value, index) => {
        return <input key={index} onChange={(val)=>{onchangeInput(val, index)}} /> 
      })}
      <button onClick={handleSubmit}>OK</button>
    </>
  );
}
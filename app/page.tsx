"use client";
import Counter from "@/components/counter";
import { useState } from "react";

export default function App() {
    const [count,setCount] = useState(0);

  return (
    <>
      <title>Homepage</title>
      <h1>Welcome to Homepage</h1>
      <p>Count : {count}</p>
      <Counter count={count} setCount={setCount}/>
    </>
  );
}

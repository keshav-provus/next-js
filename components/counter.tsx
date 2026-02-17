"use client";
import type {CounterProp} from "@/types/props"

export default function Counter({count, setCount} : CounterProp) {
    const handleIncrement = () => {
        setCount(count+1);
    }

  return (
    <>
      <button className="button" onClick={handleIncrement}>
        Click
      </button>
    </>
  );
}

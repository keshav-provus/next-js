import { SetStateAction } from "react";

export interface CounterProp{
    count: number;
    setCount: React.Dispatch<SetStateAction<number>>;
}
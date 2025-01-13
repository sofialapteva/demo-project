import { useState, useContext, useEffect, useCallback, useMemo, useRef } from "react";
import classes from "./Counter.module.scss";
interface CounterProps {
  className?: string;
}
export const Counter = ({ className }: CounterProps) => {
  const [counter, setCounter] = useState(0);
  return (
    <div className={classes.div}>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
};

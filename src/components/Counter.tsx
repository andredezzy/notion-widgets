import React, { useState } from 'react';

import { ArrowCounterClockwise, Minus, Plus } from 'phosphor-react';

export interface CounterProps {
  title?: string;
  initialCount?: number;
}

export function Counter({ title, initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="border border-black dark:border-white bg-notion-light dark:bg-notion-dark rounded-lg overflow-hidden flex flex-col gap-4 justify-center items-center h-full py-4">
      {title && (
        <span className="text-lg text-black dark:text-white leading-tight">
          {title}
        </span>
      )}

      <div className="flex items-center gap-4">
        <div className="flex gap-1">
          <span className="text-xl bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white font-mono font-medium h-9 px-3 flex justify-center items-center rounded">
            {count}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            className="border border-black dark:border-white bg-black dark:bg-white dark:hover:bg-transparent hover:bg-transparent h-9 w-9 rounded flex items-center justify-center transition-colors group"
            onClick={() => setCount(count + 1)}
          >
            <Plus
              className="group-hover:fill-black dark:group-hover:fill-white fill-white dark:fill-black transition-colors"
              size={16}
              weight="fill"
            />
          </button>

          <button
            className="border border-black dark:border-white bg-black dark:bg-white dark:hover:bg-transparent hover:bg-transparent h-9 w-9 rounded flex items-center justify-center transition-colors group"
            onClick={() => setCount(count - 1)}
          >
            <Minus
              className="group-hover:fill-black dark:group-hover:fill-white fill-white dark:fill-black transition-colors"
              size={16}
              weight="fill"
            />
          </button>

          <button
            className="border border-black dark:border-white h-9 w-9 rounded flex items-center justify-center hover:bg-black dark:hover:bg-white transition-colors group"
            onClick={() => setCount(initialCount)}
          >
            <ArrowCounterClockwise
              className="group-hover:text-white dark:group-hover:text-black text-black dark:text-white transition-colors"
              size={16}
              weight="bold"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

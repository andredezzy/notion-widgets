import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import { clsx } from 'clsx';
import { differenceInSeconds } from 'date-fns';
import { Play, Pause, ArrowCounterClockwise } from 'phosphor-react';

export interface CountdownProps {
  title?: string;
  totalSeconds: number;
}

export function Countdown({ title, totalSeconds }: CountdownProps) {
  const [startDate, setStartDate] = useState<number>();
  const [pausedDate, setPausedDate] = useState<number>();
  const [secondsPassed, setSecondsPassed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (isRunning) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(startDate),
        );

        if (secondsDifference >= totalSeconds) {
          setIsRunning(false);

          setSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setSecondsPassed(secondsDifference);
        }
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isRunning, startDate, totalSeconds]);

  function toggleCountdown() {
    if (isRunning) {
      setPausedDate(Date.now());
      setIsRunning(false);

      return;
    }

    if (pausedDate) {
      setStartDate(Date.now() - (pausedDate - startDate));
      setPausedDate(undefined);

      setIsRunning(true);

      return;
    }

    setStartDate(Date.now());
    setIsRunning(true);
  }

  function resetCountdown() {
    setStartDate(Date.now());
    setPausedDate(undefined);
    setSecondsPassed(0);
  }

  const currentSeconds = totalSeconds - secondsPassed;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  return (
    <div className="border border-black dark:border-white rounded-lg flex flex-col gap-4 justify-center items-center h-full py-4">
      {title && (
        <span className="text-lg text-black dark:text-white leading-tight">
          {title}
        </span>
      )}

      <div className="flex items-center gap-4">
        <div className="flex gap-1">
          <span className="text-xl bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white font-mono font-medium h-9 w-7 flex justify-center items-center rounded">
            {minutes[0]}
          </span>

          <span className="text-xl bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white font-mono font-medium h-9 w-7 flex justify-center items-center rounded">
            {minutes[1]}
          </span>

          <span className="text-xl text-neutral-800 dark:text-neutral-300 font-mono font-extrabold h-9 w-4 flex justify-center items-center rounded">
            :
          </span>

          <span className="text-xl bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white font-mono font-medium h-9 w-7 flex justify-center items-center rounded">
            {seconds[0]}
          </span>

          <span className="text-xl bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white font-mono font-medium h-9 w-7 flex justify-center items-center rounded">
            {seconds[1]}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            className={clsx(
              'border border-black dark:border-white h-9 w-9 rounded flex items-center justify-center transition-colors group',
              {
                'bg-transparent hover:bg-black dark:hover:bg-white': isRunning,
                'bg-black dark:bg-white dark:hover:bg-transparent hover:bg-transparent':
                  !isRunning,
              },
            )}
            onClick={toggleCountdown}
          >
            {!isRunning ? (
              <Play
                className="group-hover:fill-black dark:group-hover:fill-white fill-white dark:fill-black transition-colors"
                size={16}
                weight="fill"
              />
            ) : (
              <Pause
                className="group-hover:fill-white dark:group-hover:fill-black fill-black dark:fill-white transition-colors"
                size={16}
                weight="fill"
              />
            )}
          </button>

          <button
            className="border border-black dark:border-white h-9 w-9 rounded flex items-center justify-center hover:bg-black dark:hover:bg-white transition-colors group"
            onClick={resetCountdown}
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

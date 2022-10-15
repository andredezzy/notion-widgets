import { useEffect, useState } from 'react';

import { differenceInSeconds } from 'date-fns';
import { Play, Pause, ArrowCounterClockwise } from 'phosphor-react';

export interface CountdownProps {
  title: string;
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
    if (!startDate) {
      setStartDate(Date.now());
    }

    if (pausedDate) {
      setStartDate(Date.now() - (pausedDate - startDate));
      setPausedDate(undefined);
    }

    if (isRunning) {
      setPausedDate(Date.now());
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
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
    <div className="border-2 border-white rounded-lg flex flex-col gap-4 justify-center items-center h-full">
      <span className="text-lg text-white">{title}</span>

      <div className="flex items-center gap-3">
        <span className="text-xl text-white">{`${minutes} : ${seconds}`}</span>

        <div className="flex gap-2">
          <button
            className="bg-white h-9 w-9 rounded flex items-center justify-center"
            onClick={toggleCountdown}
          >
            {!isRunning ? (
              <Play className="fill-black" size={16} weight="fill" />
            ) : (
              <Pause className="fill-black" size={16} weight="fill" />
            )}
          </button>

          <button
            className="border border-white h-9 w-9 rounded flex items-center justify-center"
            onClick={resetCountdown}
          >
            <ArrowCounterClockwise
              className="text-white"
              size={16}
              weight="bold"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

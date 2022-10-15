export interface CountdownProps {}

export function Countdown(props: CountdownProps) {
  return (
    <div className="border-2 border-white rounded-lg flex justify-center items-center h-full min-h-[9rem]">
      <span className="text-lg text-white">Countdown</span>
    </div>
  );
}

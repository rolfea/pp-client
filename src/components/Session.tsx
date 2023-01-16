import { SessionItem, SessionItemProps } from './SessionItem';

export interface SessionProps {
  id: number;
  name: string;
  sessionItems: SessionItemProps[];
}
export function Session(session: SessionProps) {
  const totalTime =
    session.sessionItems.reduce(
      (runningTotal, s) => runningTotal + s.timeInSeconds,
      0
    ) / 60;

  return (
    <div className="sessionList">
      <h2>
        {session.name} | {totalTime} Minutes{' '}
      </h2>
      {session.sessionItems.map((si: SessionItemProps) => (
        <SessionItem {...si} />
      ))}
    </div>
  );
}

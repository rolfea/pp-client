import { Button } from '@mui/material';
import { randomInt } from 'crypto';
import { SessionItem, SessionItemProps } from './SessionItem';

export interface SessionProps {
  id: number;
  userId: number;
  name: string;
  sessionItems: SessionItemProps[];
}
export function Session(session: SessionProps) {
  const totalTime =
    session.sessionItems.reduce(
      (runningTotal, s) => runningTotal + s.timeInSeconds,
      0
    ) / 60;

  console.log(session.sessionItems);
  const startSession = () => {
    setInterval(() => {
      console.log('1');
    }, 1000);
  };

  return (
    <div className="sessionList">
      <h2>
        {session.name} | {totalTime} Minutes{' '}
      </h2>
      <Button variant="contained" onClick={() => startSession()}>
        Start
      </Button>
      {session.sessionItems.map((si: SessionItemProps) => (
        <SessionItem {...si} />
      ))}
    </div>
  );
}

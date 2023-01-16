export interface SessionItemProps {
  id: number;
  name: string;
  bpm: number;
  timeInSeconds: number;
  notes: string;
}

export function SessionItem(sessionItem: SessionItemProps) {
  return (
    <div className="sessionItem">
      <p>
        {sessionItem.id}: {sessionItem.name} | {sessionItem.timeInSeconds} |{' '}
        {sessionItem.bpm} BPM * {sessionItem.notes}
      </p>
    </div>
  );
}

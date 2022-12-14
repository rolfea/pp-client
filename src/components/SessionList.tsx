import { SessionItem, SessionItemProps } from "./SessionItem";

export interface SessionListProps {
  sessionItems: SessionItemProps[];
  sessionName: string;
}

export function SessionList({ sessionItems, sessionName }: SessionListProps) {
  return (
    <div className="sessionList">
      <p>Session List {sessionName} Goes here:</p>
      {sessionItems.map((si: SessionItemProps) => (
        <SessionItem key={si.key} name={si.name} />
      ))}
    </div>
  );
}

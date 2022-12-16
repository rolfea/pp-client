import { SessionItem, SessionItemProps } from "./SessionItem";

export interface SessionListProps {
  sessionItems: SessionItemProps[];
  sessionName: string;
}

export function SessionList(sessionList: SessionListProps) {
  return (
    <div className="sessionList">
      <p>Session List {sessionList.sessionName} Goes here:</p>
      {sessionList.sessionItems.map((si: SessionItemProps) => (
        <SessionItem key={si.key} name={si.name} />
      ))}
    </div>
  );
}

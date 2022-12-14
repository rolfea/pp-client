export type SessionItemProps = {
  key: number;
  name: string;
};

export function SessionItem(sessionItem: SessionItemProps) {
  return (
    <div className="sessionItem">
      <p>
        I am a Session Item {sessionItem.key}: {sessionItem.name}
      </p>
    </div>
  );
}

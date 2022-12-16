import Session from "./components/Session";
import { SessionList, SessionListProps } from "./components/SessionList";
import "./App.css";

function App() {
  const sessionList: SessionListProps = {
    sessionItems: [
      { key: 1, name: "item 1" },
      { key: 2, name: "item 2" },
      { key: 3, name: "item 3" },
    ],
    sessionName: "Test Name",
  } as any as SessionListProps;

  return (
    <div className="App">
      <Session />
      <SessionList {...sessionList} />
    </div>
  );
}

export default App;

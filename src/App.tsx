import { Session, SessionProps } from './components/Session';
import sessionApi from './api/sessionApi';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [session, setSession] = useState<SessionProps | undefined>(undefined);

  useEffect(() => {
    (async () => {
      setSession(await sessionApi.getSlow(1));
    })();
  }, []);

  return session ? (
    <div className="App">
      <Session {...session} />
    </div>
  ) : (
    <div>Loading!</div>
  );
}

export default App;

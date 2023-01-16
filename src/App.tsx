import { Session, SessionProps } from './components/Session';
import './App.css';

function App() {
  const session: SessionProps = {
    id: 1,
    sessionItems: [
      {
        id: 1,
        name: '8 On A Hand',
        bpm: 60,
        timeInSeconds: 120,
        notes: 'Full strokes, relaxed',
      },
      {
        id: 2,
        name: 'Stick Control',
        bpm: 120,
        timeInSeconds: 300,
        notes: 'remeber to breath, count out loud',
      },
      {
        id: 3,
        name: 'Table of Time',
        bpm: 52,
        timeInSeconds: 300,
        notes: 'full strokes, step and count out loud',
      },
    ],
    name: 'SD Warm Up',
  };

  return (
    <div className="App">
      <Session {...session} />
    </div>
  );
}

export default App;

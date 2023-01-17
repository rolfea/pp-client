import axios from 'axios';
import { SessionProps } from '../components/Session';

const get = (userId: number): SessionProps => {
  const fakeSession: SessionProps = {
    id: 1,
    userId: 1,
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

  return fakeSession;
};

// faking network call to make sure loading thing works
const getSlow = async (userId: number): Promise<SessionProps> => {
  await new Promise((r) => setTimeout(r, 6000));
  const fakeSession: SessionProps = {
    id: 1,
    userId: 1,
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

  return fakeSession;
};

const sessionApi = {
  get,
  getSlow,
};
export default sessionApi;

import { Timestamp } from 'firebase/firestore';

export interface GameItem {
  __id: string;
  __userId: string;
  game: string;
  rating: number;
  status?: string;
  _createdAt?: Timestamp;
  _updatedAt?: Timestamp;
}
import { Timestamp } from 'firebase/firestore';

export interface User {
  __id: string;
  name: string;
  email: string;
  _createdAt?: Timestamp;
  _updatedAt?: Timestamp;
}

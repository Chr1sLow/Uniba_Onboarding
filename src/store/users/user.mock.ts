import { Timestamp } from 'firebase/firestore';
import type { User } from './user.model';

export const User_DB: User[] = [
  {
    __id: '1',
    name: 'User A',
    email: 'userA@example.com',
    _createdAt: Timestamp.now(),
    _updatedAt: Timestamp.now(),
  }
];

export const UserMockDB = {
  getEntities: () => [...User_DB],
  
  findById: (id: string) => User_DB.find(user => user.__id === id),
};

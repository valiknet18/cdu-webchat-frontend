import { Room } from './room';
import { User } from './user';

export class Group {
  id: number;
  name: string;
  rooms?: Room[];
  students?: User[];
}

import { Message } from './message';
import { Group } from './group';
import { User } from './user';

export class Room {
  id: number;
  name: string;
  created_by: number;
  created_at: string;
  messages: Message[];
  groups: Group[];
  teacher?: User;
}

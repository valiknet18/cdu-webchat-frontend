import { Message } from './message';
import { Group } from './group';

export class Room {
  id: number;
  name: string;
  created_by: number;
  created_at: string;
  messages: Message[];
  groups: Group[];
}

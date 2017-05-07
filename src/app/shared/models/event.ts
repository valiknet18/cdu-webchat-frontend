import { Room } from './room';
import { User } from './user';

export class Event {
  id: number;
  name: String;
  room?: Room;
  start_at: String;
  teacher?: User;
}

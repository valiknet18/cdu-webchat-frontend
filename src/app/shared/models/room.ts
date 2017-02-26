import {Message} from "./message";

export class Room {
  id: number;
  name: string;
  created_by: number;
  created_at: string;
  messages: Message[];
}

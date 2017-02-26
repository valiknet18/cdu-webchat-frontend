import {User} from "./user";

export class Message {
  message: string;
  created_at: any;
  author: User;
  hasNew?: boolean;
}

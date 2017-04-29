import {User} from "./user";

export class Message {
  msg: string;
  created_at: any;
  author: User;
  hasNew?: boolean;
}

import { Group } from "./group";

export class User {
  id: number;
  first_name: string;
  last_name: string;
  username?: string;
  email?: string;
  role?: string;
  password?: string;
  group?: Group;
  last_selected_room?: number;
}

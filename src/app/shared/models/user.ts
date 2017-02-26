import { Room } from "./room";

export class User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  is_super_admin: boolean;
  role: string;
  password?: string;
  rooms: Room[];
  last_selected_room: number;
}

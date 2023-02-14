export interface User {
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
  id: number;
}

export interface UserInformation {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

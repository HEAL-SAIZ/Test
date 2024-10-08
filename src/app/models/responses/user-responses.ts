import { IUser } from "../user";

export interface IUsersResponse {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: IUser[],
}

export interface IUserByIdResponse {
  data: IUser,
  support: {
    url: string,
    text: string,
  }
}

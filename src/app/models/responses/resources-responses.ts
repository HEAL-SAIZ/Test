import { IResorces } from "../resources";

export interface IResourcesResponse {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: IResorces[],
}

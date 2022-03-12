import FetchApi from "./FetchApi";
import BlockDTO from "../adapter/primary/DTOs/BlockDTO";

export default class RealFetchApi implements FetchApi {

  async get(url: string): Promise<BlockDTO | null> {
    try {
      const response = await fetch(url);
      let body: BlockDTO | null = null;
      if (response.status === 200) {
        const body = await response.json() as BlockDTO;
        console.log(body);
        return Promise.resolve(body);
      }
      return Promise.reject(body);

    } catch (e) {
      console.log(`Error fetching ${url}`, e);
      return Promise.reject(null);
    }
  }

}
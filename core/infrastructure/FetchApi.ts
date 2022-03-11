import BlockDTO from "../adapter/primary/DTOs/BlockDTO";

export default interface FetchApi {
  get(url: string): Promise<BlockDTO>
}
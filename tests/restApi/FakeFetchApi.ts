import FetchApi from "../../core/infrastructure/FetchApi";
import BlockDTO from "../../core/adapter/primary/DTOs/BlockDTO";

export default class FakeFetchApi implements FetchApi {
  private readonly _blockToReturnGet: BlockDTO;
  constructor(blockToReturnGet: BlockDTO) {
    this._blockToReturnGet = blockToReturnGet;
  }

  async get(url: string): Promise<BlockDTO> {
    return this._blockToReturnGet

  }

}
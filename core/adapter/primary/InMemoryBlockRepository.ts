import BlockRepository from "../../domaine/port/BlockRepository";
import BlockDTO from "./DTOs/BlockDTO";

export default class InMemoryBlockRepository implements BlockRepository {

  private _expectedBlock: BlockDTO;

  constructor(expectedBlock: BlockDTO) {
    this._expectedBlock = expectedBlock;
  }

  getBlockFromHash(blockHash: string): BlockDTO {
    return this._expectedBlock;
  }
}
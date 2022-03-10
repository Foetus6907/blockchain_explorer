import BlockRepository from "../../domaine/port/BlockRepository";
import BlockDTO from "./DTOs/BlockDTO";
import Block from "../../domaine/model/Block";
import BlockToBlockDTOmapper from "./DTOs/BlockToBlockDTOmapper";

export default class InMemoryBlockRepository implements BlockRepository {

  private readonly _expectedBlock: BlockDTO;

  constructor(expectedBlock: BlockDTO) {
    this._expectedBlock = expectedBlock;
  }

  getBlockFromHash(blockHash: string): Block {
    return BlockToBlockDTOmapper.get(this._expectedBlock);
  }
}
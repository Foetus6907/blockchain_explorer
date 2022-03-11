import BlockRepository from "../../domaine/port/BlockRepository";
import BlockDTO from "./DTOs/BlockDTO";
import Block from "../../domaine/model/Block";
import BlockDtoToBlockmapper from "./DTOs/BlockDtoToBlockmapper";

export default class InMemoryBlockRepository implements BlockRepository {

  private readonly _expectedBlock: BlockDTO;

  constructor(expectedBlock: BlockDTO) {
    this._expectedBlock = expectedBlock;
  }

  getBlockFromHash(blockHash: string): Block {
    return BlockDtoToBlockmapper.get(this._expectedBlock);
  }
}
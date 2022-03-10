import BlockRepository from "../port/BlockRepository";
import Block from "../model/Block";

export default class BitcoinChainUseCase {
  private blockRepository: BlockRepository;
  constructor(blockRepository: BlockRepository) {
    this.blockRepository = blockRepository;
  }


  getBlockFromHash(blockHash: string): Block {
    return this.blockRepository.getBlockFromHash(blockHash)
  }
}
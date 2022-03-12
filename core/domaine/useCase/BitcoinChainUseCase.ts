import BlockRepository from "../port/BlockRepository";
import Block from "../model/Block";

export default class BitcoinChainUseCase {
  private blockRepository: BlockRepository;

  constructor(blockRepository: BlockRepository) {
    this.blockRepository = blockRepository;
  }


  async getBlockFromHash(blockHash: string): Promise<Block> {
    return await this.blockRepository.getBlockFromHash(blockHash);
  }
}
import BlockRepository from "../port/BlockRepository";
import Block from "../model/Block";

export default class BitcoinChainUseCase {
  private blockRepository: BlockRepository;
  constructor(blockRepository: BlockRepository) {
    this.blockRepository = blockRepository;
  }


  getBlockFromHash(blockHash: string): Block {

    const blockDto = this.blockRepository.getBlockFromHash(blockHash);
    const block = new Block();

    block.hash = blockDto.hash;
    block.ver = blockDto.ver;
    block.fee = blockDto.fee;
    block.n_tx = blockDto.n_tx
    block.tx = blockDto.tx;

    return block
  }
}
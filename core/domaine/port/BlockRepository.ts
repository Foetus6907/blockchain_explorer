import Block from "../model/Block";

export default interface BlockRepository {
  getBlockFromHash(blockHash: string): Block;
}
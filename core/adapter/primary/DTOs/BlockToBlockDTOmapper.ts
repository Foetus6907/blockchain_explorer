import BlockDTO from "./BlockDTO";
import Block from "../../../domaine/model/Block";

export  default class BlockToBlockDTOmapper {
  static get(blockDTO: BlockDTO): Block {
    const block = new Block();
    block.hash = blockDTO.hash;
    block.version = blockDTO.ver;
    block.fee = blockDTO.fee;
    block.numberOfTransactions = blockDTO.n_tx
    block.tx = blockDTO.tx;
    block.time = blockDTO.time
    return block
  }
}

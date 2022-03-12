import BlockDTO from "./BlockDTO";
import Block from "../../../domaine/model/Block";
import Transaction from "../../../domaine/model/Transaction";

export default class BlockDtoToBlockmapper {
  static get(blockDTO: BlockDTO): Block {
    const block = new Block();
    block.hash = blockDTO.hash;
    block.version = blockDTO.ver;
    block.fee = blockDTO.fee;
    block.numberOfTransactions = blockDTO.n_tx;
    block.tx = blockDTO.tx.map((tx) => {
      const transaction = new Transaction();
      transaction.hash = tx.hash;
      transaction.out = tx.out;
      transaction.inputs = tx.inputs;
      transaction.size = tx.size;
      transaction.fee = tx.fee;
      return transaction;
    });
    block.time = blockDTO.time;
    block.height = blockDTO.height;
    block.bits = blockDTO.bits;
    block.merkelRoot = blockDTO.mrkl_root;
    block.weight = blockDTO.weight;
    block.size = blockDTO.size;
    block.nonce = blockDTO.nonce;
    return block;
  }
}




import BlockDTO from "../../adapter/primary/DTOs/BlockDTO";

export default interface BlockRepository {
  getBlockFromHash(blockHash: string): BlockDTO;
}
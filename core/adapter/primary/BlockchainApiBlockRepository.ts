import BlockRepository from "../../domaine/port/BlockRepository";
import Block from "../../domaine/model/Block";
import FetchApi from "../../infrastructure/FetchApi";
import BlockDtoToBlockmapper from "./DTOs/BlockDtoToBlockmapper";

export default class BlockchainApiBlockRepository implements BlockRepository {
  private fetchApi: FetchApi;

  constructor(fetchApi: FetchApi) {
    this.fetchApi = fetchApi;
  }

  async getBlockFromHash(blockHash: string): Promise<Block> {
    const block = await this.fetchApi.get(`https://blockchain.info/rawblock/${blockHash}`);
    return BlockDtoToBlockmapper.get(block);
  }
}
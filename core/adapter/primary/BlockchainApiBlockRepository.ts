import BlockRepository from "../../domaine/port/BlockRepository";
import Block from "../../domaine/model/Block";
import { ref, Ref } from "vue";
import FetchApi from "../../infrastructure/FetchApi";

export default class BlockchainApiBlockRepository implements BlockRepository {
  private fetchApi: FetchApi;
  constructor(fetchApi: FetchApi) {
    this.fetchApi = fetchApi;
  }
  async getBlockFromHash(blockHash: string): Promise<Block> {

    const response = await this.fetchApi.get(`https://blockchain.info/rawblock/${blockHash}`);
    return await response.json();
  }

}
import BitcoinChainUseCase from "../../core/domaine/useCase/BitcoinChainUseCase";
import BlockRepository from "../../core/domaine/port/BlockRepository";
import InMemoryBlockRepository from "../../core/adapter/primary/InMemoryBlockRepository";
import Block from "../../core/domaine/model/Block";
import { expectedBlock } from "./ExpectedBlock";

describe('UseCase', () => {
  it('should fetch a block from block hash', async () => {


    const blockRepository: BlockRepository = new InMemoryBlockRepository(expectedBlock);
    const bitcoinChainUseCase = new BitcoinChainUseCase(blockRepository);


    // Assert the rendered text of the component
    const blockHash = "00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa";
    const block: Block = bitcoinChainUseCase.getBlockFromHash(blockHash);
    expect(block.hash).toEqual(blockHash);
    expect(block.ver).toEqual(expectedBlock.ver);
    expect(block.n_tx).toEqual(expectedBlock.n_tx);
    //expect(block.time).toEqual(expectedBlock.time)
    expect(block.getTransactionLength()).toEqual(expectedBlock.tx.length);
    expect(block.getTransactionVolume()).toEqual("306.51676953");

    const feeInBTC = block.getBlockFeeInBTC();
    expect(feeInBTC).toEqual("0.16583560 BTC");
  })
})
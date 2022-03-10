import BitcoinChainUseCase from "../../core/domaine/useCase/BitcoinChainUseCase";
import BlockRepository from "../../core/domaine/port/BlockRepository";
import InMemoryBlockRepository from "../../core/adapter/primary/InMemoryBlockRepository";
import Block from "../../core/domaine/model/Block";
import { expectedBlock } from "./ExpectedBlock";

describe('App', () => {
  it('should fetch a block from hash block', async () => {

    const blockRepository: BlockRepository = new InMemoryBlockRepository(expectedBlock);
    const bitcoinChainUseCase = new BitcoinChainUseCase(blockRepository);

    // Assert the rendered text of the component
    const blockHash = "00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa";
    const block: Block = bitcoinChainUseCase.getBlockFromHash(blockHash);
    expect(block.hash).toEqual(blockHash);
    expect(block.getVersion()).toEqual("0x20000000");
    expect(block.numberOfTransactions).toEqual(expectedBlock.n_tx);
    //expect(block.time).toEqual(expectedBlock.time);
    expect(block.getTransactionLength()).toEqual(expectedBlock.tx.length);
    expect(block.getTransactionVolumeInBTC()).toEqual("306.51676953 BTC");
    expect(block.getBlockFeeInBTC()).toEqual(`${Block.satoshiToBtc(expectedBlock.fee)}0 BTC`);
    expect(block.getBlockRewardInBTC()).toEqual("6.25000000 BTC");
    expect(block.getDate()).toEqual(expectedBlock.time * 1000);
    expect(block.height).toEqual(expectedBlock.height);

    expect(block.getDifficulty()).toEqual(Block.convertBitsToDifficulty(expectedBlock.bits));
    expect(block.merkelRoot).toEqual(expectedBlock.mrkl_root);
    console.log(`${Block.convertNumberUs(expectedBlock.bits)}`)
    expect(block.getBits()).toEqual(Block.convertNumberUs(expectedBlock.bits));
    expect(block.getWeightWU()).toEqual(`${Block.convertNumberUs(expectedBlock.weight)} WU`);
    expect(block.getSize()).toEqual(`${Block.convertNumberUs(expectedBlock.size)} bytes`)
    expect(block.getNonce()).toEqual(Block.convertNumberUs(expectedBlock.nonce))
  })
})
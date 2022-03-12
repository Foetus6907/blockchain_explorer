import BitcoinChainUseCase from "../../core/domaine/useCase/BitcoinChainUseCase";
import BlockRepository from "../../core/domaine/port/BlockRepository";
import Block from "../../core/domaine/model/Block";
import Transaction from "../../core/domaine/model/Transaction";
import BlockchainApiBlockRepository from "../../core/adapter/primary/BlockchainApiBlockRepository";
import FetchApi from "../../core/infrastructure/FetchApi";
import FakeFetchApi from "./FakeFetchApi";
import { expectedBlock } from "../inMemory/ExpectedBlock";
import "isomorphic-fetch";

describe("App", () => {
  it("should fetch a block.ts from hash block.ts", async () => {

    let fakeFetchApi: FetchApi = new FakeFetchApi(expectedBlock);
    const blockRepository: BlockRepository = new BlockchainApiBlockRepository(fakeFetchApi);
    const bitcoinChainUseCase = new BitcoinChainUseCase(blockRepository);

    // Assert the rendered text of the component
    const blockHash = "00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa";
    const block: Block = await bitcoinChainUseCase.getBlockFromHash(blockHash);
    expect(block.hash).toEqual(blockHash);
    expect(block.getVersion()).toEqual("0x20000000");
    expect(block.numberOfTransactions).toEqual(expectedBlock.n_tx);
    //expect(block.ts.time).toEqual(expectedBlock.time);
    expect(block.getTransactionLength()).toEqual(expectedBlock.tx.length);
    expect(block.getTransactionVolumeInBTCString()).toEqual("306.51676953 BTC");
    expect(block.getBlockFeeInBTCString()).toEqual(`${Block.satoshiToBtc(expectedBlock.fee)}0 BTC`);
    expect(block.getBlockRewardInBTCString()).toEqual("6.25000000 BTC");
    expect(block.getDate()).toEqual(expectedBlock.time * 1000);
    expect(block.height).toEqual(expectedBlock.height);

    expect(block.getDifficulty()).toEqual(Block.convertBitsToDifficulty(expectedBlock.bits));
    expect(block.merkelRoot).toEqual(expectedBlock.mrkl_root);
    expect(block.getBits()).toEqual(Block.convertNumberUs(expectedBlock.bits));
    expect(block.getWeightWU()).toEqual(`${Block.convertNumberUs(expectedBlock.weight)} WU`);
    expect(block.getSize()).toEqual(`${Block.convertNumberUs(expectedBlock.size)} bytes`);
    expect(block.getNonce()).toEqual(Block.convertNumberUs(expectedBlock.nonce));
    expect(expectedBlock.tx.length).toBeGreaterThan(0);
    if (expectedBlock.tx.length > 0) {
      let transaction: Transaction = block.getTransactions()[0];
      expect(transaction.hash).toEqual(expectedBlock.tx[0]?.hash);
      expect(transaction.out.length).toEqual(expectedBlock?.tx[0]?.out?.length);
      expect(transaction.out.length).toBeGreaterThan(0);
      if (transaction.out.length > 0) {
        expect(transaction.out[0].addr).toEqual(expectedBlock.tx[0].out[0].addr);
        const outputValueInBtc: number = transaction.getFormatedOutput()[0]?.value;
        expect(outputValueInBtc.toFixed(8)).toEqual(6.41583560.toFixed(8));
      }

      transaction = block.getTransactions()[1];
      expect(transaction.inputs.length).toEqual(expectedBlock.tx[1].inputs.length);
      expect(transaction.out.length).toBeGreaterThanOrEqual(1);
      if (transaction.inputs.length >= 1) {
        transaction = block.getTransactions()[1];
        const formatedInput = transaction.getFormattedInputs()[0];
        expect(formatedInput.prev_out.addr).toEqual(expectedBlock.tx[1].inputs[0].prev_out.addr); // bc1qq5l34rvg7lzynr2cv8m3jf0cne8au0g6kn7s4x
        console.log(formatedInput);
        expect(formatedInput.prev_out.value.toFixed(8)).toEqual(expectedBlock.tx[1].inputs[0].prev_out.value.toFixed(8)); // 0.00851770
        // TODO weight in bytes + trx fee
        expect(transaction.size).toEqual(expectedBlock.tx[1].size);
        expect(transaction.fee).toEqual(expectedBlock.tx[1].fee);
      }

    }
  });
});
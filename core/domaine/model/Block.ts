import TransactionDTO from "../../adapter/primary/DTOs/TransactionDTO";

export default class Block {




  constructor() {
  }

  private _tx: TransactionDTO[];
  get tx(): TransactionDTO[] {
    return this._tx;
  }
  set tx(value: TransactionDTO[]) {
    this._tx = value;
  }

  private _n_tx: number;
  get n_tx(): number {
    return this._n_tx;
  }
  set n_tx(value: number) {
    this._n_tx = value;
  }

  private _hash: string;

  get hash(): string {
    return this._hash;
  }

  set hash(value: string) {
    this._hash = value;
  }

  private _ver: number;

  get ver(): number {
    return this._ver;
  }

  set ver(value: number) {
    this._ver = value;
  }

  private _fee: number;

  get fee(): number {
    return this._fee;
  }

  set fee(value: number) {
    this._fee = value;
  }

  getBlockFeeInBTC() {
    return Block.satoshiToBtc(this._fee) + " BTC";
  }

  /**
   * @param satoshi value in satoshi
   */
  private static satoshiToBtc(satoshi: number) {
    return (satoshi * 0.00000001).toFixed(8);
  }

  getTransactionLength() {
    return this._tx.length;
  }
}
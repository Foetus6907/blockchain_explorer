import TransactionDTO from "../../adapter/primary/DTOs/TransactionDTO";

export default class Block {

 private readonly blockReward = 625000000;


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

  private _fee: number = 0;

  get fee(): number {
    return this._fee;
  }

  set fee(value: number) {
    this._fee = value;
  }

  getBlockFeeInBTC() {
    return Block.satoshiToBtc(this._fee).toFixed(8) + " BTC";
  }

  /**
   * @param satoshi value in satoshi
   */
  private static satoshiToBtc(satoshi: number): number {
    return (satoshi * 0.00000001);
  }

  getTransactionLength() {
    return this._tx.length;
  }

  getTransactionVolume() {
    let volume = 0;
    this._tx.forEach((tx) => {
      tx.out.forEach((o) => {
        volume = volume + o.value;
      });
    });

    volume = volume - (this.blockReward + this._fee);
    return Block.satoshiToBtc(volume).toFixed(8);
  }
}
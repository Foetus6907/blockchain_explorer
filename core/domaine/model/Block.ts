import TransactionDTO from "../../adapter/primary/DTOs/TransactionDTO";

export default class Block {
  get bits(): number {
    return this._bits;
  }

  set bits(value: number) {
    this._bits = value;
  }
  private _bits: number;
  get height(): number {
    return this._height;
  }
  set height(value: number) {
    this._height = value;
  }
  private _height: number;
  get time(): number {
    return this._time;
  }

  set time(value: number) {
    this._time = value;
  }

 private readonly blockReward = 625000000;
  private transactionVolume: number;
  private _time: number;

  constructor() {
  }

  private _tx: TransactionDTO[];
  get tx(): TransactionDTO[] {
    return this._tx;
  }

  set tx(value: TransactionDTO[]) {
    this._tx = value;
    this.setTransactionVolume()
  }

  private _numberOfTransactions: number;
  get numberOfTransactions(): number {
    return this._numberOfTransactions;
  }

  set numberOfTransactions(value: number) {
    this._numberOfTransactions = value;
  }

  private _hash: string;

  get hash(): string {
    return this._hash;
  }

  set hash(value: string) {
    this._hash = value;
  }

  private _version: number;

  get version(): number {
    return this._version;
  }

  set version(value: number) {
    this._version = value;
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



  getTransactionLength() {
    return this._tx.length;
  }

  setTransactionVolume() {

    let volume = 0;
    this._tx.forEach((tx) => {
      tx.out.forEach((o) => {
        volume = volume + o.value;
      });
    });

    this.transactionVolume = volume - (this.blockReward + this._fee);
  }

  getBlockRewardInBTC() {
    return Block.satoshiToBtc(this.blockReward).toFixed(8) + " BTC"
  }

  getTransactionVolumeInBTC() {
    return Block.satoshiToBtc(this.transactionVolume).toFixed(8) + " BTC";
  }

  getDate() {
    return this._time*1000;
  }

  getDifficulty() {
    return Block.convertBitsToDifficulty(this.bits);
  }

  /**
   * @param satoshi value in satoshi
   */
  private static satoshiToBtc(satoshi: number): number {
    return (satoshi * 0.00000001);
  }

  private static convertBitsToDifficulty(bits: number) {
    let h = parseInt(String(bits), 10).toString(16);
    h = h.padStart(6, "0");
    return parseInt("0x00000000FFFF0000000000000000000000000000000000000000000000000000", 16) / parseInt(`0x000000000${h}00000000000000000000000000000000000000`, 16);
  }
}
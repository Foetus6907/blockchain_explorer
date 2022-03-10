import TransactionDTO from "../../adapter/primary/DTOs/TransactionDTO";

function decimalToHexa(bits: number) {
  return parseInt(String(bits), 10).toString(16);
}

export default class Block {
  set nonce(value: number) {
    this._nonce = value;
  }
  private _nonce: number;
  set size(value: number) {
    this._size = value;
  }
  private _size: number;


  set weight(value: number) {
    this._weight = value;
  }
  private _weight: number;
  get merkelRoot(): string {
    return this._merkelRoot;
  }

  set merkelRoot(value: string) {
    this._merkelRoot = value;
  }
  private _merkelRoot: string;
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

  set time(value: number) {
    this._time = value;
  }

 private readonly blockReward = 625000000;
  private transactionVolume: number;
  private _time: number;

  constructor() {
  }

  private _tx: TransactionDTO[];

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

  getVersion(): string {

    let version = decimalToHexa(this._version);
    version = `0x${version}`
    return version;
  }

  set version(value: number) {
    this._version = value;
  }

  private _fee: number = 0;


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
  static satoshiToBtc(satoshi: number): number {
    return (satoshi * 0.00000001);
  }

  static convertBitsToDifficulty(bits: number) {
    // TODO find same algorithm as used by blockchain.com to calculate difficulty. Actually using
    let h = decimalToHexa(bits);
    h = h.padStart(6, "0");
    // console.log(h);
    // console.log(parseInt(`0x${h}`, 16))
    return 0x00000000FFFF0000000000000000000000000000000000000000000000000000 / parseInt(`0x000000000${h}000000000000000000000000000000000000000000000000`, 16);
  }



  getWeightWU() {
    return `${Block.convertNumberUs(this._weight)} WU`;
  }

  /**
   * @param num
   */
  public static convertNumberUs(num: number) {
    const internationalNumberFormat = new Intl.NumberFormat("en-US");

    return internationalNumberFormat.format(num);
  }

  getBits(): string {
    return Block.convertNumberUs(this._bits);
  }

  getSize() {
    return `${Block.convertNumberUs(this._size)} bytes`;
  }

  getNonce() {
    return Block.convertNumberUs(this._nonce);
  }
}
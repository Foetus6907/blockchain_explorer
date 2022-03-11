import { TrInput, TrOutput } from "../../adapter/primary/DTOs/TransactionDTO";
import Block from "./Block";

export default class Transaction {
  get inputs(): TrInput[] {
    return this._inputs;
  }

  set inputs(value: TrInput[]) {
    this._inputs = value;
  }

  private _inputs: TrInput[]

  getFormattedInputs(): TrInput[] {
    return this._inputs.map((i) => {
      i.prev_out.value = Block.satoshiToBtc(i.prev_out.value)
      return i;
    });
  }

  getFormatedOutput(): TrOutput[] {
    return this._out.map((o) => {
      o.value = Block.satoshiToBtc(o.value)
      return o
    });
  }
  get out(): TrOutput[] {
    return this._out
  }

  set out(value: TrOutput[]) {
    this._out = value;
  }
  private _out: TrOutput[];
  get hash(): string {
    return this._hash;
  }

  set hash(value: string) {
    this._hash = value;
  }
  private _hash: string;
}
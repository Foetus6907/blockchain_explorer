export default interface TransactionDTO {
  hash: string;
  ver: number;
  vin_sz: number;
  vout_sz: number;
  size: number;
  weight: number;
  fee: number;
  relayed_by: string
  lock_time: number;
  tx_index: number;
  double_spend: boolean,
  time: number;
  block_index: number;
  block_height: number;
  inputs: TrInput[],
  out: TrOutput[]
}

export interface TrInput {
  sequence: number;
  witness: string
  script: string
  index: number;
  prev_out: TrOutput
}

export interface TrOutput {
  type: number,
  spent: boolean,
  value: number,
  spending_outpoints:{
    tx_index: number;
    n: number;
  }[],
  n: number,
  tx_index: number;
  script: string;
  addr?: string | undefined
}
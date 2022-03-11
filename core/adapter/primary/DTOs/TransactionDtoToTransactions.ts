import TransactionDTO from "./TransactionDTO";
import Transaction from "../../../domaine/model/Transaction";

export class TransactionDtoToTransactions {
  static get(transactionDTO: TransactionDTO): Transaction {
    const transaction = new Transaction();
    transaction.hash = transactionDTO.hash;

    return transaction;
  }
}
import getTransactions from '@/app/actions/getTransactions';
import TransactionItem from './TransactionItem';
import { Transaction } from '@/types/Transaction';

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="transaction-list-container">
      <h3 className="transaction-list-header">Historique</h3>
      <ul className="transaction-list">
        {transactions &&
          transactions.map((transaction: Transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
      </ul>
    </div>
  );
};

export default TransactionList;

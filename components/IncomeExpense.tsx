import getIncomeExpense from '@/app/actions/getIncomeExpense';
import { addCommas } from '@/lib/utils';

const IncomeExpense = async () => {
  const { income, expense } = await getIncomeExpense();

  return (
    <div className="income-expense-container">
      <div className="income-box">
        <h4 className="income-title">Entrées</h4>
        <p className="money income">{addCommas(Number(income?.toFixed(2)))} Fcfa </p>
      </div>
      <div className="expense-box">
        <h4 className="expense-title">Dépenses</h4>
        <p className="money expense">{addCommas(Number(expense?.toFixed(2)))} Fcfa </p>
      </div>
    </div>
  );
};

export default IncomeExpense;

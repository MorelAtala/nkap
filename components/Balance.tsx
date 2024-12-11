import getUserBalance from '@/app/actions/getUserBalance';
import { addCommas } from '@/lib/utils';

const Balance = async () => {
  const { balance } = await getUserBalance();

  return (
    <div className="balance-container">
      <h4 className="balance-title">Tes Dos</h4>
      <h1 className="balance-amount">{addCommas(Number(balance?.toFixed(2) ?? 0))} Fcfa </h1>
    </div>
  );
};

export default Balance;

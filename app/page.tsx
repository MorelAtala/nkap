import Header from '@/components/Header';
import { SignedOut, SignOutButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import AddTransaction from '@/components/AddTransaction';
import Balance from '@/components/Balance';
import IncomeExpense from '@/components/IncomeExpense';
import TransactionList from '@/components/TransactionList';
import Guest from '@/components/Guest';


const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest/>;
  }

  return (
    <main style={{ height: '100vh' }}>
      <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Bienvenue, {user.firstName}</h2>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <TransactionList />
    </main>
  );
};

export default HomePage;
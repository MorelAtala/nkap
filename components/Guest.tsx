// components/GuestHeader.tsx

import { SignInButton } from '@clerk/nextjs';
import Link from 'next/link';

const GuestHeader = () => {
  return (
    <div className="signed-out-container">
      <header className="header">
        <img src="/logo.png" alt="NKAP Logo" className="logo" />
        <h1 className="description">
          Bienvenue sur NKAP, la solution camerounaise pour traquer vos dépenses et avoir le contrôle sur vos finances.
        </h1>
      </header>
      <div className="sign-in-container">
        <SignInButton />
      </div>
    </div>
  );
};

export default GuestHeader;

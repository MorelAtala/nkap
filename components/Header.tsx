import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { checkUser } from '@/lib/checkUser';

const Header = async () => {
  const user = await checkUser()
  return (
    <>
      {/* Wenn der Benutzer eingeloggt ist */}
      <SignedIn>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="logo-container">
              <Link href="/">
                <img src="/logo.png" alt="NKAP Logo" className="navbar-logo" />
              </Link>
            </div>
            <div className="user-button-container">
              <UserButton />
            </div>
          </div>
        </nav>
      </SignedIn>

      {/* Wenn der Benutzer nicht eingeloggt ist */}
      <SignedOut>
      <nav className="navbar">
          <div className="navbar-container">
            <div className="logo-container">
              <Link href="/">
                <img src="/logo.png" alt="NKAP Logo" className="navbar-logo" />
              </Link>
            </div>
          </div>
        </nav>
      </SignedOut>
    </>
  );
};

export default Header;

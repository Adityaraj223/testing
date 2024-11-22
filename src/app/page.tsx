'use client';

import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

export default function HomePage() {
  const { isSignedIn, signOut } = useAuth();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to My App</h1>
      {!isSignedIn ? (
        <>
          <Link href="/signup">
            <button style={{ margin: '10px', padding: '10px 20px' }}>Sign Up</button>
          </Link>
          <Link href="/signin">
            <button style={{ margin: '10px', padding: '10px 20px' }}>Sign In</button>
          </Link>
        </>
      ) : (
        <button onClick={() => signOut()} style={{ padding: '10px 20px' }}>
          Sign Out
        </button>
      )}
    </div>
  );
}

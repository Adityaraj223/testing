'use client';

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Sign In</h1>
      <SignIn />
    </div>
  );
}

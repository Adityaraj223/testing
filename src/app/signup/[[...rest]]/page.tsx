'use client';

import React, { useEffect } from 'react';
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  const logSignupEvent = async () => {
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: 'signup',
          fields: {
            userId: '123', // Replace with actual user ID dynamically if possible
            email: 'user@example.com', // Replace with actual user email
            timestamp: new Date().toISOString(),
          },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error logging event: ${errorText}`);
      }

      console.log('Signup event logged successfully!');
    } catch (error) {
      console.error('Error logging signup event:', error.message);
    }
  };

  useEffect(() => {
    logSignupEvent();
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Sign Up</h1>
      <SignUp />
    </div>
  );
}

import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: 'My App',
  description: 'A Next.js app with Clerk authentication',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}

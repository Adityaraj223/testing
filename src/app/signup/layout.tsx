export default function SignupLayout({ children }: { children: React.ReactNode }) {
    return (
      <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
        <h1>Welcome to the Signup Page</h1>
        {children}
      </div>
    );
  }
  
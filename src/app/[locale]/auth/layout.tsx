export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/50" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

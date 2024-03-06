export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="border-b text-center p-2">20% off on all products.</div>
      {children}
    </div>
  );
}

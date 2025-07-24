export default function MainAppContainer({
  children,
  className,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <main className={`container mx-auto grow px-5 py-3 ${className}`}>
      {children}
    </main>
  );
}

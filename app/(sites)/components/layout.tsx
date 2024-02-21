import { Navbar } from "./_components";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="container relative flex gap-4 py-8">
      <Navbar />
      <div className="flex flex-col gap-4">{children}</div>
    </main>
  );
}

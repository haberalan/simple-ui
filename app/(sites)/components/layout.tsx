import { Navbar } from "./_components";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="container relative flex gap-4 py-8">
      <Navbar />
      <div className="flex w-full max-w-[800px] flex-col gap-12">
        {children}
      </div>
    </main>
  );
}

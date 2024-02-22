export default function Home() {
  return (
    <main className="container flex flex-1 flex-col items-center justify-center">
      <section className="flex flex-col items-center gap-4">
        <h1 className="text-display-2xl font-600">Hello World!</h1>
        <p className="max-w-[800px] text-center text-md text-gray-600">
          Crafted with TypeScript, Tailwind CSS, and Framer Motion, our library
          offers a comprehensive suite of reusable components and animations.
          Streamline development, enhance user experiences, and unleash
          creativity with our flexible and responsive toolkit.
        </p>
      </section>
    </main>
  );
}

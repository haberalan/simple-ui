import { Button } from "@/components/ui";

export default function Home() {
  return (
    <main className="container flex flex-1 flex-col items-center justify-center">
      <section className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-display-lg font-600 md:text-display-2xl">
          simple-ui
        </h1>
        <p className="max-w-[800px] text-center text-sm text-gray-600 md:text-md">
          Crafted with TypeScript, Tailwind CSS, and Framer Motion, this library
          offers a comprehensive suite of reusable components and animations.
          Streamline development, enhance user experiences, and unleash
          creativity with the flexible and responsive toolkit.
        </p>
        <div className="flex items-center gap-8">
          <Button href="/components" variant="primary" size="md">
            Components
          </Button>
          <Button
            href="https://github.com/haberalan/simple-ui"
            variant="primary"
            size="md"
          >
            Github
          </Button>
        </div>
      </section>
    </main>
  );
}

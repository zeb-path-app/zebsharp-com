import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f8f7] text-[#0a0a0a]">
      <section className="mx-auto flex w-full max-w-6xl flex-col px-8 py-10 md:px-16">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium tracking-[0.2em] text-[#5683d2] uppercase">
            Zeb Sharp
          </div>

          <div className="hidden gap-8 text-sm text-[#666] md:flex">
            <a href="#manifesto" className="transition hover:text-black">
              Manifesto
            </a>

            <a href="#building" className="transition hover:text-black">
              Building
            </a>

            <a href="#alignment" className="transition hover:text-black">
              Alignment Economy
            </a>

            <a href="#connect" className="transition hover:text-black">
              Connect
            </a>
          </div>
        </div>

        <section className="flex min-h-[88vh] items-center py-20">
          <div className="flex flex-col gap-8">
            <div className="inline-flex w-fit items-center rounded-full border border-[#d7d7d4] bg-white px-4 py-2 text-sm text-[#666] shadow-sm">
              Building aligned systems for the AI-native future
            </div>

            <h1 className="text-6xl font-semibold leading-[0.98] tracking-[-0.07em] text-black md:text-8xl">
              Building a more aligned future.
            </h1>

            <p className="max-w-2xl text-xl leading-9 text-[#5f5f5c]">
              Exploring how AI and humans can build better systems, better
              companies, and a more aligned future — together.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#manifesto"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Read the manifesto
              </a>

              <a
                href="#building"
                className="rounded-full border border-[#d2cecb] bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-[#f1f1ef]"
              >
                What I’m building
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[40px] bg-[#5683d2]/10" />

            <div className="relative overflow-hidden rounded-[40px] border border-[#d8d8d5] bg-white p-4 shadow-2xl">
              <Image
                src="/images/zeb-profile.jpg"
                alt="Zeb Sharp"
                width={1200}
                height={1400}
                className="h-auto w-full rounded-[28px] object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="border-t border-[#dfdfdc] py-24">
          <blockquote className="max-w-4xl text-4xl font-medium leading-[1.2] tracking-[-0.05em] text-black md:text-6xl">
            “The people who are crazy enough to think they can change the world
            are the ones who do.”
          </blockquote>

          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-[#777]">
            — Steve Jobs
          </p>
        </section>

        <section id="manifesto" className="border-t border-[#dfdfdc] py-24">
          <div className="mb-10 text-sm font-medium uppercase tracking-[0.2em] text-[#5683d2]">
            Manifesto
          </div>

          <div className="max-w-4xl space-y-8 text-2xl leading-[1.8] tracking-[-0.03em] text-[#232323]">
            <p>I am not building for status. I am building for alignment.</p>

            <p>
              Alignment between people and technology, incentives and outcomes,
              intelligence and humanity, vision and execution, systems and the
              people they are meant to serve.
            </p>

            <p>
              I believe many of the world’s problems are ultimately problems of
              misalignment: misaligned incentives, misaligned systems,
              misaligned information, and misaligned priorities.
            </p>

            <p>
              When systems are misaligned, trust erodes. Friction increases.
              People suffer. Progress slows.
            </p>

            <p>
              I believe the future belongs to builders who can create systems
              that are more aligned, more intelligent, and more human-centered.
            </p>

            <p>
              Artificial intelligence should not replace humanity. It should
              amplify what humans are capable of becoming.
            </p>

            <p>
              Path is one expression of that vision. Nexus is another. The
              Alignment Economy is the broader idea behind both.
            </p>

            <p>
              I believe AI and humans can build a better future together. And I
              intend to help build it.
            </p>
          </div>
        </section>

        <section id="building" className="border-t border-[#dfdfdc] py-24">
          <div className="mb-12 text-sm font-medium uppercase tracking-[0.2em] text-[#5683d2]">
            Building
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-[32px] border border-[#d8d8d5] bg-white p-8">
              <div className="mb-6 text-sm uppercase tracking-[0.2em] text-[#777]">
                Present
              </div>

              <h3 className="text-3xl font-semibold tracking-[-0.05em]">
                Path
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#666]">
                Modern consumer fintech designed to help renters navigate the
                move with aligned incentives and intelligent systems.
              </p>
            </div>

            <div className="rounded-[32px] border border-[#d8d8d5] bg-white p-8">
              <div className="mb-6 text-sm uppercase tracking-[0.2em] text-[#777]">
                Future
              </div>

              <h3 className="text-3xl font-semibold tracking-[-0.05em]">
                Nexus
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#666]">
                AI-native operational systems designed to help organizations
                think, learn, execute, and evolve intelligently.
              </p>
            </div>

            <div className="rounded-[32px] border border-[#d8d8d5] bg-white p-8">
              <div className="mb-6 text-sm uppercase tracking-[0.2em] text-[#777]">
                Philosophy
              </div>

              <h3 className="text-3xl font-semibold tracking-[-0.05em]">
                Alignment Economy
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#666]">
                A framework exploring how aligned incentives, intelligent
                systems, and AI collaboration may reshape the future of society
                and business.
              </p>
            </div>
          </div>
        </section>

        <section id="alignment" className="border-t border-[#dfdfdc] py-24">
          <div className="mb-12 text-sm font-medium uppercase tracking-[0.2em] text-[#5683d2]">
            Alignment Economy
          </div>

          <div className="max-w-4xl">
            <div>
              <h2 className="text-5xl font-semibold leading-[1.05] tracking-[-0.06em]">
                The future should benefit more people.
              </h2>

              <p className="mt-8 max-w-xl text-xl leading-9 text-[#666]">
                The Alignment Economy is an evolving framework exploring how AI,
                intelligent systems, and aligned incentives can create a more
                abundant, efficient, and human-centered future.
              </p>
            </div>

            <div className="mt-10 flex flex-col rounded-[32px] border border-[#d8d8d5] bg-white p-10">
              <p className="text-2xl leading-[1.8] tracking-[-0.03em] text-[#232323]">
                The Alignment Economy is a living framework for exploring how
                aligned incentives, intelligent systems, and AI-human
                collaboration can create a future that is more abundant, more
                efficient, and more human.
              </p>

              <a
                href="/alignment-economy"
                className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore the framework
              </a>
            </div>
          </div>
        </section>

        <section id="connect" className="border-t border-[#dfdfdc] py-24">
          <div className="mb-10 text-sm font-medium uppercase tracking-[0.2em] text-[#5683d2]">
            Connect
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://x.com/Zeblevelsup"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#d2cecb] bg-white px-6 py-3 text-sm font-medium transition hover:bg-[#f1f1ef]"
            >
              X / Twitter
            </a>

            <a
              href="https://www.linkedin.com/in/zeblevelsup"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#d2cecb] bg-white px-6 py-3 text-sm font-medium transition hover:bg-[#f1f1ef]"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/zeblevelsup/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#d2cecb] bg-white px-6 py-3 text-sm font-medium transition hover:bg-[#f1f1ef]"
            >
              Instagram
            </a>
             <a
              href="https://www.facebook.com/zeblevelsup/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#d2cecb] bg-white px-6 py-3 text-sm font-medium transition hover:bg-[#f1f1ef]"
            >
              Facebook
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

export default function AlignmentEconomyPage() {
  return (
    <main className="min-h-screen bg-[#f8f8f7] text-[#0a0a0a]">
      <section className="mx-auto flex w-full max-w-5xl flex-col px-8 py-24 md:px-16">
        <div className="mb-8 inline-flex w-fit items-center rounded-full border border-[#d7d7d4] bg-white px-4 py-2 text-sm text-[#666] shadow-sm">
          Alignment Economy · v0.1
        </div>

        <h1 className="max-w-5xl text-6xl font-semibold leading-[0.98] tracking-[-0.07em] text-black md:text-8xl">
          How businesses win when customers win.
        </h1>

        <p className="mt-10 max-w-3xl text-2xl leading-[1.7] tracking-[-0.03em] text-[#4f4f4c]">
          An evolving framework exploring how aligned incentives, intelligent
          systems, and AI-human collaboration may shape the next era of
          business, technology, and society.
        </p>

        <div className="mt-24 border-t border-[#dfdfdc] pt-16">
          <div className="mb-10 text-sm font-medium uppercase tracking-[0.2em] text-[#5683d2]">
            Preface
          </div>

          <h2 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.06em]">
            Human + AI, not tool + user.
          </h2>

          <p className="mt-8 max-w-4xl text-2xl leading-[1.8] tracking-[-0.03em] text-[#232323]">
            The first alignment is the collaboration itself: human judgment,
            intuition, and values working with artificial intelligence as a
            thinking partner — not a replacement, not a novelty, and not a
            shortcut around responsibility.
          </p>
        </div>

        <div className="mt-24 border-t border-[#dfdfdc] pt-16">
          <div className="mb-10 text-sm font-medium uppercase tracking-[0.2em] text-[#5683d2]">
            The premise
          </div>

          <div className="space-y-8">
            <p className="max-w-4xl text-2xl leading-[1.8] tracking-[-0.03em] text-[#232323]">
              Many modern systems are optimized around misaligned incentives.
              Businesses extract value. Consumers create value without sharing
              in it. Technology increases efficiency without always improving
              the human experience.
            </p>

            <p className="max-w-4xl text-2xl leading-[1.8] tracking-[-0.03em] text-[#232323]">
              The Alignment Economy asks a simple question: what happens when
              systems are redesigned so value creation, value capture, and human
              outcomes move in the same direction?
            </p>
          </div>
        </div>

        <div className="mt-24 border-t border-[#dfdfdc] pt-16">
          <div className="mb-10 text-sm font-medium uppercase tracking-[0.2em] text-[#5683d2]">
            Public framework
          </div>

          <div className="grid gap-6">
            {[
              [
                "Part I — The Broken Economy",
                "Modern business drifted from service to extraction. Convenience made the imbalance easier to accept, but trust has been eroding because many systems no longer feel aligned with the people they serve.",
              ],
              [
                "Part II — The Alignment Economy",
                "Alignment means shared benefit tied to shared outcomes. The core mechanism is simple: consumers create value, businesses capture value, value is shared, trust increases, usage increases, and more value is created.",
              ],
              [
                "Part III — Path: The First Proof",
                "Path is the first operating example: a practical attempt to realign incentives inside the housing ecosystem so renters participate more directly in the value they help create.",
              ],
              [
                "Part IV — The Expansion of Alignment",
                "The same logic can extend into insurance, utilities, moving services, financial tools, marketplaces, and other systems where consumers create value but rarely share in the upside.",
              ],
              [
                "Part V — The Alignment Future",
                "The companies that win in the next era may be the ones that share value, build trust, optimize long-term outcomes, and use AI to amplify human capability instead of replacing human agency.",
              ],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-[32px] border border-[#d8d8d5] bg-white p-8"
              >
                <h2 className="text-3xl font-semibold tracking-[-0.05em]">
                  {title}
                </h2>

                <p className="mt-4 text-xl leading-9 text-[#666]">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-[#dfdfdc] pt-16">
          <div className="mb-10 text-sm font-medium uppercase tracking-[0.2em] text-[#5683d2]">
            Core ideas
          </div>

          <div className="space-y-14">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.05em]">
                Misalignment creates friction.
              </h2>

              <p className="mt-4 max-w-3xl text-xl leading-9 text-[#666]">
                When incentives drift apart, trust erodes. Complexity rises.
                People hesitate. Progress slows. The system may still function,
                but it no longer feels like it serves the people inside it.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.05em]">
                Consumers create value.
              </h2>

              <p className="mt-4 max-w-3xl text-xl leading-9 text-[#666]">
                Consumers create attention, data, referrals, market movement,
                loyalty, and social proof. In many systems, they help create the
                value but rarely participate meaningfully in the upside.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.05em]">
                Alignment is profitable, not charitable.
              </h2>

              <p className="mt-4 max-w-3xl text-xl leading-9 text-[#666]">
                Shared value is not generosity. It is system design. When
                customers benefit from the value they help create, trust
                increases, usage increases, and better economics can compound.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.05em]">
                AI should amplify humanity.
              </h2>

              <p className="mt-4 max-w-3xl text-xl leading-9 text-[#666]">
                Artificial intelligence should increase human capability,
                leverage, creativity, and access to intelligent systems — not
                diminish human agency.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.05em]">
                The next great companies may feel alive.
              </h2>

              <p className="mt-4 max-w-3xl text-xl leading-9 text-[#666]">
                Future organizations may operate less like static software and
                more like adaptive systems that continuously learn, improve, and
                collaborate with humans.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-[#dfdfdc] pt-16">
          <div className="mb-10 text-sm font-medium uppercase tracking-[0.2em] text-[#5683d2]">
            The alignment loop
          </div>

          <div className="rounded-[32px] border border-[#d8d8d5] bg-white p-10">
            <ol className="space-y-4 text-xl leading-9 text-[#232323]">
              <li>1. Consumer creates value</li>
              <li>2. Business captures value</li>
              <li>3. Value is shared</li>
              <li>4. Trust increases</li>
              <li>5. Usage increases</li>
              <li>6. More value is created</li>
            </ol>
          </div>
        </div>

        <div className="mt-24 border-t border-[#dfdfdc] pt-16">
          <div className="mb-10 text-sm font-medium uppercase tracking-[0.2em] text-[#5683d2]">
            First proof
          </div>

          <h2 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.06em]">
            Path is the first operating example.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#666]">
            Path applies the Alignment Economy to housing by redesigning how
            renters participate in the value created during the apartment search
            and move-in process. The goal is simple: build a system where the
            platform wins because the customer wins.
          </p>
        </div>

        <div className="mt-24 rounded-[32px] border border-[#d8d8d5] bg-white p-10">
          <p className="text-xl leading-9 text-[#666]">
            This is an intentionally early version. Additional essays,
            principles, diagrams, systems, examples, and case studies will be
            added over time.
          </p>
        </div>
      </section>
    </main>
  );
}
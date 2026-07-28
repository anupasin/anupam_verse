import type { Metadata } from "next";
import { getArticles, getProjects } from "@/lib/content";
import { ArticleRow, ProjectCard } from "@/components/content-cards";
import { Credibility } from "@/components/credibility";
import {
  ButtonLink,
  Cell,
  CellGrid,
  Container,
  Kicker,
  Rule,
  Section,
  SectionHeading,
} from "@/components/primitives";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const OUTCOMES = [
  {
    mark: "A",
    kind: "Done by me",
    title: "Transcription and document production",
    body: "Medical, legal and general transcription produced to a standard that survives scrutiny — correct speaker turns, real punctuation, consistent formatting, the domain vocabulary right. Fifteen years of it, and still the work I do most weeks.",
    examples: "Medical transcription · Legal and court transcripts · Editing and quality control",
  },
  {
    mark: "B",
    kind: "Done by me",
    title: "Writing and editorial",
    body: "Long-form essays, explanatory writing, and the unglamorous editing that turns a draft into something publishable. I run two publications of my own, so this isn't a service invented for a website.",
    examples: "Content writing · Editing and refinement · Documentation",
  },
  {
    mark: "C",
    kind: "Built for you",
    title: "Systems that remove the repetitive work",
    body: "The tasks too varied to script and too dull to keep doing by hand. I built exactly this for my own transcription work long before I built it for anyone else — which is the only reason I can tell you honestly where it stops working.",
    examples: "Workflow automation · Internal tools · Custom web applications",
  },
  {
    mark: "D",
    kind: "Built for you",
    title: "Making your own information usable",
    body: "You already have the knowledge. It's in old files, past matters, email threads, and three people's memory. The work isn't acquiring it — it's giving it a shape you can actually ask questions of, without it going stale the week after I leave.",
    examples: "Knowledge management · Documentation systems · Search and retrieval",
  },
];

const STEPS = [
  {
    number: "01",
    name: "Diagnose",
    duration: "About a week",
    body: "A fixed-fee look at how the work actually flows today — not how the process document says it does. You get a written assessment: what's worth automating, what isn't, what it would cost, and what it would save. It's useful even if you stop there, and some people should.",
  },
  {
    number: "02",
    name: "Build",
    duration: "Two to six weeks, typically",
    body: "Scope agreed in writing before I start. You use the thing while I'm building it, not after — that's how we find out what it actually needs to do. Nothing is called finished on my say-so.",
  },
  {
    number: "03",
    name: "Hand over",
    duration: "Then I'm out of the way",
    body: "Documentation written for the person who'll use it, a walkthrough with whoever needs one, and every account in your name. If you need me later it should be because something changed — not because I made myself necessary.",
  },
];

const PLAINLY = [
  {
    title: "I'll tell you when you don't need AI",
    body: "A clear rule and a well-built spreadsheet beat a model more often than anyone selling AI will admit. Finding that out early is worth what the diagnostic costs.",
  },
  {
    title: "Fixed scope, agreed before I start",
    body: "If the work changes, we talk about it before the invoice does. You should never be surprised by a number at the end of a project.",
  },
  {
    title: "You own everything",
    body: "Code, data, accounts, documentation. No lock-in, no proprietary layer only I can maintain, no retainer you can't leave.",
  },
];

export default function HomePage() {
  const articles = getArticles().slice(0, 3);
  const featuredProjects = getProjects().filter((project) => project.featured).slice(0, 3);

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <Container>
        <section className="py-14 sm:py-20 lg:py-24">
          <Kicker className="mb-6">Transcription · Writing · AI systems</Kicker>

          <h1 className="optical-left max-w-[17ch] text-display font-extrabold tracking-[-0.02em] text-strong">
            I do the precision work. And I build the systems that make it faster.
          </h1>

          <div className="mt-9 max-w-[58ch] space-y-5 text-[18px] leading-[1.62] text-body">
            <p>
              I&rsquo;m Anupam Singh. Fifteen years into medical and legal transcription, I still
              take the work &mdash; the kind where a wrong word isn&rsquo;t a typo, it&rsquo;s a
              different fact. Alongside it I write, edit, and build software.
            </p>
            <p>
              Those aren&rsquo;t separate careers. Doing the work daily is what taught me where
              automated language systems quietly fail, and it&rsquo;s why the pipeline I built for my
              own transcripts &mdash; formatting, punctuation, speaker turns, the hundred small
              judgements between raw speech-to-text and a finished document &mdash; actually holds
              up. I build that kind of system for other people now.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Start a conversation</ButtonLink>
            <ButtonLink href="/services" variant="ghost">
              What I do
            </ButtonLink>
          </div>
        </section>
      </Container>

      {/* ── Credibility ────────────────────────────────────────────────── */}
      <Container>
        <Credibility />
      </Container>

      {/* ── What I do ──────────────────────────────────────────────────── */}
      <Container>
        <Section labelledBy="outcomes-title">
          <SectionHeading
            id="outcomes-title"
            kicker="What I do"
            title="Two things I do, and two things I build."
            lede="The first two I deliver myself. The second two I design and hand over. They're the same discipline from opposite ends — which is why I'm sceptical of automating work I haven't done by hand."
            className="mb-10 [&_h2]:max-w-[24ch]"
          />

          <CellGrid columns={2}>
            {OUTCOMES.map((outcome) => (
              <Cell key={outcome.mark} className="flex flex-col">
                <div className="flex items-baseline gap-3">
                  <span aria-hidden="true" className="text-base font-extrabold text-accent-text">
                    {outcome.mark}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                    {outcome.kind}
                  </span>
                </div>
                <h3 className="mt-3 text-[23px] font-extrabold tracking-[-0.01em] text-strong">
                  {outcome.title}
                </h3>
                <p className="mt-3 max-w-[44ch] flex-1 text-[15.5px] leading-[1.58] text-body">
                  {outcome.body}
                </p>
                <p className="mt-6 border-t border-divider-soft pt-5 text-[13px] leading-relaxed text-faint">
                  {outcome.examples}
                </p>
              </Cell>
            ))}
          </CellGrid>

          <div className="mt-8">
            <ButtonLink href="/services" variant="secondary">
              How each of these actually works
            </ButtonLink>
          </div>
        </Section>
      </Container>

      <Container>
        <Rule />
      </Container>

      {/* ── How I work ─────────────────────────────────────────────────── */}
      <Container>
        <Section labelledBy="process-title">
          <SectionHeading
            id="process-title"
            kicker="How I work"
            title="Three steps, and you always know which one you're in."
            className="mb-10"
          />

          <div className="border-t-2 border-divider">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="grid gap-x-8 gap-y-3 border-b border-divider-soft py-8 sm:grid-cols-[64px_1fr] lg:grid-cols-[64px_200px_1fr]"
              >
                <span className="tnum text-[15px] font-extrabold text-accent-text">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-[20px] font-extrabold text-strong">{step.name}</h3>
                  <p className="mt-1 text-[13px] text-faint">{step.duration}</p>
                </div>
                <p className="max-w-[62ch] text-[15.5px] leading-[1.62] text-body sm:col-span-2 lg:col-span-1">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </Container>

      {/* ── Plainly ────────────────────────────────────────────────────── */}
      <section className="bg-surface">
        <Container>
          <div className="py-14 sm:py-20">
            <Kicker className="mb-3">Plainly</Kicker>
            <h2 className="mb-8 max-w-[22ch] text-subtitle text-strong">
              Three things I&rsquo;d rather say up front.
            </h2>
            <CellGrid columns={3}>
              {PLAINLY.map((item) => (
                <Cell key={item.title} tone="surface">
                  <div className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-2.5 flex-none bg-accent-text"
                    />
                    <div>
                      <h3 className="text-[17px] font-extrabold text-strong">{item.title}</h3>
                      <p className="mt-2 max-w-[38ch] text-[15px] leading-[1.55] text-body">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Cell>
              ))}
            </CellGrid>
          </div>
        </Container>
      </section>

      {/* ── Writing ────────────────────────────────────────────────────── */}
      {articles.length > 0 ? (
        <Container>
          <Section labelledBy="writing-title">
            <SectionHeading
              id="writing-title"
              kicker="Writing"
              title="The interesting question was never whether it can. It's whether it should, and who decides."
              lede="The method is how I work; the writing is how I think. Notes on AI, systems, and the parts of thinking that don't automate."
              className="mb-10 [&_h2]:max-w-[26ch]"
            />

            <div>
              {articles.map((article) => (
                <ArticleRow key={article.slug} article={article} />
              ))}
            </div>

            <div className="mt-8">
              <ButtonLink href="/articles" variant="secondary">
                All writing
              </ButtonLink>
            </div>
          </Section>
        </Container>
      ) : null}

      {/* ── Selected work — appears once a project is marked featured ───── */}
      {featuredProjects.length > 0 ? (
        <Container>
          <Section labelledBy="work-title">
            <SectionHeading
              id="work-title"
              kicker="Selected work"
              title="Built for a specific problem."
              className="mb-10"
            />
            <CellGrid columns={featuredProjects.length >= 3 ? 3 : 2}>
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </CellGrid>
          </Section>
        </Container>
      ) : null}

      {/* ── Close ──────────────────────────────────────────────────────── */}
      <section className="bg-accent text-on-accent">
        <Container>
          <div className="py-16 sm:py-24 lg:py-28">
            <h2 className="optical-left max-w-[17ch] text-poster font-extrabold tracking-[-0.02em]">
              Start with the one process that costs you a day a week.
            </h2>
            <p className="mt-7 max-w-[54ch] text-[17px] leading-[1.62] opacity-90">
              You don&rsquo;t need to know whether AI is the answer. Working that out is the job.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="invert">
                Get in touch
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

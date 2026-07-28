import type { Metadata } from "next";
import {
  ButtonLink,
  Cell,
  CellGrid,
  Container,
  Kicker,
  Rule,
  Section,
} from "@/components/primitives";

export const metadata: Metadata = {
  title: "About",
  description:
    "Twenty years transcribing medical and legal records — still doing it, and building the systems that support it. Why the two halves belong together.",
  alternates: { canonical: "/about" },
};

const TOOLS = [
  {
    heading: "Language work",
    items: "Medical and legal transcription · Editing and QC · Long-form writing",
  },
  {
    heading: "Build",
    items: "Next.js · React · TypeScript · Tailwind CSS · Supabase · Vercel",
  },
  {
    heading: "Models and assistance",
    items: "Claude · Claude Code · GPT · AI-assisted development",
  },
];

export default function AboutPage() {
  return (
    <>
      <Container>
        <section className="py-16 sm:py-20 lg:py-24">
          <Kicker className="mb-5">About</Kicker>
          <h1 className="optical-left max-w-[18ch] text-poster font-extrabold tracking-[-0.02em] text-strong">
            I still do the work I build systems for.
          </h1>
        </section>
      </Container>

      <Container>
        <Rule />
      </Container>

      <Container>
        <Section>
          <div className="prose">
            <p className="!text-[19px] !leading-[1.66] text-strong">
              I transcribe medical and legal material. I have done for twenty years, and I still do
              &mdash; currently with Transcription For Everyone. That is not a paragraph of backstory
              on the way to the AI part. It is the foundation of the AI part, and I&rsquo;d rather be
              clear about the order.
            </p>

            <p>
              If you haven&rsquo;t been near that world: it is the work of taking a recording of a
              consultation or a deposition and producing a document precise enough to be relied on
              afterwards. Someone&rsquo;s diagnosis is in it. Someone&rsquo;s testimony is in it. A
              wrong word there is not a typo. It is a different fact.
            </p>

            <p>
              A great deal of the time I am the last person to look at a document before it becomes
              the record. That job teaches a specific and slightly unusual skill. Not writing,
              exactly, and not editing either. <strong>Noticing.</strong> Noticing that a sentence is
              fluent and confident and also wrong. Noticing that a figure doesn&rsquo;t match the
              figure three pages earlier. Noticing the particular texture a transcript takes on when
              the person producing it stopped listening and started predicting what should come next.
            </p>

            <p>
              Which is, I&rsquo;d argue, the single most relevant instinct anyone can bring to
              working with large language models.
            </p>

            <p>
              An LLM is a fluent, confident predictor. It fails in almost exactly the way a tired
              transcriber fails: not by producing nonsense, but by producing something plausible,
              well-formed, and subtly untrue &mdash; and then presenting it with the same tone as
              everything it got right. Most of this industry is currently learning to notice that.
              I&rsquo;ve been doing it since long before anyone called it a hallucination.
            </p>

            <h2>The pipeline</h2>

            <p>
              At some point I stopped only doing the work and started building the apparatus around
              it. I now run my own pipeline for turning raw speech-to-text into a finished
              transcript: speaker identification, paragraph and question-and-answer segmentation,
              punctuation, the spacing and formatting conventions a given format demands, and the
              domain vocabulary of medicine and law.
            </p>

            <p>
              None of it replaces the judgement at the end &mdash; that is precisely the point. The
              pipeline absorbs the mechanical layer so my attention is free for the part that
              genuinely needs a person: the ambiguous word, the crosstalk, the thing a speaker
              plainly meant but did not quite say. Automate the wrong half of that job and you get a
              document that reads beautifully and cannot be trusted.
            </p>

            <p>
              I mention it because it is the honest basis for everything else on this site. When I
              tell a client which parts of their process are safe to automate, I am not reasoning
              from a case study. I am reasoning from having got it wrong on my own work first.
            </p>

            <h2>The writing</h2>

            <p>
              I write, and I publish.{" "}
              <a href="https://consciouschronicles.com" target="_blank" rel="noopener noreferrer">
                Conscious Chronicles
              </a>{" "}
              is where I think in public about consciousness, philosophy and science &mdash; long
              essays that are more interested in asking a question well than in answering it
              quickly.{" "}
              <a href="https://sarojvidyalaya.com" target="_blank" rel="noopener noreferrer">
                Saroj Vidyalaya
              </a>{" "}
              is an educational project: difficult ideas made approachable through metaphor and
              analogy, built in memory of Saroj Singh, a teacher.
            </p>

            <p>
              Writing and transcription are closer than they look. Both are the practice of getting
              language to carry meaning exactly, under constraint, with nobody to blame afterwards
              but you. I take editorial work for other people for the same reason I take transcripts:
              I am good at the part most people find tedious.
            </p>

            <h2>The building</h2>

            <p>
              I build with Next.js, React, TypeScript, Tailwind, Supabase and Vercel, with Claude
              and GPT models doing a considerable amount of the typing. I want to be straightforward
              about that last part: I use AI heavily to build things. It would be strange to sell AI
              systems while pretending otherwise, and it&rsquo;s a large part of why a solo
              practitioner can now take on work that would once have needed a small team.
            </p>

            <p>
              What I don&rsquo;t outsource is the judgement. What to build. What it should refuse to
              do. Where it will fail quietly. Whether it should exist at all. That is the entire
              job, and no model does it for you.
            </p>

            <p>
              I like solving problems and designing systems considerably more than I like writing
              code. Code is a tool. So is a model. So, very often, is a well-designed spreadsheet
              and a decision that somebody finally makes.
            </p>

            <h2>What this site is</h2>

            <p>
              AnupamVerse isn&rsquo;t a portfolio, and I&rsquo;d rather it didn&rsquo;t become one.
              It&rsquo;s where I write down what I&rsquo;m working out, show a small number of
              things I&rsquo;ve built, and take on work that&rsquo;s genuinely interesting.
            </p>

            <p>
              If that sounds like an argument against hiring me, it isn&rsquo;t. It&rsquo;s the
              reason I&rsquo;ll tell you honestly when a project isn&rsquo;t worth doing &mdash;
              which, if you&rsquo;ve dealt with consultants before, you may find is the rarer
              service.
            </p>
          </div>
        </Section>
      </Container>

      <section className="bg-surface">
        <Container>
          <div className="py-14 sm:py-20">
            <Kicker className="mb-3">Tools</Kicker>
            <h2 className="mb-8 max-w-[24ch] text-subtitle text-strong">
              What I build with, for anyone who wants the specifics.
            </h2>
            <CellGrid columns={3}>
              {TOOLS.map((group) => (
                <Cell key={group.heading} tone="surface">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-accent-text">
                    {group.heading}
                  </p>
                  <p className="mt-3 text-[15.5px] leading-[1.6] text-body">{group.items}</p>
                </Cell>
              ))}
            </CellGrid>
            <p className="mt-8 max-w-[58ch] text-[15.5px] leading-[1.62] text-muted">
              This list is a description, not a commitment. The right answer to a problem is
              sometimes none of the above.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-accent text-on-accent">
        <Container>
          <div className="py-16 sm:py-24">
            <h2 className="optical-left max-w-[18ch] text-poster font-extrabold tracking-[-0.02em]">
              If any of that sounds useful, say hello.
            </h2>
            <div className="mt-9">
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

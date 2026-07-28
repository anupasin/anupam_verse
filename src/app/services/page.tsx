import type { Metadata } from "next";
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
  title: "Services",
  description:
    "Medical and legal transcription, writing and editorial work, plus the AI systems and internal tools I design and hand over.",
  alternates: { canonical: "/services" },
};

const SERVICES = [
  {
    mark: "A",
    kind: "Done by me",
    title: "Transcription and document production",
    problem:
      "You have recordings that need to become documents precise enough to be relied on — and the automatic transcript isn't close enough to use.",
    body: "Medical, legal and general transcription, fifteen years in and still my regular work. Automatic speech-to-text has become genuinely good at words and remains poor at everything else: who was speaking, where the sentence ends, what the clinician actually meant by an abbreviation, how a jurisdiction expects its transcripts formatted. I run my own pipeline for the mechanical layer — speaker identification, paragraph and Q&A segmentation, punctuation, spacing and formatting conventions — which frees my attention for the ambiguous word, the crosstalk, and the thing a speaker plainly meant but did not quite say.",
    looks: [
      "Medical transcription: consultations, procedures and correspondence with the vocabulary correct",
      "Legal and court work: depositions, examinations and hearings in the format the jurisdiction expects",
      "Editing and quality control on transcripts someone else produced, including machine output",
    ],
    sells: "Medical transcription · Legal and court transcripts · Editing and quality control",
  },
  {
    mark: "B",
    kind: "Done by me",
    title: "Writing and editorial",
    problem:
      "You have something worth saying and a draft that doesn't yet say it — or no draft, and no time to make one.",
    body: "Long-form essays, explanatory writing, and the unglamorous editing that turns a draft into something publishable. I run two publications of my own — one on consciousness and philosophy, one on making difficult ideas approachable — so this isn't a service invented for a website. The particular thing I'm good at is the failure mode where writing is technically correct and completely useless: accurate, rigorous, and comprehensible only to someone who didn't need it.",
    looks: [
      "Essays and articles written from your material and in your voice, not a model's",
      "Editing that fixes the argument rather than just the commas",
      "Documentation and explanatory writing for a non-specialist reader",
    ],
    sells: "Content writing · Editing and refinement · Documentation",
  },
  {
    mark: "C",
    kind: "Built for you",
    title: "Systems that remove the repetitive work",
    problem:
      "You or someone you pay is spending hours a week on work that is too varied to script and too dull to keep doing by hand.",
    body: "Reading a stack of documents to pull out the same six facts. Turning notes into the format the file needs. Producing the draft that always requires the same three edits. Or the process that runs on a spreadsheet held together by convention and one person's memory, where the honest answer is a small purpose-built tool rather than a subscription to something that does forty things you don't need. This class of work sat between \"automate it\" and \"hire someone\" for decades. In the last two years it moved — and I know how far, because I moved my own transcription work across it first.",
    looks: [
      "A pipeline that reads incoming documents and produces the structured output your process needs",
      "An internal tool that replaces the spreadsheet and the tribal knowledge around it",
      "A working prototype in days rather than months, so you can decide with something real in front of you",
    ],
    sells: "Workflow automation · Internal tools · Custom web applications · Rapid prototyping",
  },
  {
    mark: "D",
    kind: "Built for you",
    title: "Making your own information usable",
    problem:
      "The knowledge exists — in old matters, past projects, email threads and people's heads — but nobody can get at it when they need it.",
    body: "This is the problem most often mislabelled as an AI problem when it's really an organisation problem with an AI-shaped solution at the end. The work is deciding what's worth keeping, giving it a structure, and only then putting retrieval on top. Skip the first two and you get a system that answers confidently and wrongly, which is worse than no system at all.",
    looks: [
      "A searchable, answerable store of your own documents — with citations back to the source",
      "Documentation that stays current because producing it is part of the work, not a project",
      "A structure for new material so the problem doesn't rebuild itself in eighteen months",
    ],
    sells: "Knowledge management · Documentation systems · Search and retrieval",
  },
];

const CLIENTS = [
  "Solo professionals and small practices",
  "Law firms and legal support teams",
  "Consultants and independent advisors",
  "Researchers and academics",
  "Writers, editors and creators",
  "Anyone drowning in repetitive information work",
];

export default function ServicesPage() {
  return (
    <>
      <Container>
        <section className="py-16 sm:py-20 lg:py-24">
          <Kicker className="mb-5">Services</Kicker>
          <h1 className="optical-left max-w-[20ch] text-poster font-extrabold tracking-[-0.02em] text-strong">
            Work I take on, and systems I build.
          </h1>
          <div className="mt-8 max-w-[58ch] space-y-5 text-[18px] leading-[1.62] text-body">
            <p>
              The first two are work I do myself &mdash; transcription and editorial, delivered as a
              finished document. The second two are systems I design, build and hand over.
            </p>
            <p>
              They are the same discipline from opposite ends, and I&rsquo;d rather not pretend
              otherwise: I am sceptical of automating work I haven&rsquo;t done by hand, which is
              most of what makes the building half worth buying.
            </p>
            <p>
              Build engagements start with a fixed-fee diagnostic, because the first useful thing I
              can do is tell you honestly what&rsquo;s worth building. Transcription and editorial
              work you can simply commission.
            </p>
          </div>
        </section>
      </Container>

      <Container>
        <Rule />
      </Container>

      {SERVICES.map((service, index) => (
        <Container key={service.mark}>
          <Section
            className={index < SERVICES.length - 1 ? "border-b border-divider-soft" : undefined}
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div>
                <div className="flex items-baseline gap-3">
                  <span aria-hidden="true" className="text-base font-extrabold text-accent-text">
                    {service.mark}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                    {service.kind}
                  </span>
                </div>
                <h2 className="mt-3 max-w-[18ch] text-title text-strong">{service.title}</h2>
                <p className="mt-6 max-w-[46ch] border-l-2 border-accent-text pl-5 text-[17px] leading-[1.6] text-strong">
                  {service.problem}
                </p>
              </div>

              <div>
                <p className="max-w-[56ch] text-[16.5px] leading-[1.68] text-body">
                  {service.body}
                </p>

                <h3 className="mt-8 text-[13px] font-semibold uppercase tracking-[0.08em] text-faint">
                  What it usually looks like
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.looks.map((item) => (
                    <li key={item} className="flex gap-4 text-[15.5px] leading-[1.55] text-body">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-2 flex-none bg-accent-text"
                      />
                      <span className="max-w-[52ch]">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 border-t border-divider-soft pt-5 text-[13px] leading-relaxed text-faint">
                  {service.sells}
                </p>
              </div>
            </div>
          </Section>
        </Container>
      ))}

      {/* ── Engagement ─────────────────────────────────────────────────── */}
      <section className="bg-surface">
        <Container>
          <div className="py-14 sm:py-20">
            <SectionHeading
              kicker="The engagement"
              title="Start with a diagnostic."
              lede="A fixed fee and a fixed length. You get a written assessment of where the time is going, what's worth automating, what isn't, and what each option would cost to build. No obligation to build anything with me afterwards — and the assessment is written so that you could hand it to someone else."
              className="mb-10 [&_p]:max-w-[62ch]"
            />

            <CellGrid columns={3}>
              <Cell tone="surface">
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-accent-text">
                  What you get
                </p>
                <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.58] text-body">
                  A written assessment: the current flow mapped honestly, a ranked shortlist of what
                  to change, and an estimate for each.
                </p>
              </Cell>
              <Cell tone="surface">
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-accent-text">
                  What it costs
                </p>
                <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.58] text-body">
                  A fixed fee agreed before we start, scaled to the size of the problem. Quoted after
                  a short conversation, never on a meter.
                </p>
              </Cell>
              <Cell tone="surface">
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-accent-text">
                  What I need
                </p>
                <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.58] text-body">
                  A couple of hours of the person who actually does the work, and permission to look
                  at real examples of it.
                </p>
              </Cell>
            </CellGrid>
          </div>
        </Container>
      </section>

      {/* ── Who this is for ────────────────────────────────────────────── */}
      <Container>
        <Section>
          <SectionHeading
            kicker="Who this is for"
            title="Small enough to move, serious enough to care about accuracy."
            className="mb-10 [&_h2]:max-w-[26ch]"
          />
          <ul className="grid gap-x-12 gap-y-4 sm:grid-cols-2">
            {CLIENTS.map((client) => (
              <li
                key={client}
                className="flex gap-4 border-b border-divider-soft py-4 text-[16px] text-body"
              >
                <span aria-hidden="true" className="mt-2.5 size-2 flex-none bg-accent-text" />
                {client}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-[58ch] text-[16px] leading-[1.62] text-muted">
            If you&rsquo;re a large organisation with a procurement process, I&rsquo;m probably the
            wrong choice &mdash; not because the work would be harder, but because you&rsquo;d be
            paying for a single person&rsquo;s calendar. I&rsquo;ll say so early.
          </p>
        </Section>
      </Container>

      <section className="bg-accent text-on-accent">
        <Container>
          <div className="py-16 sm:py-24">
            <h2 className="optical-left max-w-[18ch] text-poster font-extrabold tracking-[-0.02em]">
              Tell me what&rsquo;s taking too long.
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

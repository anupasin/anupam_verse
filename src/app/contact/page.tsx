import type { Metadata } from "next";
import { mailtoHref, siteConfig } from "@/config/site";
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
  title: "Contact",
  description:
    "Tell me about something that's taking too long. You don't need to know whether AI is the answer — working that out is the job.",
  alternates: { canonical: "/contact" },
};

const HELPFUL = [
  {
    heading: "What the task is",
    body: "In plain language. \"Every new matter, someone reads forty pages and fills in a form\" is perfect. No need to describe a solution.",
  },
  {
    heading: "How often it happens",
    body: "Daily, weekly, twenty times a month. This is usually the number that decides whether anything is worth building.",
  },
  {
    heading: "Who does it now",
    body: "You, an assistant, a rotating cast of whoever is free. It changes the answer more than people expect.",
  },
  {
    heading: "What good looks like",
    body: "How you'd know it had been done well. This is the part most briefs leave out and the part I most need.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Container>
        <section className="py-16 sm:py-20 lg:py-24">
          <Kicker className="mb-5">Contact</Kicker>
          <h1 className="optical-left max-w-[16ch] text-poster font-extrabold tracking-[-0.02em] text-strong">
            Let&rsquo;s talk about the actual problem.
          </h1>

          <div className="mt-8 max-w-[58ch] space-y-5 text-[18px] leading-[1.62] text-body">
            <p>
              The most useful first message is a short description of something that is currently
              taking too long. You don&rsquo;t need to have decided whether AI is the answer &mdash;
              working that out is the job, and I&rsquo;d rather do it properly than have you
              pre-diagnose it.
            </p>
            <p>
              I read everything and reply to anything specific. If it isn&rsquo;t a fit I&rsquo;ll
              say so plainly, and point you somewhere better if I can think of one.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href={mailtoHref()}>Email me</ButtonLink>
            <a
              href={mailtoHref()}
              className="text-[16px] text-accent-text underline underline-offset-4 transition-colors duration-150 hover:text-strong"
            >
              {siteConfig.email}
            </a>
          </div>
        </section>
      </Container>

      <Container>
        <Rule />
      </Container>

      <Container>
        <Section>
          <Kicker className="mb-3">What helps</Kicker>
          <h2 className="mb-4 max-w-[24ch] text-subtitle text-strong">
            Four things worth including.
          </h2>
          <p className="mb-10 max-w-[56ch] text-[17px] leading-[1.62] text-muted">
            None of this is required. Two paragraphs is plenty, and a messy description of a real
            problem beats a tidy description of an imagined one.
          </p>

          <CellGrid columns={2}>
            {HELPFUL.map((item) => (
              <Cell key={item.heading}>
                <h3 className="text-[19px] font-extrabold tracking-[-0.01em] text-strong">
                  {item.heading}
                </h3>
                <p className="mt-3 max-w-[46ch] text-[15.5px] leading-[1.58] text-body">
                  {item.body}
                </p>
              </Cell>
            ))}
          </CellGrid>
        </Section>
      </Container>

      <section className="bg-surface">
        <Container>
          <div className="py-14">
            <h2 className="max-w-[26ch] text-subtitle text-strong">
              A note on what happens next.
            </h2>
            <div className="mt-6 max-w-[58ch] space-y-4 text-[16.5px] leading-[1.66] text-body">
              <p>
                Usually a short call, at no cost, to work out whether there&rsquo;s something here
                worth looking at properly. If there is, I&rsquo;ll quote a fixed fee for a
                diagnostic. If there isn&rsquo;t, that call is the end of it and neither of us has
                lost much.
              </p>
              <p>
                No sequence of follow-up emails, no proposal deck, no pressure to decide on a call.
                I&rsquo;d rather work with people who took their time.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

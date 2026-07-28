import type { Metadata } from "next";
import { getProjects } from "@/lib/content";
import { EmptyState, ProjectCard } from "@/components/content-cards";
import { CellGrid, Container, Kicker, Rule, Section } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A small number of things I've built, described by the problem they solve rather than the stack they're built on.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <>
      <Container>
        <section className="py-16 sm:py-20 lg:py-24">
          <Kicker className="mb-5">Projects</Kicker>
          <h1 className="optical-left max-w-[16ch] text-poster font-extrabold tracking-[-0.02em] text-strong">
            Built for a specific problem.
          </h1>
          <p className="mt-8 max-w-[58ch] text-[18px] leading-[1.62] text-body">
            Each of these is described by what it solves rather than what it&rsquo;s made of. The
            stack is the last line on the card, which is roughly how much it matters. This section
            is deliberately short &mdash; three things explained properly is more useful than twenty
            listed.
          </p>
        </section>
      </Container>

      <Container>
        <Rule />
      </Container>

      <Container>
        <Section className="!pt-10">
          {projects.length > 0 ? (
            <CellGrid columns={projects.length >= 3 ? 3 : 2}>
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </CellGrid>
          ) : (
            <EmptyState>
              Nothing here yet. The work I&rsquo;ve done so far has mostly been for other people and
              isn&rsquo;t mine to show; the things that are mine to show are being finished.
            </EmptyState>
          )}
        </Section>
      </Container>
    </>
  );
}

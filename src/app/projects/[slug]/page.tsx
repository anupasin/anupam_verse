import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getProject, getProjects } from "@/lib/content";
import { Mdx } from "@/components/mdx";
import { ButtonLink, Container, Rule } from "@/components/primitives";
import { siteConfig } from "@/config/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.problem,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.problem,
      url: `${siteConfig.url}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Container>
        <article className="py-14 sm:py-20">
          <Link
            href="/projects"
            className="text-[13px] text-muted transition-colors duration-150 hover:text-strong"
          >
            &larr; All projects
          </Link>

          <header className="mt-8">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.1em]">
              {project.status ? (
                <span className="text-accent-text">{project.status}</span>
              ) : null}
              {project.draft ? (
                <span className="text-faint">Draft — hidden in production</span>
              ) : null}
            </div>

            <h1 className="optical-left mt-4 max-w-[20ch] text-title font-extrabold tracking-[-0.02em] text-strong">
              {project.title}
            </h1>

            <p className="mt-7 max-w-[54ch] border-l-2 border-accent-text pl-5 text-[17px] leading-[1.62] text-strong">
              {project.problem}
            </p>

            <dl className="mt-10 grid gap-x-10 gap-y-6 border-t-2 border-divider pt-7 sm:grid-cols-3">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                  Built
                </dt>
                <dd className="tnum mt-2 text-[15px] text-body">{formatDate(project.date)}</dd>
              </div>
              {project.stack.length > 0 ? (
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                    Built with
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-body">
                    {project.stack.join(" · ")}
                  </dd>
                </div>
              ) : null}
              {project.url || project.repo ? (
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                    Links
                  </dt>
                  <dd className="mt-2 flex flex-col gap-1 text-[15px]">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-text underline underline-offset-4"
                      >
                        Live site
                      </a>
                    ) : null}
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-text underline underline-offset-4"
                      >
                        Source
                      </a>
                    ) : null}
                  </dd>
                </div>
              ) : null}
            </dl>
          </header>

          <Rule className="my-10" />

          <div className="prose">
            <Mdx source={project.body} />
          </div>
        </article>
      </Container>

      <section className="bg-surface">
        <Container>
          <div className="py-14">
            <h2 className="max-w-[24ch] text-subtitle text-strong">
              Got a problem shaped like this one?
            </h2>
            <div className="mt-7">
              <ButtonLink href="/contact">Get in touch</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

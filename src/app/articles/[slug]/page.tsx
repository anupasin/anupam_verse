import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getArticle, getArticles } from "@/lib/content";
import { Mdx } from "@/components/mdx";
import { ButtonLink, Container, Rule } from "@/components/primitives";
import { siteConfig } from "@/config/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      publishedTime: article.date,
      url: `${siteConfig.url}/articles/${article.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const others = getArticles()
    .filter((entry) => entry.slug !== article.slug)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { "@type": "Person", name: siteConfig.author.name },
    publisher: { "@type": "Person", name: siteConfig.author.name },
    mainEntityOfPage: `${siteConfig.url}/articles/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container>
        <article className="py-14 sm:py-20">
          <Link
            href="/articles"
            className="text-[13px] text-muted transition-colors duration-150 hover:text-strong"
          >
            &larr; All writing
          </Link>

          <header className="mt-8">
            <h1 className="optical-left max-w-[22ch] text-title font-extrabold tracking-[-0.02em] text-strong">
              {article.title}
            </h1>

            <div className="tnum mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-faint">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{article.readingMinutes} min read</span>
              {article.tags.length > 0 ? (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{article.tags.join(", ")}</span>
                </>
              ) : null}
              {article.draft ? (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-accent-text">Draft — hidden in production</span>
                </>
              ) : null}
            </div>

            <p className="mt-7 max-w-[58ch] border-l-2 border-accent-text pl-5 text-[17px] leading-[1.62] text-body">
              {article.description}
            </p>
          </header>

          <Rule className="my-10" />

          <div className="prose">
            <Mdx source={article.body} />
          </div>
        </article>
      </Container>

      {others.length > 0 ? (
        <section className="bg-surface">
          <Container>
            <div className="py-14">
              <h2 className="mb-8 text-[13px] font-semibold uppercase tracking-[0.08em] text-faint">
                More writing
              </h2>
              <div className="grid gap-px bg-divider sm:grid-cols-2">
                {others.map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/articles/${entry.slug}`}
                    className="group bg-surface py-6 pr-6 transition-colors duration-150 sm:px-6 sm:first:pl-0"
                  >
                    <h3 className="text-[20px] font-extrabold tracking-[-0.01em] text-strong transition-colors duration-150 group-hover:text-accent-text">
                      {entry.title}
                    </h3>
                    <p className="mt-2 max-w-[46ch] text-[15px] leading-[1.55] text-muted">
                      {entry.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-accent text-on-accent">
        <Container>
          <div className="py-14 sm:py-20">
            <h2 className="optical-left max-w-[20ch] text-subtitle font-extrabold tracking-[-0.02em]">
              If this is the kind of thinking you want on your problem, get in touch.
            </h2>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="invert">
                Start a conversation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

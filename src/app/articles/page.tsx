import type { Metadata } from "next";
import { getArticles } from "@/lib/content";
import { ArticleRow, EmptyState } from "@/components/content-cards";
import { Container, Kicker, Rule, Section } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Essays on AI, systems thinking, productivity, learning and the parts of thinking that don't automate.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  const articles = getArticles();

  return (
    <>
      <Container>
        <section className="py-16 sm:py-20 lg:py-24">
          <Kicker className="mb-5">Writing</Kicker>
          <h1 className="optical-left max-w-[16ch] text-poster font-extrabold tracking-[-0.02em] text-strong">
            Notes on thinking with machines.
          </h1>
          <p className="mt-8 max-w-[58ch] text-[18px] leading-[1.62] text-body">
            Essays on AI, systems, learning and the parts of the work that don&rsquo;t automate. I
            write to work things out rather than to publish on a schedule, so there are fewer of
            these than there would be otherwise &mdash; which I think is the right trade.
          </p>
        </section>
      </Container>

      <Container>
        <Rule />
      </Container>

      <Container>
        <Section className="!pt-0">
          {articles.length > 0 ? (
            <div className="border-b-2 border-divider">
              {articles.map((article) => (
                <ArticleRow key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <EmptyState>
              Nothing published yet. The first pieces are being written; they&rsquo;ll appear here
              rather than in a newsletter you have to join.
            </EmptyState>
          )}
        </Section>
      </Container>
    </>
  );
}

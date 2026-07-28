import { ButtonLink, Container, Kicker } from "@/components/primitives";

export default function NotFound() {
  return (
    <Container>
      <section className="py-24 sm:py-32">
        <Kicker className="mb-5">404</Kicker>
        <h1 className="optical-left max-w-[16ch] text-poster font-extrabold tracking-[-0.02em] text-strong">
          That page isn&rsquo;t here.
        </h1>
        <p className="mt-8 max-w-[52ch] text-[18px] leading-[1.62] text-body">
          Either it moved or it never existed. Both happen. The writing and the projects are the
          most likely things you were after.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/articles" variant="secondary">
            Articles
          </ButtonLink>
          <ButtonLink href="/projects" variant="secondary">
            Projects
          </ButtonLink>
        </div>
      </section>
    </Container>
  );
}

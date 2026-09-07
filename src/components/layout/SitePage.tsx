import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { PageHeroTitle } from "@/components/pages/PageHeroTitle";
import type { PageSlug } from "@/data/navigation";

export function SitePage({
  slug,
  children,
  hideHero = false,
}: {
  slug: PageSlug;
  children: React.ReactNode;
  hideHero?: boolean;
}) {
  const isAboutPage =
    slug === "company" || slug === "about" || slug === "about-us";
  const shouldHideHero = hideHero || isAboutPage;

  return (
    <>
      <Header />
      <main id="main" className="bg-background">
        {!shouldHideHero && (
          <div className={isAboutPage ? "bg-white" : undefined}>
            <Container className="pt-28 md:pt-36">
              <PageHeroTitle slug={slug} />
            </Container>
          </div>
        )}
        {children}
      </main>
      <Footer />
    </>
  );
}

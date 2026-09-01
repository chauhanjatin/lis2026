import { SitePage } from "@/components/layout/SitePage";
import { PageContent } from "@/components/pages/PageContent";
import { pageMeta } from "@/data/navigation";

export const metadata = {
  title: pageMeta.projects.title,
  description: pageMeta.projects.description,
};

export default function ProjectsPage() {
  return (
    <SitePage slug="projects">
      <PageContent slug="projects" />
    </SitePage>
  );
}

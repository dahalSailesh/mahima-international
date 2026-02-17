import SectionHeading from "@/components/SectionHeading";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-lavender-50 to-cream section-padding py-20 md:py-28">
      <div className="container-narrow">
        <SectionHeading title={title} subtitle={subtitle} />
      </div>
    </section>
  );
}

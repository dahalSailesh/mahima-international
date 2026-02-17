import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Programs | Mahima International",
  description:
    "Explore our programs: Story Circles, Culinary Exchange, and Art & Expression — fostering connection through shared experience.",
};

const programs = [
  {
    title: "Story Circles",
    description:
      "Our Story Circles provide a sacred space where women of all backgrounds gather to share their personal narratives. Guided by trained facilitators, these circles honor each participant's voice and create opportunities for deep listening, mutual understanding, and cross-cultural connection. Through storytelling, women reclaim authorship of their own experiences and build lasting bonds rooted in empathy and solidarity.",
    placeholder: "Story Circle Gathering",
    color: "bg-lavender-100",
  },
  {
    title: "Culinary Exchange",
    description:
      "Food is a universal language that transcends borders. Our Culinary Exchange program brings women together to share recipes, cooking techniques, and culinary traditions from their homelands. These shared meals become a celebration of cultural heritage and a bridge between communities, fostering friendship and understanding over the warmth of a shared table.",
    placeholder: "Culinary Exchange Session",
    color: "bg-lavender-50",
  },
  {
    title: "Art & Expression",
    description:
      "Through visual arts, crafts, and creative expression, women discover powerful ways to process their experiences, celebrate their identities, and share their cultures. Our Art & Expression program provides materials, guidance, and a supportive environment where creativity becomes a tool for healing, self-discovery, and community building that transcends language barriers.",
    placeholder: "Art & Expression Workshop",
    color: "bg-warm",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        title="Our Programs"
        subtitle="Connecting communities through food, art, and storytelling"
      />

      {/* Programs */}
      <section className="bg-white section-padding py-16 md:py-24">
        <div className="container-narrow">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`flex flex-col ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-8 md:gap-12 items-center`}
              >
                {/* Placeholder Image */}
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <div
                    className={`${program.color} rounded-2xl aspect-[4/3] flex items-center justify-center`}
                  >
                    <p className="text-lavender-500 text-lg font-medium">
                      {program.placeholder}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl md:text-3xl mb-4 text-lavender-900">
                    {program.title}
                  </h3>
                  <p className="text-lavender-700 leading-relaxed text-lg">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-b from-warm to-cream section-padding py-16 md:py-24">
        <div className="container-narrow text-center">
          <h2 className="text-3xl mb-4 text-lavender-900">
            Interested in Our Programs?
          </h2>
          <p className="text-lg text-lavender-700 mb-8 max-w-2xl mx-auto">
            Whether you want to participate, volunteer as a facilitator, or
            support our programs through donations, we would love to hear from
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link href="/volunteer" className="btn-secondary">
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

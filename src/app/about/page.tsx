import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "About Us | Mahima International",
  description:
    "Learn about Mahima International, a women-led organization founded by and for women with refugee experience.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Mahima International"
        subtitle="A women-led organization founded by and for women with refugee experience"
      />

      {/* Value Section */}
      <section className="bg-white section-padding py-16 md:py-24">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-6 text-lavender-900">Our Values</h2>
            <p className="text-lg leading-relaxed text-lavender-800">
              Mahima International is a women-led organization founded by and
              for women with refugee experience. We honor the sacred wisdom they
              carry — shaped through displacement and endurance — and recognize
              the power of maintaining authorship of our own stories as a way to
              remember our past while building a joyful future in our new
              homeplace.
            </p>
            <p className="text-lg leading-relaxed text-lavender-800">
              Mahima International creates spaces where women’s voices are
              centered, their knowledge is valued, and their identities as
              contributors, leaders, and wisdom-keepers are recognized.
            </p>
            <p className="text-lg leading-relaxed text-lavender-800">
              Our mission is to foster social connections that uphold the
              dignity and value of refugee experiences, provide a sanctuary for
              all women to share their respective stories, and create
              opportunities for developing relationships with the broader
              community that are grounded in cross-cultural understanding,
              mutual respect, reciprocity, and solidarity. We use food, art, and
              story circles as ways to develop meaningful and lasting
              connections between women of all backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* Our Name and Logo Section */}
      <section className="bg-warm section-padding py-16 md:py-24">
        <div className="container-narrow">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 relative">
                <Image
                  src="/logo.png"
                  alt="Mahima International lotus logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl mb-6 text-lavender-900">
                Our Name &amp; Logo
              </h2>
              <p className="text-lg leading-relaxed text-lavender-800">
                Resettlement offers profound relief to families who have spent
                generations in refugee camps. For many, it opens a long-awaited
                pathway toward safety and the possibility of an ordinary life.
                It offers a second chance to rebuild, to reclaim identities
                disrupted by displacement, and to begin writing new life stories
                grounded in hope, dreams, and contributions to our new
                communities. In these ways, resettlement is experienced as a
                profound act of kindness, and those who receive it carry deep
                gratitude for the chance to start again.
              </p>
              <p className="text-lg leading-relaxed text-lavender-800">
                At the same time, the realities of resettlement can be
                overwhelming. Learning new languages, cultural norms, and
                bureaucratic systems dominate one’s time and energy, and the
                expectation for former refugees to assimilate devalues the
                stories, skills, and wisdom we bring to our new communities. In
                addition, individuals – and especially women – are too often
                represented exclusively as victims, thus obscuring the
                tremendous strength, resilience, and fortitude that allowed us
                to survive and transcend experiences of displacement.
              </p>
              <p className="text-lg leading-relaxed text-lavender-800">
                Our name and logo reflect these complex experiences of
                displacement and resettlement. Mahima is a Sanskrit word that
                translates roughly as grace or the pursuit of inner peace and
                wisdom in English. When applied to the refugee experience,
                mahima represents the strength and resilience we developed in
                response to displacement to build a life that is whole and
                joyous and fundamentally grounded in community connections.
                These experiences are reflected in our logo, the lotus, which
                symbolizes the beauty and growth that can come from suffering.
                Just as the lotus blooms out of mud, we, as former refugees,
                developed strength and resilience in the face of displacement,
                and we use these to reclaim lives rooted in joy, peace, and
                cross-cultural connections. Mahima International provides a
                space where women with refugee experience are no longer defined
                by displacement, but are celebrated for the knowledge, wisdom,
                and strength we bring to our communities. We seek to create a
                world in which we can thrive as leaders, healers, and joyful
                authors of our own stories, past and present.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="bg-white section-padding py-16 md:py-24">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-6 text-lavender-900">Our Story</h2>
            <div className="space-y-6 text-lg leading-relaxed text-lavender-800">
              <p>
                Mahima International was initiated by Pingala Dhital, a former
                Bhutanese refugee, during her work at a resettlement agency in
                Spokane, Washington. She saw a concerning pattern at the agency:
                men often found jobs and resources quickly, while women were
                frequently confined to the home. Without opportunities to learn
                English, develop new skills, or connect with others in their
                community, many women of refugee backgrounds experienced extreme
                social isolation upon resettlement. For women refugee who
                experienced domestic abuse, their physical, social, and cultural
                isolation made it nearly impossible to seek resources available
                to them.
              </p>
              <p>
                Drawing on her own experiences as a Bhutanese refugee, Pingala
                recognized how patriarchal norms left women undervalued and
                deprived of opportunities. In response, she created a space
                where women of refugee backgrounds could connect with one
                another and with members of the broader community. Drawing on
                life-rich traditions and lived experiences, women of refugee
                backgrounds shared their stories, food, knowledge, and
                traditions with other women in the community. These spaces
                generated laughter, friendship, and healing, and ultimately
                served as the foundation of Mahima International.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-b from-lavender-50 to-cream section-padding py-16 md:py-24">
        <div className="container-narrow text-center">
          <h2 className="text-3xl mb-4 text-lavender-900">
            Join Our Community
          </h2>
          <p className="text-lg text-lavender-700 mb-8 max-w-2xl mx-auto">
            Whether through volunteering, donating, or simply spreading the
            word, you can help us create spaces of connection and healing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer" className="btn-primary">
              Volunteer With Us
            </Link>
            <Link href="/donate" className="btn-secondary">
              Support Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

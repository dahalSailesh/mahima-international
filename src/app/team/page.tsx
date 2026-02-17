import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Our Team | Mahima International",
  description:
    "Meet the dedicated team behind Mahima International, led by women with refugee experience who are building bridges across cultures.",
};

const teamMembers = [
  {
    name: "Pingala Dhital",
    role: "Founder & Executive Director",
    initials: "PD",
    bio: "A former Bhutanese refugee, Pingala founded Mahima International after witnessing the social isolation many refugee women experienced upon resettlement. Her vision of creating spaces for women to connect through shared stories, food, and art continues to drive the organization forward.",
  },
  {
    name: "Amara Osei",
    role: "Program Director",
    initials: "AO",
    bio: "Amara brings over a decade of experience in community development and cross-cultural programming. She oversees all of Mahima's programs, ensuring each creates meaningful space for connection and healing.",
  },
  {
    name: "Linh Nguyen",
    role: "Community Outreach Coordinator",
    initials: "LN",
    bio: "As a bridge between Mahima and the broader Spokane community, Linh works to develop partnerships, organize events, and create opportunities for cross-cultural engagement and mutual support.",
  },
  {
    name: "Fatima Al-Rashid",
    role: "Story Circle Facilitator",
    initials: "FA",
    bio: "With a background in narrative therapy and lived refugee experience, Fatima guides women through the story circle process, creating safe and empowering spaces for sharing and deep listening.",
  },
  {
    name: "Elena Morales",
    role: "Development & Communications",
    initials: "EM",
    bio: "Elena manages fundraising initiatives and communications, sharing the stories and impact of Mahima's work with supporters and the broader community through thoughtful storytelling.",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-lavender-50 to-cream section-padding py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeading
            title="Our Team"
            subtitle="Dedicated women building bridges across cultures and communities"
          />
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-white section-padding py-16 md:py-24">
        <div className="container-narrow">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-warm rounded-2xl p-8 text-center hover:shadow-md transition-shadow duration-300"
              >
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-to-br from-lavender-200 to-lavender-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-semibold text-lavender-800">
                    {member.initials}
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-xl mb-1 text-lavender-900">
                  {member.name}
                </h3>
                <p className="text-plum-600 font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-lavender-700 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="bg-gradient-to-b from-lavender-50 to-cream section-padding py-16 md:py-24">
        <div className="container-narrow text-center">
          <h2 className="text-3xl mb-4 text-lavender-900">Join Our Team</h2>
          <p className="text-lg text-lavender-700 mb-8 max-w-2xl mx-auto">
            We are always looking for passionate individuals who share our
            vision. Whether as a volunteer, board member, or staff, your
            contributions make a difference.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}

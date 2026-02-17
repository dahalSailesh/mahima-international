import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata = {
  title: "Events | Mahima International",
  description:
    "Join our upcoming events and community gatherings. Story circles, culinary exchanges, and more.",
};

const upcomingEvents = [
  {
    date: "March 15, 2026",
    day: "15",
    month: "MAR",
    title: "Spring Story Circle",
    description:
      "Join us for an evening of storytelling and deep listening as women from diverse backgrounds share their experiences of renewal and new beginnings. Light refreshments will be provided.",
    location: "Spokane Community Center, Spokane, WA",
    time: "5:30 PM - 7:30 PM",
  },
  {
    date: "April 5, 2026",
    day: "05",
    month: "APR",
    title: "Culinary Exchange: Flavors of Home",
    description:
      "A collaborative cooking and dining experience where refugee women share traditional recipes from Nepal, Burma, and the Democratic Republic of Congo. Open to all women in the community.",
    location: "Mahima Kitchen Space, Spokane, WA",
    time: "11:00 AM - 2:00 PM",
  },
  {
    date: "April 22, 2026",
    day: "22",
    month: "APR",
    title: "Art & Healing Workshop",
    description:
      "Explore creative expression through textile art and painting. No experience needed. This workshop provides materials and guidance in a supportive, multilingual environment.",
    location: "Spokane Arts District, Spokane, WA",
    time: "1:00 PM - 4:00 PM",
  },
  {
    date: "May 10, 2026",
    day: "10",
    month: "MAY",
    title: "Annual Community Celebration",
    description:
      "Our annual gathering to celebrate the connections we have built throughout the year. Featuring performances, shared meals, art exhibitions, and stories from program participants.",
    location: "Riverfront Park Pavilion, Spokane, WA",
    time: "3:00 PM - 7:00 PM",
  },
];

const pastEvents = [
  {
    date: "January 20, 2026",
    title: "Winter Story Circle: Roots & Routes",
    description:
      "Women shared stories about the places that shaped them and the journeys that brought them here. Over 25 women attended from 8 different countries.",
  },
  {
    date: "December 8, 2025",
    title: "Holiday Culinary Exchange",
    description:
      "A festive cooking session where women prepared traditional holiday dishes from their cultures, sharing the stories and memories behind each recipe.",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-lavender-50 to-cream section-padding py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Gather, share, and connect with our community"
          />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white section-padding py-16 md:py-24">
        <div className="container-narrow">
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="flex flex-col sm:flex-row gap-6 bg-warm rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300"
              >
                {/* Date Badge */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-lavender-100 to-lavender-200 rounded-xl flex flex-col items-center justify-center">
                    <span className="text-xs font-semibold text-plum-600 uppercase tracking-wider">
                      {event.month}
                    </span>
                    <span className="text-2xl font-bold text-lavender-900">
                      {event.day}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl mb-2 text-lavender-900">
                    {event.title}
                  </h3>
                  <p className="text-lavender-700 leading-relaxed mb-3">
                    {event.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-lavender-600">
                    <span className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {event.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-warm section-padding py-16 md:py-24">
        <div className="container-narrow">
          <h2 className="text-3xl mb-8 text-lavender-900">Past Events</h2>
          <div className="space-y-6">
            {pastEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-2xl p-6 md:p-8"
              >
                <p className="text-sm text-lavender-500 mb-2">{event.date}</p>
                <h3 className="text-xl mb-2 text-lavender-900">
                  {event.title}
                </h3>
                <p className="text-lavender-700 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-lavender-50 to-cream section-padding py-16 md:py-20">
        <div className="container-narrow text-center">
          <h2 className="text-2xl mb-4 text-lavender-900">
            Want to Host or Sponsor an Event?
          </h2>
          <p className="text-lavender-700 mb-8 max-w-xl mx-auto">
            We are always looking for community partners to help us create
            welcoming spaces for connection.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

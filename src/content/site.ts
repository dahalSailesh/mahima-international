export interface SiteLink {
  label: string;
  href: string;
}

export const primaryNavLinks: SiteLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Team", href: "/team" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const supportLinks: SiteLink[] = [
  { label: "Donate", href: "/donate" },
  { label: "Volunteer", href: "/volunteer" },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
  },
];

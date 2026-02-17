# Mahima International

Website for **Mahima International**, a women-led non-profit organization founded by and for women with refugee experience. We foster social connections through food, art, and story circles to uphold the dignity of refugee experiences and build cross-cultural understanding.

> *"Reclaiming Our Narratives and Fostering Collaborative Connections"*

## Live Site

**https://mahima-international.vercel.app**

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: Vercel

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, mission, approach, get involved |
| About | `/about` | Values, name & logo meaning, founding story |
| Programs | `/programs` | Story Circles, Culinary Exchange, Art & Expression |
| Team | `/team` | Team member profiles |
| Events | `/events` | Upcoming and past events |
| Blog | `/blog` | Stories and updates |
| Gallery | `/gallery` | Photo gallery |
| Contact | `/contact` | Contact form and info |
| Donate | `/donate` | Donation page (Stripe integration pending) |
| Volunteer | `/volunteer` | Volunteer signup form |

## Getting Started

### Prerequisites

- Node.js 24 (recommended via `.nvmrc`) or Node.js 20.19+
- npm
- If you use `nvm`, run `nvm use` (project includes `.nvmrc`)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Deployment

The site is deployed on Vercel. Any push to the `main` branch will trigger a new deployment.

## TODO

- [ ] Stripe donation integration (see `stripe-todo.txt` in parent directory)
- [ ] Add real team member photos and bios
- [ ] Add real event listings
- [ ] Add real blog posts
- [ ] Add real gallery photos
- [ ] Connect contact and volunteer forms to a backend/email service
- [ ] Add social media links (Instagram, Facebook)
- [ ] Newsletter signup integration

## Current Development Behavior

- Blog entries are currently preview cards only. Individual post pages are not yet published.
- Contact and volunteer forms open a prefilled email draft (until backend form handling is connected).
- Donation amount selection is live in UI, but Stripe checkout is intentionally marked "coming soon".
- Footer newsletter signup is a waiting-list placeholder until provider integration is complete.

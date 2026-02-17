# Mahima International

Website for **Mahima International**, a women-led non-profit organization founded by and for women with refugee experience. We foster social connections through food, art, and story circles to uphold the dignity of refugee experiences and build cross-cultural understanding.

> *"Reclaiming Our Narratives and Fostering Collaborative Connections"*

## Live Site

**https://mahima-international.vercel.app**

## Tech Stack

- **Framework**: Next.js 14 (App Router)
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

- Node.js 20+
- npm

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

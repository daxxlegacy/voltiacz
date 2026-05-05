## Voltiacz Rising — BunnyZ Gaming Website

A multi-page, dark neon gaming brand site centered on YouTube content and Discord community growth.

### Design system
- Dark theme: near-black background, deep purple + electric blue neon accents
- Glow hover effects on buttons and cards, subtle animated gradients
- Clean esports-inspired typography (bold display headings + clean sans body)
- Smooth fade/slide animations on scroll, sticky top nav, mobile-responsive

### Pages (each as its own route with unique SEO metadata)

1. **Home (`/`)**
   - Full-screen hero with animated gradient/particles background
   - Title: "Welcome to Voltiacz Rising" — Subtitle: "Content. Community. Gaming. Led by BunnyZ."
   - CTAs: "Watch on YouTube" + "Join the Community"
   - Featured YouTube videos section (embedded)
   - Short BunnyZ intro teaser
   - Discord join CTA band

2. **About (`/about`)**
   - "Who is BunnyZ?" section with portrait placeholder
   - "What is Voltiacz Rising?" brand story
   - Stats strip (subs, community size — placeholder numbers)

3. **Content (`/content`)**
   - YouTube embed grid with category tabs: Gameplay, Funny Moments, Highlights/Clips
   - Thumbnail cards with hover glow

4. **Community (`/community`)**
   - "Join Voltiacz Rising" hero
   - Bullet list: play together, voice chats, events
   - Big "Join Discord" CTA linking to https://discord.gg/EmKrKbC3Nt

5. **Clips (`/clips`)**
   - TikTok-style vertical card grid for short-form highlights
   - Fast scrollable layout

6. **Contact (`/contact`)**
   - Business email block
   - Collaboration/sponsorship message
   - Social icons row

### Shared components
- Sticky navbar: Home / About / Content / Community / Clips / Contact + YouTube & Discord icon buttons
- Footer: brand mark, social links, copyright
- Reusable `NeonButton`, `VideoCard`, `SectionHeading`

### Integrations
- YouTube channel link: https://www.youtube.com/@BunnyZChannel
- Discord invite: https://discord.gg/EmKrKbC3Nt
- Embedded YouTube iframes (placeholder video IDs initially — easy to swap)

### Notes
- Content cards use placeholder video IDs and copy that the user should replace with real uploads
- No backend needed for v1 (no Lovable Cloud)
- Optional later: live YouTube feed via API (would require Cloud + YouTube Data API key)

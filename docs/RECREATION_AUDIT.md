# Website recreation evidence ledger — 2026-11-16

## Source and permission

Reference: https://modblock.framer.website/ . Marketplace: https://www.framer.com/marketplace/templates/modblock/ . The template is advertised free but with limited licensing; that does not establish rights to copy and redistribute every asset. The original Framer-generated code was not copied. Source attribution is preserved for design reference only. Approved image replacements needed.

## Discovered routes

- `/` — homepage: hero, trust rating, metrics, image, promise, categories, properties, beliefs, services, about/process, testimonials, blog, FAQ, CTA and footer (content inspection).
- `/about-us` — About (route confirmed; fine-grained interactions not verified).
- `/properties` — listing index (confirmed).
- `/properties/cedar-hill-estate`, `/properties/willowbrook-haven`, `/properties/the-skyline-tower`, `/properties/sunset-grove`, `/properties/elmwood-residence`, `/properties/coral-bay-retreat` — six discovered CMS slugs. Cedar Hill and Coral Bay content inspected.
- `/services` — services (route confirmed).
- `/blog` and three observed CMS slugs: `/blog/when-is-the-best-time-to-sell-your-property`, `/blog/understanding-the-home-buying-process-step-by-step`, `/blog/what-affects-property-value-in-this-amazing-year-2025`.
- `/agents` — team listing (route confirmed); team member details not verified.
- `/contact` — form known from official template image with name/email/subject/message fields (visual preview only).
- `/gallery`, `/404` — links confirmed from source footer, deeper interaction review pending.

## Visual characteristics observed

Official Framer Marketplace screenshots show bright white backgrounds, centered hero/title, very generous breathing room, low-contrast slate metadata, small central navigation, a teal pill CTA, rounded building imagery, three-column six-property cards and two-column contact layout. Precise font/style values not measured from DOM. Different public screenshots/HTML content show differing stats and imagery: treat current live HTML as higher priority, resolve in real browser session.

## Component and interaction evidence

| Component | Reference observation | Draft implementation | Verified parity |
| --- | --- | --- | --- |
| Header | Logo, About, Properties, Services, Blog, Agents, Contact us | Present, responsive mobile menu | No |
| Hero | Rating, statement, CTA, partner metric, four counters, large property photograph | Present, illustrative photo | No |
| Categories | Apartments, Office, House, Commercial | Present; click filters | No |
| Properties | Six cards with status, price, location, beds/baths/area | Present in grid | No |
| Detail | Title, location, status, gallery, amenities, specs, contact agent | Present, gallery lightbox | No |
| Blog | Three visible homepage items and post routes | Present, rewritten illustrative articles | No |
| Contact | Four-field form and supporting image | Present, explicitly not connected | No |
| FAQ | Six questions | Accessible details | No |
| Footer | Page links, newsletter, socials, sample contact info | Present; newsletter unconnected | No |
| Motion | Framer contains appear effects; timing not measurable from text | Generic reveal only | No |
| Responsive | Official description says mobile layout included | Responsive layout implemented | No |
| Cursor/3D | Not verified from live interactive session | Not invented | Unknown |

## Acceptance classification

**Partially implemented.** Source files and visible routes have a draft implementation, but exact image assets, font, timing, animations, visual comparisons, functionality integrations, and deployed-browser verification require further work. Live URL and commit SHA must be filled only after confirmed connector results. No unsupported pass claims permitted.

## Execution evidence update — 2026-11-16

- GitHub target: `vaishnavsawant1994-stack/modblock-portfolio-`, branch `main`.
- Latest source/documentation baseline commit prior to this audit update: `dc25d764c70208f18995e83fbcb857ca5ba3cacd`. GitHub connector confirmed file creates for README.md, app.js, styles.css, index.html, vercel.json, docs/RECREATION_AUDIT.md, tests/test-pages.cjs and robots.txt.
- Local `node --check app.js` passed.
- Local `node tests/test-pages.cjs` passed: 18 route-template checks and static CSS/config checks. These do not represent browser or visual parity.
- Chromium headless attempts timed out in this runtime; no comparable reference screenshots, animation measurements, browser navigation, or performance evidence obtained.
- Vercel: connected user `vaishnavsawant1994-9960`, team `team-vs` (`team_Kc4tv3AFZeK0GJjEyok6xB1P`). Both project creation and a Git-sourced preview deployment returned HTTP 403 with `forbidden` / no create-project permission. An explicit team-scoped project creation attempt also returned HTTP 403. No deployment URL exists from these attempts.
- Final classification: **partially implemented; production deployment blocked by Vercel project-create permissions and visual acceptance unverified**.

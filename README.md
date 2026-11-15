# Modblock — Independent Real Estate Website Recreation

Target reference: https://modblock.framer.website/
Target repository: https://github.com/vaishnavsawant1994-stack/modblock-portfolio-
Target hosting: Vercel.

**Status: functional draft / visual validation pending. This is NOT a 100% or pixel-perfect claim.**

This is an independent HTML/CSS/JavaScript implementation based on observable public page structure. It does not reuse or distribute original Framer template source, private CMS data, licensed premium fonts, or unverified original photography. It uses illustrative Unsplash images (subject to the current [Unsplash License](https://unsplash.com/license)) instead; these must be replaced with approved assets before final design acceptance.

## Local run

```bash
python3 -m http.server 8080
# open http://localhost:8080/
```

On local static servers the nested routes require an SPA fallback. Vercel handles this via `vercel.json` rewrites.

## Implemented draft routes

`/`, `/about-us`, `/properties`, `/properties/<slug>`, `/services`, `/blog`, `/blog/<slug>`, `/agents`, `/gallery`, `/contact`, `/404`.

## Functional coverage

- Responsive desktop and mobile navigation with aria-expanded state.
- Property search, category and status filters; reset and empty results.
- Six demo property detail routes with amenities, specs, gallery lightbox and relevant contact links.
- Three demo blog detail routes, all matching example original slugs.
- FAQ accordions, section reveal animations, responsive photo cards, keyboard support and reduced-motion setting.
- Contact and newsletter forms have **validation and explicit undelivered states**. They do NOT submit until you configure an owned delivery service and required privacy/spam safeguards. This is intentional; false success would be misleading.
- SEO titles, meta description, Open Graph, canonical URLs, semantic headings, alt text, navigation landmarks, accessible focus.

## Critical gaps

1. Original assets and Framer font licensing not confirmed; placeholder photography and illustrative team profiles are documented.
2. Independent screenshot comparisons and interaction recordings against every reference route are pending due no reference browser-rendering access during initial reconstruction.
3. Original precise animations, advanced scroll effects, and cursor behavior not independently verified; only restrained generic reveal animations currently implemented.
4. CMS/editor interface and external property updates are not connected. Data is static demo content.
5. Contact and newsletter endpoint, CRM routing and privacy policy need an approved service/operator.
6. Automated cross-browser and runtime performance measurements are not yet complete.

See `docs/RECREATION_AUDIT.md` for the evidence/status ledger. Do not remove this disclosure until independent verification is complete.
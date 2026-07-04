# Cambridge AI for Wellbeing Society

Static homepage for `ai4wellbeing.github.io`, the organization site for Cambridge AI for Wellbeing Society.

## Local development

Requires Node.js `>=22.12.0`.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The generated site is written to `dist/`.

## Project structure

```text
src/
  layouts/Layout.astro          shared HTML shell: head metadata, header, footer
  pages/index.astro             the one-page site, section by section
  pages/404.astro               not-found page (reuses the layout)
  components/ContactForm.astro  enquiry form + progressive-enhancement script
  data/site.ts                  all copy and navigation data
  styles/global.css             design tokens and global styles
  assets/                       source images, optimized at build time
public/                         files served as-is (icons, robots.txt)
```

## Contact form

GitHub Pages serves static files and cannot send email by itself. The contact form is
therefore wired to an external Formspree endpoint, while the recipient email address
stays private in the Formspree dashboard rather than in this repository.

The production endpoint is set in `src/data/site.ts` (`contactFormEndpoint`). Endpoint
ids are public by nature — they appear in the deployed HTML — so committing one leaks
nothing. The `PUBLIC_CONTACT_FORM_ENDPOINT` environment variable (or GitHub Actions
repository variable) overrides it at build time, which is useful for testing against a
different form.

Notes:

- The recipient address is configured in Formspree. Formspree emails a verification
  link to that address; submissions are not delivered until it is confirmed.
- If the resolved endpoint is not an absolute `https://` URL, the form renders with
  its submit button disabled, so visitors cannot submit into a broken endpoint.

## Deployment

Deploy through GitHub Pages from the `ai4wellbeing/ai4wellbeing.github.io` repository:

1. Create or open the repository `ai4wellbeing.github.io` under the `ai4wellbeing` organization.
2. Push this project to the `main` branch.
3. In repository settings, set Pages source to GitHub Actions.
4. The workflow in `.github/workflows/deploy.yml` builds the Astro site and publishes it to GitHub Pages.

The expected public URL is:

```text
https://ai4wellbeing.github.io
```

## Brand note

This site uses a Cambridge-inspired visual language but does not use the University of Cambridge logo, coat of arms, or official brand assets.

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

## Contact form

GitHub Pages serves static files and cannot send email by itself. The contact form is
therefore wired to an external Formspree endpoint, while the recipient email address
stays in the Formspree dashboard rather than in this repository.

1. Create a Formspree form and set the target email in Formspree.
2. Copy the form endpoint, for example `https://formspree.io/f/xxxxxxx`.
3. In `ai4wellbeing/ai4wellbeing.github.io`, open Settings -> Secrets and variables
   -> Actions -> Variables.
4. Add a repository variable named `PUBLIC_CONTACT_FORM_ENDPOINT` with the copied
   endpoint as its value.
5. Re-run the GitHub Pages workflow or push a new commit.

Without this repository variable, the form is rendered but its submit button remains
disabled, so visitors will not submit into a broken endpoint.

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

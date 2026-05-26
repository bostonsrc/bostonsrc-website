# Boston Scientific Research Center Website

Institutional website concept for Boston Scientific Research Center built with Next.js App Router and a custom editorial design system.

## Stack

- Next.js
- React
- TypeScript
- Custom CSS

## Run

```bash
npm install
npm run dev
```

## Notes

- The project is intentionally flat, typography-led, and restrained to align with the requested Harvard/Stanford-inspired institutional tone without direct imitation.
- Advisory board profiles are structured as placeholders until confirmed appointments are available.
- The contact email is currently set in `lib/site-content.ts` as `office@bostonsrc.org`.

## Contact Delivery

The inquiry form is wired to Resend using the server route at `app/api/contact/route.ts`.

Add these environment variables before using the form in production:

```bash
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_FROM_EMAIL="Boston Scientific Research Center <noreply@bostonsrc.org>"
CONTACT_TO_EMAIL="office@bostonsrc.org"
```

Important:

- Verify the sending domain in Resend before using `noreply@bostonsrc.org`.
- For Cloudflare, add these as `Secret` values under `Workers & Pages > your project > Settings > Variables and Secrets`.

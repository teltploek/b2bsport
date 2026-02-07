# PRD: Site Content Overhaul & Multi-Workflow System

## Introduction

The B2B Sport website currently has a mix of real content and placeholder-style messaging that doesn't fully reflect the platform's concept as a centralized partnership platform connecting sports brands, distributors, and clubs. This PRD covers two parallel workstreams:

1. **Content overhaul** — Replace generic/placeholder text across all pages with messaging that aligns with the B2B Sport Admin concept: a partnership platform for B2B sports that manages clubs, agreements, and orders. The primary narrative stays Danish club-focused ("Hele Danmarks klubpartner") but weaves in the broader B2B platform positioning where relevant.

2. **Multi-workflow system** — Refactor the Workflow component to support multiple real-life workflows (carousel on homepage, curated single workflows on audience pages), showcasing both process-based flows (how things work) and audience-based flows (how each user type benefits).

Visual style, color palette, typography, and overall component structure remain unchanged. Layout adjustments are allowed where new content demands it.

### Tone of Voice Principle: Real Company, Real People

All content should reflect that B2B Sport is a real company with real people — not a faceless SaaS platform. The contact page with office locations and team members stays as-is to reinforce this. When writing content:
- Use direct, human language — not corporate jargon or startup buzzwords
- Reference real-world pain points that club admins and coaches actually experience
- Keep the Danish club-focused warmth ("Hele Danmarks klubpartner") even when explaining B2B platform features
- Avoid aspirational stats that can't be backed up — credibility over hype
- The overall feel should be: "we're a team that understands your world and built something to fix it"

## Goals

- Replace all placeholder/generic text with concept-aligned messaging across DA/EN/DE
- Create a reusable Workflow component that supports carousel/tabs for multiple workflows
- Define 3 process-based workflows showing platform mechanics
- Define 3 audience-based workflows showing user-type-specific journeys
- Prepare navigation and page structure for new audience pages and sport-specific landing pages
- Maintain the Danish club-focused primary narrative with hybrid B2B platform positioning
- Ensure tone of voice reflects authenticity — real company, real people, real problems solved

## User Stories

### US-001: Refactor Workflow component to support multiple workflows with carousel/tabs

**Description:** As a developer, I need the Workflow component to accept and display multiple workflow configurations with tab or carousel navigation, so we can showcase different workflows on different pages.

**Acceptance Criteria:**
- [ ] Workflow component accepts an array of workflow objects, each with: `id`, `title`, `subtitle`, `steps[]` (each step has `label`, `icon` identifier)
- [ ] When multiple workflows are provided, render tab buttons above the flow to switch between them
- [ ] When a single workflow is provided, render without tabs (page-specific mode)
- [ ] Desktop: React Flow canvas updates when switching tabs (animated transition not required, simple swap is fine)
- [ ] Mobile: vertical step list updates when switching tabs
- [ ] Tab styling uses existing design tokens (forest/coral/cream palette)
- [ ] Existing visual style of nodes, edges, and layout is preserved
- [ ] Typecheck passes
- [ ] Visual verification: Start dev server, navigate to `http://localhost:3000` and confirm Workflow section shows tabs and switches between workflows. Kill server.

---

### US-002: Add process-based workflow data to dictionaries

**Description:** As a content author, I need process-based workflow content in all three language files so the homepage can display real platform workflows.

**Acceptance Criteria:**
- [ ] Add `workflow.workflows` array to `da.json`, `en.json`, and `de.json`
- [ ] Three process-based workflows defined:
  1. **Club Onboarding**: Register Club → Configure Profile → Set Up Staff → Create Agreement → Activate Portal → Club Goes Live
  2. **Order Lifecycle**: Browse Catalog → Add to Cart → Submit for Approval → Admin Approves → Order Confirmed → Track Delivery
  3. **Agreement Management**: Create Template → Set Terms & Pricing → Assign to Club → Club Accepts → Monitor Usage → Renew
- [ ] Each workflow has: `id`, `title`, `subtitle`, `steps[]` with `label` and `iconKey` (mapping to lucide icon names)
- [ ] Keep existing `workflow.title` and `workflow.subtitle` as section-level header text (update to be more concept-aligned)
- [ ] All three languages have complete translations
- [ ] Typecheck passes

---

### US-003: Add audience-based workflow data to dictionaries

**Description:** As a content author, I need audience-based workflow content in all three language files for use on audience-specific pages.

**Acceptance Criteria:**
- [ ] Add `audienceWorkflows` key to `da.json`, `en.json`, and `de.json`
- [ ] Three audience-based workflows defined:
  1. **Brand Admin**: Onboard Club → Create Agreement → Configure Products → Monitor Orders → Renew Partnerships → Scale Network
  2. **Club Admin**: Accept Agreement → Set Up Staff Access → Define Budgets → Approve Orders → Track Spending → Manage Renewals
  3. **Coach / Staff**: Log In → View Products → Check Team Sizes → Place Order → Track Status → Receive Delivery
- [ ] Each workflow has: `id`, `title`, `subtitle`, `steps[]` with `label` and `iconKey`
- [ ] All three languages have complete translations
- [ ] Typecheck passes

---

### US-004: Integrate multi-workflow into homepage

**Description:** As a visitor on the homepage, I want to see multiple platform workflows in a tabbed carousel so I understand the different processes the platform handles.

**Acceptance Criteria:**
- [ ] Homepage Workflow section renders all 3 process-based workflows from US-002
- [ ] Section header updated: "Sådan fungerer platformen" (DA) / "How the platform works" (EN) / "So funktioniert die Plattform" (DE)
- [ ] Subtitle updated: "Fra klub-oprettelse til levering — alt sker ét sted" (DA) / similar EN/DE
- [ ] Tab labels show each workflow's title
- [ ] First workflow is selected by default
- [ ] Workflow component receives the correct data from page dictionaries
- [ ] Typecheck passes
- [ ] Visual verification: Start dev server, navigate to `http://localhost:3000`, confirm tabbed workflows appear and switching works. Kill server.

---

### US-005: Update Hero section content and fix hardcoded text

**Description:** As a visitor, I want the hero section to clearly communicate B2B Sport's value as Denmark's partnership platform for sports clubs, with messaging pulled from the dictionary (not hardcoded).

**Acceptance Criteria:**
- [ ] Remove hardcoded Danish title from `Hero.tsx` — use dictionary values instead
- [ ] Update hero dictionary content in all 3 languages:
  - **DA**: Tag: "Partnerskabsplatformen for dansk sport" / Title line 1: "Hele Danmarks" / Title line 2: "klubpartner" / Subtitle: "Administrer klubber, aftaler og bestillinger — samlet ét sted."
  - **EN**: Tag: "The partnership platform for Danish sport" / Title line 1: "Denmark's" / Title line 2: "club partner" / Subtitle: "Manage clubs, agreements, and orders — all in one place."
  - **DE**: Tag: "Die Partnerschaftsplattform für dänischen Sport" / Title line 1: "Dänemarks" / Title line 2: "Clubpartner" / Subtitle: "Verwalten Sie Clubs, Vereinbarungen und Bestellungen — alles an einem Ort."
- [ ] Update hero CTA labels: Primary "Bliv partner" / "Become a partner" / "Partner werden", Secondary "Se platformen" / "See the platform" / "Plattform ansehen"
- [ ] Update stats bar: Replace "#1 Klubpartner" with "Færre fejl, mere sport" / "Less admin, more sport" / "Weniger Admin, mehr Sport" — keep "100% Digital" and "24/7 Platform"
- [ ] Hero `title` field in dictionary now includes `titleLine1` and `titleLine2` for proper two-line rendering
- [ ] Typecheck passes
- [ ] Visual verification: Start dev server, navigate to `http://localhost:3000`, confirm hero displays updated text and both CTAs work. Confirm switching locale to `/en` shows English text. Kill server.

---

### US-006: Update Welcome section content

**Description:** As a visitor, I want the welcome section to communicate the platform's core value of replacing fragmented tools with one centralized workspace.

**Acceptance Criteria:**
- [ ] Update `welcome` dictionary content in all 3 languages:
  - **DA**: Title: "Farvel Excel-ark. Hej digital klubstyring." / Description: "B2B Sport samler alle partnerskaber, aftaler og bestillinger i én platform — så brands kan skalere og klubber kan fokusere på sporten." / Left card tag: "Ét overblik" title: "Alle aftaler samlet" / Right card tag: "Struktureret" title: "Foruddefinerede priser"
  - **EN/DE**: Equivalent translations matching concept doc messaging
- [ ] CTA updated: "Se hvordan det virker" / "See how it works" / "So funktioniert es"
- [ ] Typecheck passes
- [ ] Visual verification: Start dev server, navigate to `http://localhost:3000`, confirm Welcome section text is updated. Kill server.

---

### US-007: Update Value Proposition section content

**Description:** As a visitor, I want the value proposition section to clearly differentiate B2B Sport's offering across its three pillars: platform, support, and partnership.

**Acceptance Criteria:**
- [ ] Update `valueProposition` dictionary content in all 3 languages:
  - Section tag: "Alt-i-én løsning" → "Bygget til B2B sport" / "Built for B2B sports" / "Für B2B-Sport gebaut"
  - Section title: "Alt hvad din klub behøver" → "Struktur på partnerskaber, effektivitet i bestillinger" / "Structured partnerships, efficient ordering" / "Strukturierte Partnerschaften, effiziente Bestellungen"
  - Section subtitle updated to reflect concept messaging
  - **Platform card**: Title "Centraliseret platform" — features: Agreement templates, Role-based access, Order tracking, Real-time dashboards
  - **Support card**: Title "Personlig support" — features: Dedicated contact, Sport-specific guidance, Onboarding assistance, Fast response
  - **Partnership card**: Title "Skalerbart partnerskab" — features: Manage 50 or 500 clubs from one dashboard, Reusable agreement templates, Proactive renewal alerts, Branded self-service portal
- [ ] Feature items updated to use concept doc's "Key Benefits" messaging
- [ ] All 3 languages complete
- [ ] Typecheck passes
- [ ] Visual verification: Start dev server, navigate to `http://localhost:3000`, confirm Value Proposition section displays updated cards and features. Kill server.

---

### US-008: Update Experience section and ContactCTA content

**Description:** As a visitor, I want the Experience section and Contact CTA to use credible, concept-aligned messaging instead of aspirational placeholder stats.

**Acceptance Criteria:**
- [ ] Update `experience` dictionary in all 3 languages:
  - Title: "Én fælles sandhedskilde" / "A single source of truth" / "Eine einzige Quelle der Wahrheit"
  - Title highlight: "for alle partnerskaber" / "for all partnerships" / "für alle Partnerschaften"
  - Description updated to reflect concept: "When a question comes up about an order, an agreement, or a contact — the answer is in the platform."
  - Remove aspirational "1000+ Users" stat — replace with "Klar til / at skalere" / "Ready / to scale"
  - Solutions items updated: "Centralized partnership management", "Agreement templates with clear terms", "Role-based access across organizations", "Real-time dashboards per user level"
- [ ] Update `contactCTA` dictionary in all 3 languages:
  - Title: "Klar til at professionalisere jeres partnerskaber?" / "Ready to professionalize your partnerships?" / "Bereit, Ihre Partnerschaften zu professionalisieren?"
  - Subtitle: "Lad os vise jer hvordan B2B Sport kan bringe struktur til jeres klub- og leverandørrelationer" / equivalent EN/DE
- [ ] Typecheck passes
- [ ] Visual verification: Start dev server, navigate to `http://localhost:3000`, confirm Experience and ContactCTA sections show updated text. Kill server.

---

### US-009: Update What We Do page content

**Description:** As a visitor on the What We Do page, I want content that explains the platform's full value proposition — not just the ordering process but the entire partnership lifecycle.

**Acceptance Criteria:**
- [ ] Update `whatWeDoPage` dictionary in all 3 languages:
  - **Hero**: Tag "Hvad vi gør" / Title: "Partnerskaber fortjener bedre værktøjer" / Subtitle: "B2B Sport erstatter spredte processer med én samlet platform for brands, distributører og klubber."
  - **Mission section**: Rewrite 3 feature cards:
    1. "Onboarding der virker" — "Registrer og organiser partnerklubber med profiler, kontakter og sportsfokus — ét levende kartotek."
    2. "Aftaler med struktur" — "Opret genbrugelige aftaleskabeloner med rabatter, produktadgang og volumenforpligtelser. Aktivér per klub."
    3. "Bestillinger med kontekst" — "Ordrer flyder inden for aktive aftaler — korrekte priser, godkendte sortimenter og budgetoverblik er bygget ind."
  - **Comparison section**: Update "current way" items to match concept (spreadsheets, email threads, disconnected tools, manual tracking, expired agreements). Update "our way" to match (centralized platform, structured agreements, role-based access, real-time dashboards, proactive alerts).
  - **Process section**: Update 3 steps to reflect platform lifecycle:
    1. "Opret og organiser" — clubs, agreements, staff
    2. "Bestil med tillid" — within pre-negotiated terms
    3. "Følg med i realtid" — dashboards and tracking
  - **CTA section**: "Klar til at se platformen i aktion?" / "Ready to see the platform in action?"
- [ ] All 3 languages complete and consistent
- [ ] Typecheck passes
- [ ] Visual verification: Start dev server, navigate to `http://localhost:3000/what-we-do`, confirm all sections show updated content. Kill server.

---

### US-010: Update Contact page and footer content

**Description:** As a visitor, I want the contact page and footer to reflect consistent, concept-aligned messaging and accurate company information.

**Acceptance Criteria:**
- [ ] Update `contactPage.hero` dictionary in all 3 languages:
  - Title: "Lad os tale om jeres partnerskaber" / "Let's talk about your partnerships" / "Sprechen wir über Ihre Partnerschaften"
  - Subtitle updated to concept messaging
- [ ] Update `footer.company.description` in all 3 languages to match concept positioning: "Den centraliserede platform der forbinder sports-brands, distributører og klubber — erstatter manuelle processer med ét struktureret arbejdsrum."
- [ ] Update `footer.bottom.copyright` year to 2026
- [ ] Verify all contact information matches CLAUDE.md (phone: +45 69 15 35 45, email: info@b2bsport.dk)
- [ ] Fix any inconsistent contact info across dictionary files (currently footer and contactPage have different phone/email values)
- [ ] All 3 languages complete
- [ ] Typecheck passes

---

### US-011: Add navigation structure for new pages

**Description:** As a developer, I need navigation entries and routing prepared for the new For Brands and For Clubs pages.

**Acceptance Criteria:**
- [ ] Add nav items to all 3 dictionary files: `nav.forBrands` ("For brands" / "For Brands" / "Für Marken") and `nav.forClubs` ("For klubber" / "For Clubs" / "Für Vereine")
- [ ] Add entries to Header component navigation (positioned after "What We Do")
- [ ] Add entries to footer quick links
- [ ] Navigation items link to `/for-brands` and `/for-clubs` respectively
- [ ] Typecheck passes
- [ ] Visual verification: Start dev server, navigate to `http://localhost:3000`, confirm new nav items appear in header. Kill server.

---

### US-012: Create "For Brands & Suppliers" page

**Description:** As a brand/supplier visitor, I want a dedicated page that explains how B2B Sport helps me scale club partnerships, manage agreements, and streamline ordering.

**Acceptance Criteria:**
- [ ] Create page at `src/app/[locale]/for-brands/page.tsx`
- [ ] Add `forBrandsPage` dictionary content in all 3 languages
- [ ] Page sections (reusing existing component patterns/styles):
  1. **Hero**: "Stop med at administrere partnerskaber i regneark" / SubpageHero with video background (`/public/videos/background-03.webm/.mp4`)
  2. **Benefits grid**: 3-4 cards covering key brand benefits from concept doc (scale without scaling headcount, reduce order errors, retain more clubs, professionalize relationships)
  3. **Workflow**: Brand Admin workflow (single, no tabs) from US-003 audience workflows
  4. **Features list**: Agreement templates, role-based access, dashboard intelligence, order management
  5. **CTA**: "Klar til at skalere jeres klubnetværk?"
- [ ] Page follows existing visual style (forest/coral/cream, same typography, same spacing patterns)
- [ ] Typecheck passes
- [ ] Visual verification: Start dev server, navigate to `http://localhost:3000/for-brands`, confirm page renders with all sections. Kill server.

---

### US-013: Create "For Clubs" page

**Description:** As a club administrator visitor, I want a dedicated page that explains how B2B Sport gives my club centralized supplier management, controlled delegation, and spending transparency.

**Acceptance Criteria:**
- [ ] Create page at `src/app/[locale]/for-clubs/page.tsx`
- [ ] Add `forClubsPage` dictionary content in all 3 languages
- [ ] Page sections (reusing existing component patterns/styles):
  1. **Hero**: "Én platform for alle leverandørrelationer" / SubpageHero with video background (`/public/videos/background-04.webm/.mp4`)
  2. **Benefits grid**: 3-4 cards covering key club benefits (centralized supplier relationships, controlled delegation, transparency on terms and spending)
  3. **Workflow**: Tabbed — Club Admin workflow + Coach/Staff workflow from US-003
  4. **Role explanation**: Visual breakdown of Club Admin vs. Coach/Staff access levels
  5. **CTA**: "Klar til at tage kontrol over jeres udstyr?"
- [ ] Page follows existing visual style
- [ ] Typecheck passes
- [ ] Visual verification: Start dev server, navigate to `http://localhost:3000/for-clubs`, confirm page renders with all sections. Kill server.

---

### US-014: Enhance sport-specific landing pages with concept content

**Description:** As a visitor browsing a sport-specific page, I want content that connects the sport to B2B Sport's platform value — not just generic "equipment for [sport]" messaging.

**Acceptance Criteria:**
- [ ] Update `sportsPage` dictionary content in all 3 languages:
  - Benefits section rewritten: "Digital ordering within club agreements", "Track every order from request to delivery", "Staff can order independently — within guardrails", "One platform for all your [sport] equipment needs"
  - CTA updated: "Se hvordan [sport]-klubber bruger platformen" / "See how [sport] clubs use the platform"
- [ ] Add `sportsPage.workflow` dictionary content — a simplified Coach ordering workflow (3-4 steps) specific to sport context: "View [sport] catalog → Add to order → Track delivery"
- [ ] Sport landing page template includes a compact workflow section (single workflow, no tabs)
- [ ] All 3 languages complete
- [ ] Typecheck passes
- [ ] Visual verification: Start dev server, navigate to `http://localhost:3000/sports/football` (or first available sport route), confirm updated content appears. Kill server.

---

## Functional Requirements

- FR-1: Workflow component must accept a `workflows` array prop, each entry defining `id`, `title`, `subtitle`, `steps[]`
- FR-2: When `workflows` contains >1 entry, render tab navigation above the flow canvas
- FR-3: When `workflows` contains exactly 1 entry, render without tabs (page-specific mode)
- FR-4: Tab switching updates both desktop (React Flow) and mobile (vertical list) views
- FR-5: All user-facing text must come from dictionary files — no hardcoded language strings in components
- FR-6: All dictionary content must exist in DA, EN, and DE
- FR-7: Hero title must use dictionary values, supporting `titleLine1` and `titleLine2` for two-line rendering
- FR-8: Navigation header and footer must include links to For Brands and For Clubs pages
- FR-9: New pages must follow existing routing pattern (`src/app/[locale]/[page]/page.tsx`)
- FR-10: New pages must reuse existing component patterns and visual style — no new design system tokens
- FR-11: Contact information must be consistent across all pages (phone: +45 69 15 35 45, email: info@b2bsport.dk)

## Non-Goals (Out of Scope)

- No visual redesign — keep existing color palette, typography, spacing, and component styles
- No new animation system or motion library
- No CMS integration — content stays in static dictionary files
- No backend or API changes
- No authentication or dynamic content
- No testimonials section rework (existing testimonials in dictionary are fine for now)
- No product configurator changes
- No new brand logos or image assets (use existing)
- No SEO/meta tag optimization (separate effort)
- No A/B testing infrastructure

## Design Considerations

- Workflow tabs should feel native to the existing aesthetic — use `bg-forest-900` active tab with `text-cream-100`, inactive tabs with `text-forest-600` on transparent/cream background
- Tab labels should be concise (2-3 words) to work on mobile
- For Brands and For Clubs pages should mirror the structure of the What We Do page (SubpageHero → content sections → CTA) to maintain site consistency
- Sport landing pages get a compact 3-4 step workflow, not the full 6-step version
- Hero stats bar remains — just updated content

## Technical Considerations

- Workflow component refactor should remain backward-compatible during transition: if old-format props are passed (single workflow object), it should still render correctly
- Icon mapping: workflow step `iconKey` values should map to lucide-react icon components via a lookup object (e.g., `{ "UserPlus": UserPlus, "FileText": FileText, ... }`)
- Dictionary structure change: `workflow.nodes` → `workflow.workflows[]` — update all consuming components
- New pages follow existing `[locale]` dynamic route pattern with `generateStaticParams`
- React Flow instance should be recreated or updated when switching workflow tabs to avoid stale node positions

## Success Metrics

- All placeholder text on existing pages replaced with concept-aligned content
- Workflow component supports both carousel (multi) and single workflow modes
- 3 process-based + 3 audience-based workflows fully defined in all 3 languages
- For Brands and For Clubs pages live with complete content
- Sport pages show contextual workflow
- No regression in typecheck, lint, or visual rendering
- All contact information consistent across the site

## Video Assets Required

New video backgrounds needed before US-012 and US-013 can be fully completed:

| File | Location | Used on | Content direction |
|---|---|---|---|
| `background-03.webm` + `.mp4` | `/public/videos/` | For Brands page hero | The "supplier side" — warehouse/logistics, someone managing orders on a screen, brand products being packed for clubs. Professional, operational feel. |
| `background-04.webm` + `.mp4` | `/public/videos/` | For Clubs page hero | The "club side" — training session, coach organizing equipment, team receiving new kits, club facility life. Energetic, grassroots feel. |

**Specs:** Both `.webm` and `.mp4` formats, landscape, 1080p minimum, no audio, seamless loop. Match duration/style of existing `background-01` and `background-02`.

Sport-specific pages will reuse existing videos for now.

## Resolved Decisions

1. **Workflow URL params** — Not now. Simple tab state is sufficient.
2. **Sport-specific workflows** — Generic coach ordering flow for now. Sport-specific variations are a fast-follow once we have real usage data.
3. **Pricing on For Brands page** — No. Page drives demo bookings. Pricing is bespoke per brand.
4. **Video backgrounds** — New assets for audience pages (see table above). Existing videos for sport pages.
5. **About page** — Out of scope. Contact page with offices and team stays. "Real company, real people" principle is reflected in tone of voice across all content instead.

## Open Questions

1. Are there specific team members or roles we should highlight more prominently beyond the current team section on the contact page?
2. Should we consider a "case study" or "how it works in practice" section on audience pages once we have real customer stories?

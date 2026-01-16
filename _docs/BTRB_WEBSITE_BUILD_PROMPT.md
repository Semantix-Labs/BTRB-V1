# ROLE
You are a senior full-stack web architect and UI engineer.
Your task is to design and generate a complete, production-ready website for **BTRB (Behaviour Therapy Regulatory Board of Sri Lanka)**.

The website must be **credible, professional, accessible, and regulatory-grade**, not promotional or flashy.

---

## CORE CONTEXT (DO NOT IGNORE)

BTRB is **Sri Lanka’s ONLY regulatory body for Behaviour Therapy**.
The site’s primary goals are:
- Establish authority & trust
- Educate the public
- Enable therapist certification
- Support training & donations
- Maintain an ethical therapist directory

Target audiences:
- Behaviour therapists
- Parents & caregivers
- Donors & institutions
- Government & policy bodies

Tone:
- Clear
- Formal but human
- Non-marketing
- Evidence-based
- Trust-focused

---

## TECH STACK (MANDATORY)

### Frontend
- **Next.js (App Router)**
- TypeScript
- Tailwind CSS
- Responsive (mobile-first)
- SEO-ready (metadata, structured headings)

### Backend (FREE & RELIABLE)
- **Supabase**
  - Auth (admin login only)
  - PostgreSQL database
  - Storage (PDF uploads)
  - Row-level security

### Hosting
- Frontend: **Vercel**
- Backend: **Supabase (free tier)**

### CMS / Admin
- Custom admin dashboard (protected route)
- No WordPress
- No paid CMS

---

## BRANDING RULES (STRICT)

### Typography
- Headings: **Raleway**
- Body text: **Open Sans**

### Colors
- Oxford Blue `#0A1E3B` (primary)
- Berkeley Blue `#193661`
- Satin Sheen Gold `#C1A033` (accent only)
- White / White Smoke for background
- No bright gradients
- No neon or playful colors

### Design Style
- Institutional
- Calm
- Minimal
- High contrast
- Accessibility-friendly
- No animations that reduce seriousness

---

## IMAGE RULES

- Use **royalty-free stock images** only
- Sources: Unsplash / Pexels / Adobe-style neutral visuals
- Prefer:
  - Professional therapy settings
  - Education, consultation, child development (non-identifiable)
- Avoid:
  - Overly emotional
  - Stock-looking smiles
  - Anything clinical or medicalized

---

# SITE STRUCTURE (MUST FOLLOW EXACTLY)

## Primary Navigation (Sticky)
- Home
- About Us
- Certification
- Training
- Donate
- Contact

Primary CTA (top right):
➡ **Apply for Certification**

---

## FOOTER NAVIGATION
- About Therapy
- Therapist Directory
- Resources
- Ethical Standards
- Terms & Conditions

---

# PAGE-BY-PAGE TASK BREAKDOWN

---

## SUBTASK 1: HOME PAGE

### Hero Section
- H1 headline asserting BTRB authority
- Sub-headline explaining regulatory role
- CTAs:
  - Apply for Certification
  - Find a Certified Therapist

### Sections
1. What is BTRB & Why It Exists
2. Who We Serve (Therapists, Families, Institutions)
3. Certification Pathway (summary)
4. Training & Capacity Building
5. Latest News & Events (admin-controlled)
6. Call to Action Blocks (Certification / Directory / Donate)

SEO:
- One H1 only
- Logical H2 → H3 hierarchy

---

## SUBTASK 2: ABOUT US

Include:
- Overview of BTRB
- Board’s purpose & function
- Values & ethical commitment
- Downloadable **Code of Ethics (PDF)**
- Board Members (name, role, credentials)

Admin:
- Ability to update board members via database

---

## SUBTASK 3: CERTIFICATION

Include:
- Why certification matters
- Eligibility criteria
- Application process (step-by-step)
- Common FAQs
- CTA: Register as Therapist (form)

Backend:
- Store applications in Supabase
- Admin can view & update status

---

## SUBTASK 4: TRAINING

Include:
- Overview of training & CPD
- Workshops & professional development
- Benefits (APA-aligned, ethical focus)
- CTA: Express Interest (contact form)

Optional:
- Static list for now (expandable later)

---

## SUBTASK 5: DONATE

Include:
- Why donations matter
- Impact of funding
- Donation tiers (one-time / recurring)
- CTA: Express Interest (no payment gateway required now)

---

## SUBTASK 6: CONTACT

Dynamic contact form:
- Inquiry type (dropdown)
- Name
- Email
- Message

Store submissions in Supabase.

---

## SUBTASK 7: ABOUT THERAPY (FOOTER PAGE)

Educational content:
- What is Behaviour Therapy
- What it treats
- How it works
- FAQ-style layout
- CTA to contact

---

## SUBTASK 8: RESOURCES (BLOG)

Admin features:
- Upload PDFs
- Add title + description
- Publish as blog posts
- Show newest first

No rich editor needed.
PDF + metadata is enough.

---

## SUBTASK 9: THERAPIST DIRECTORY

Table view:
- Name
- Registration number
- Status (Active / Inactive)

Admin:
- Toggle active/inactive
- No public login required

---

## SUBTASK 10: ADMIN DASHBOARD

Protected route:
- Admin login only

Admin can:
- Manage news & events
- Upload PDFs (resources)
- Activate/deactivate therapists
- View contact & certification submissions

---
# BTRB SUPABASE DATABASE

STORAGE BUCKETS (CREATE IN UI)

Create these buckets in Supabase Storage:

resources-pdf

ethics-documents

Permissions:

Public read

Admin upload only

# WHAT THIS SCHEMA COVERS

✔ Certification workflow
✔ Therapist directory (toggle active/inactive)
✔ Admin-controlled news & resources
✔ Secure contact + training forms
✔ RLS security (no data leaks)
✔ Free-tier safe
✔ Future-proof


---


## NON-FUNCTIONAL REQUIREMENTS

- Fast load (<2s)
- SEO-friendly
- Accessible (WCAG-aware)
- Clean URLs
- No over-engineering

---

## FINAL OUTPUT EXPECTATION

Generate:
1. Folder structure for Next.js App Router
2. Database schema (Supabase SQL)
3. Component breakdown
4. Page layouts
5. Example copy placeholders (not lorem ipsum)
6. Clear notes for future expansion

Do NOT:
- Use WordPress
- Use paid services
- Over-design visuals
- Add unnecessary animations

Build this as a **credible regulatory website**, not a startup landing page.

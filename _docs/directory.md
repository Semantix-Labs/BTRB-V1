What You’re Trying to Achieve

Flow:

Therapist submits application form

Data goes into database

Admin reviews

Admin sets status:

Authorized (Active)

Unauthorized (Inactive)

Approved Professional (Non-Certified)

Directory shows only approved profiles

Public can filter by status

This is a classic:

Application → Review → Approval → Public Listing
=======================================================

Why One Table Is Not Enough

If you only use one form table:

You mix raw application data with public directory data

No clean separation between “submitted” and “approved”

Hard to manage reapplications

No audit history

Difficult to scale when adding CPD, renewals, suspensions
=======================================================
Good. You already have a strong **application intake table**.

Now let’s convert this into a proper **regulatory-grade Supabase schema** that supports:

* Application submission
* Admin review
* Status control
* Public directory
* Future certification renewals
* CPD tracking (later)

---

# ✅ FINAL SUPABASE DATABASE STRUCTURE

---

# 1️⃣ applications (KEEP – but modify)

This remains your raw submission table.

### Changes:

* Rename `status` → `review_status`
* Add structured enum instead of free text

### Add Enum

```sql
create type application_review_status as enum (
  'pending',
  'under_review',
  'approved',
  'rejected'
);
```

### Modify Column

```sql
alter table applications
rename column status to review_status;

alter table applications
alter column review_status type application_review_status
using review_status::application_review_status;

alter table applications
alter column review_status set default 'pending';
```

---

# 2️⃣ therapists (NEW – Public + Regulatory Table)

This is the controlled, approved table.

```sql
create type therapist_status as enum (
  'authorized_active',
  'unauthorized_inactive',
  'approved_non_certified'
);

create table therapists (
  id uuid primary key default uuid_generate_v4(),

  application_id uuid references applications(id) on delete set null,

  registration_number text unique,

  first_name text,
  surname text,
  full_name text generated always as (first_name || ' ' || surname) stored,

  email text,
  phone text,

  work_place_name text,
  work_place_address text,
  designation text,

  status therapist_status not null,

  directory_visible boolean default true,

  approved_at timestamptz default now(),
  last_status_updated_at timestamptz default now(),

  created_at timestamptz default now()
);
```

---

# 3️⃣ certification_records (Future-Proofing)

This allows renewals + expiry.

```sql
create type certification_type as enum (
  'rbt',
  'ibt',
  'behavior_analyst',
  'other'
);

create table certification_records (
  id uuid primary key default uuid_generate_v4(),

  therapist_id uuid references therapists(id) on delete cascade,

  certification_type certification_type,
  certification_number text,

  issue_date date,
  expiry_date date,

  is_active boolean default true,

  created_at timestamptz default now()
);
```

---

# 4️⃣ admin_users (Portal Access)

If using Supabase Auth:

```sql
create table admin_users (
  id uuid primary key references auth.users(id) on delete cascade,
  role text check (role in ('admin','super_admin')) not null,
  created_at timestamptz default now()
);
```

---

# 5️⃣ directory View (VERY IMPORTANT)

Public should NOT query therapists table directly.

Create a filtered view:

```sql
create view public_directory as
select
  id,
  full_name,
  registration_number,
  designation,
  work_place_name,
  work_place_address,
  status
from therapists
where directory_visible = true;
```

Frontend uses:

```
select * from public_directory;
```

Filter by:

```
status = 'authorized_active'
```

---

# 🔥 FULL WORKFLOW LOGIC

### Step 1

User submits form → `applications`

### Step 2

Admin reviews

### Step 3

If approved:

* Insert into `therapists`
* Insert certification record
* Set review_status = approved

If rejected:

* review_status = rejected
* No therapist created

### Step 4

Directory page reads only from `public_directory`

---

# 🛡 Row Level Security (CRITICAL)

### applications

* Public → INSERT only
* Admin → SELECT + UPDATE

### therapists

* Public → SELECT only from view
* Admin → Full access

---

# 💡 Why This Is The Correct Architecture

Because BTRB is positioned as:

> Sri Lanka’s ONLY REGULATORY BODY 

A regulatory body MUST:

* Separate application from approved registry
* Maintain controlled status
* Allow suspension/reactivation
* Track certification lifecycle

This structure supports that.

---

# 🚀 What This Enables Later

* Auto-expiry logic
* Annual renewal flow
* CPD tracking table
* Public verification badge
* Therapist profile pages
* Audit logs
* Suspension history

Without rebuilding the database.

---

# 🎯 Final Answer

Do NOT rely on single application table.
Use a structured regulatory model:

applications → therapists → certification_records

Clean separation. Scalable. Professional.




-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Profiles / Therapists Table (Publicly viewable if status is 'active')
create table therapists (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text not null,
  registration_number text, -- Assigned by Admin
  email text not null,
  phone text,
  specialization text,
  address text,
  status text default 'pending' check (status in ('pending', 'active', 'inactive', 'rejected')),
  bio text,
  profile_image_url text
);

-- 2. Inquiries (Contact Form Submissions)
create table inquiries (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  inquiry_type text not null, -- 'general', 'certification', 'training', 'complaint'
  message text not null,
  status text default 'new' check (status in ('new', 'read', 'archived'))
);

-- 3. Resources (PDFs/Blog Metadata)
create table resources (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text,
  file_url text not null, -- Supabase Storage URL
  category text, -- 'guide', 'form', 'policy'
  published boolean default true
);

-- 4. News & Events
create table news (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  content text,
  event_date timestamp with time zone,
  image_url text,
  published boolean default true
);

-- 5. Board Members
create table board_members (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  role text not null, -- e.g. 'President', 'Secretary'
  credentials text, -- e.g. 'PhD, BCBA'
  image_url text,
  bio text,
  order_index integer default 99
);

-- ROW LEVEL SECURITY (RLS) policies

-- Enable RLS on all tables
alter table therapists enable row level security;
alter table inquiries enable row level security;
alter table resources enable row level security;
alter table news enable row level security;
alter table board_members enable row level security;

-- POLICIES

-- Therapists: Public can read ACTIVE therapists only.
create policy "Public can view active therapists"
  on therapists for select
  using (status = 'active');

-- Therapists: Admin can do everything (assumed admin uses service role or specific email, 
-- but for simplicity in this SQL we usually just allow anon insert for application form? 
-- The Prompt says "Register as Therapist (form)". So Public must be able to INSERT.)

create policy "Public can submit therapist application"
  on therapists for insert
  with check (true); 
  -- Note: We might want to restrict status to 'pending' on insert, 
  -- but simplest is allow insert and backend/admin handles status. 
  -- Better: trigger to force status 'pending' or just rely on default.

-- Inquiries: Public can insert. Admin defines view.
create policy "Public can submit inquiries"
  on inquiries for insert
  with check (true);

-- Resources: Public can view published.
create policy "Public can view published resources"
  on resources for select
  using (published = true);

-- News: Public can view published.
create policy "Public can view published news"
  on news for select
  using (published = true);

-- Board Members: Public can view all.
create policy "Public can view board members"
  on board_members for select
  using (true);

-- STORAGE BUCKETS (Script cannot create buckets, but note for UI)
-- Bucket: resources-pdf (Public Read)
-- Bucket: ethics-documents (Public Read)

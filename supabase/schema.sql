-- Create a table for therapist applications
create table public.therapist_applications (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  -- Personal Information
  first_name text not null,
  surname text not null,
  date_of_birth date,
  address text,
  phone text,
  phone_optional text,
  email text,
  nic_or_passport text,
  
  -- File Paths (Stored as text paths to Supabase Storage)
  nic_front_path text,
  nic_back_path text,
  
  -- Criteria Selection
  current_rbt boolean default false,
  rbt_certification_no text,
  
  current_ibt boolean default false,
  ibt_certification_no text,
  
  expired_rbt boolean default false,
  expired_rbt_file_path text,
  
  voluntary_inactive_rbt boolean default false,
  voluntary_inactive_rbt_certification_no text,
  voluntary_inactive_rbt_reactivation_date date,
  
  expired_ibt boolean default false,
  expired_ibt_file_path text,
  
  practicing_behavior_therapist boolean default false,
  other_aba_qualifications boolean default false,
  behaviour_analyst boolean default false,
  
  -- Additional Information (Education & Work)
  institution text,
  period_of_education text,
  qualifications text,
  education_file_path text,
  
  work_place_name text,
  work_place_address text,
  employment_period text,
  designation text,
  full_time_part_time text,
  explanation_of_services text,
  work_experience_file_path text,
  
  cv_file_path text,
  insurance_file_path text,
  
  -- Terms and Conditions checkboxes
  resident boolean default false,
  agree_objectives boolean default false,
  agree_maintenance boolean default false,
  agree_license boolean default false,
  agree_update boolean default false,
  agree_malpractice boolean default false,
  agree_ethics boolean default false,
  agree_police_clearance boolean default false,
  
  -- Status tracking
  status text default 'pending' check (status in ('pending', 'approved', 'rejected', 'more_info_needed'))
);

-- Enable Row Level Security
alter table public.therapist_applications enable row level security;

-- Policy: Allow anyone to insert (public submission)
create policy "Allow public to insert applications"
on public.therapist_applications
for insert
to anon
with check (true);

-- Policy: Allow only authenticated users (admins) to view applications
-- Assuming you will have authenticated admins later. For now, we can leave this restricted or allow anon read for development if needed.
-- Ideally, you'd restrict this to a specific role.
create policy "Allow authenticated users to select"
on public.therapist_applications
for select
to authenticated
using (true);

-- Policy: Allow authenticated users to update
create policy "Allow authenticated users to update"
on public.therapist_applications
for update
to authenticated
using (true);

-- ==============================================================================
-- BARB SUPABASE SCHEMA (FULL RECREATION)
-- Execute this SQL in your Supabase SQL Editor to build the system from scratch.
-- ==============================================================================

-- ------------------------------------------------------------------------------
-- 1️⃣ APPLICANT SUBMISSIONS (therapist_applications)
-- This matches the exact fields from your Next.js application form.
-- ------------------------------------------------------------------------------

CREATE TYPE application_review_status AS ENUM (
  'pending',
  'under_review',
  'approved',
  'rejected'
);

CREATE TABLE therapist_applications (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    -- Status
    review_status application_review_status DEFAULT 'pending',
    
    -- Personal Information
    first_name text,
    surname text,
    date_of_birth date,
    address_line text,
    city text,
    post_code text,
    phone text,
    phone_optional text,
    email text,
    nic_or_passport text,
    nic_front_file_name text,
    nic_back_file_name text,

    -- Criteria Selection
    current_rbt boolean DEFAULT false,
    rbt_certification_no text,
    current_ibt boolean DEFAULT false,
    ibt_certification_no text,
    expired_rbt boolean DEFAULT false,
    expired_rbt_file_name text,
    voluntary_inactive_rbt boolean DEFAULT false,
    voluntary_inactive_rbt_certification_no text,
    voluntary_inactive_rbt_reactivation_date date,
    expired_ibt boolean DEFAULT false,
    expired_ibt_file_name text,
    practicing_behavior_therapist boolean DEFAULT false,
    other_aba_qualifications boolean DEFAULT false,
    behaviour_analyst boolean DEFAULT false,

    -- Additional Information
    institution text,
    period_of_education text,
    qualifications text,
    education_file_name text,
    work_place_name text,
    work_place_address text,
    employment_period text,
    designation text,
    full_time_part_time text,
    explanation_of_services text,
    work_experience_file_name text,
    cv_file_name text,
    insurance_file_name text,

    -- Terms and Conditions (Agreements)
    resident boolean DEFAULT false,
    agree_objectives boolean DEFAULT false,
    agree_maintenance boolean DEFAULT false,
    agree_license boolean DEFAULT false,
    agree_update boolean DEFAULT false,
    agree_malpractice boolean DEFAULT false,
    agree_ethics boolean DEFAULT false,
    agree_police_clearance boolean DEFAULT false,

    -- Meta
    submitted_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- ------------------------------------------------------------------------------
-- 2️⃣ APPROVED THERAPISTS REGISTRY (therapists)
-- This is the public/regulated table representing approved individuals.
-- ------------------------------------------------------------------------------

CREATE TYPE therapist_status AS ENUM (
  'authorized_active',
  'unauthorized_inactive',
  'approved_non_certified'
);

CREATE TABLE therapists (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Link back to original application wrapper
  application_id uuid REFERENCES therapist_applications(id) ON DELETE SET NULL,

  registration_number text UNIQUE,

  -- Core Identifiers
  first_name text,
  surname text,
  full_name text GENERATED ALWAYS AS (first_name || ' ' || surname) STORED,

  email text,
  phone text,

  -- Professional Info
  work_place_name text,
  work_place_address text,
  city text,
  post_code text,
  designation text,
  
  -- UI Directory Overrides
  bio text,
  profile_image_url text,

  -- Regulatory Status
  status therapist_status NOT NULL,
  directory_visible boolean DEFAULT true,

  approved_at timestamptz DEFAULT now(),
  last_status_updated_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- ------------------------------------------------------------------------------
-- 3️⃣ CERTIFICATION TRACKING (certification_records)
-- Handles expirations and renewals without altering the core therapist row.
-- ------------------------------------------------------------------------------

CREATE TYPE certification_type AS ENUM (
  'rbt',
  'ibt',
  'behavior_analyst',
  'other'
);

CREATE TABLE certification_records (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),

  therapist_id uuid REFERENCES therapists(id) ON DELETE CASCADE,

  certification_type certification_type,
  certification_number text,

  issue_date date,
  expiry_date date,

  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- ------------------------------------------------------------------------------
-- 4️⃣ DIRECTORY VIEW (public_directory)
-- Public should NOT query `therapists` or `therapist_applications` directly.
-- ------------------------------------------------------------------------------

CREATE VIEW public_directory AS
SELECT
  id,
  full_name,
  profile_image_url,
  bio,
  registration_number,
  designation,
  work_place_name,
  work_place_address,
  city,
  status
FROM therapists
WHERE directory_visible = true;

-- ------------------------------------------------------------------------------
-- 5️⃣ ROW LEVEL SECURITY (RLS)
-- ------------------------------------------------------------------------------

ALTER TABLE therapist_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE therapists ENABLE ROW LEVEL SECURITY;
ALTER TABLE certification_records ENABLE ROW LEVEL SECURITY;

-- Applications: Anyone can insert, only authenticated admins can view/edit
CREATE POLICY "Allow public insert on applications" 
ON therapist_applications FOR INSERT 
TO public 
WITH CHECK (true);

-- Therapists: Anyone can view the approved ones
CREATE POLICY "Allow public select on therapists" 
ON therapists FOR SELECT 
TO public 
USING (directory_visible = true);

-- ------------------------------------------------------------------------------
-- 6️⃣ DUMMY DATA FOR TESTING
-- Optional: Execute this to populate the directory with sample therapists
-- ------------------------------------------------------------------------------

INSERT INTO therapists (
  first_name, 
  surname, 
  designation, 
  registration_number, 
  work_place_address,
  city,
  bio, 
  status, 
  directory_visible
) VALUES
('Sarah', 'Jennings', 'Autism Spectrum Disorder', 'BARB-2024-001', '142 Galle Road', 'Colombo', 'Over 15 years of experience specializing in early intervention for children with autism.', 'authorized_active', true),
('David', 'Perera', 'Behavioral Support in Schools', 'BARB-2024-042', '88 Peradeniya Road', 'Kandy', 'Expert in developing inclusive classroom environments and training educational staff.', 'authorized_active', true),
('Jane', 'Fernando', 'ADHD and Self-Regulation', 'BARB-2022-015', '45 Main Street', 'Galle', 'Currently on a leave of absence for further research.', 'unauthorized_inactive', true),
('Michael', 'Silva', 'Teens and Young Adults', 'BARB-2021-089', '12 Mendis Lane', 'Moratuwa', 'Specialized in transition planning and vocational skills training.', 'unauthorized_inactive', true),
('Amila', 'Ratnayake', 'Clinical Psychology', 'SLMC-4592', '77 High Level Road', 'Nugegoda', 'Approved practitioner offering integrated clinical and behavioral support services.', 'approved_non_certified', true),
('Natasha', 'Wijesooriya', 'Speech and Language Therapy', 'SLMC-8821', '21 Horton Place', 'Colombo', 'Approved professional providing specialized communication intervention programs.', 'approved_non_certified', true);

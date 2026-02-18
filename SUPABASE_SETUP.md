# Supabase Setup Guide for Therapist Membership Application

This guide will help you set up the necessary backend infrastructure in Supabase to support the Therapist Membership Application form.

## Prerequisites
-   Access to your Supabase Project Dashboard.
-   The SQL scripts provided in the `supabase` directory of this project.

## Step 1: Create Database Table
1.  Navigate to the **SQL Editor** in your Supabase Dashboard.
2.  Open the file `supabase/schema.sql` from your project in a text editor.
3.  Copy the entire content of `schema.sql`.
4.  Paste it into the SQL Editor in Supabase.
5.  Click **Run** to execute the script.
    -   This will create the `therapist_applications` table with all the necessary columns and Row Level Security (RLS) policies.

## Step 2: Set Up Storage Bucket
1.  Open the file `supabase/storage.sql` from your project.
2.  Copy the entire content of `storage.sql`.
3.  Paste it into the SQL Editor in Supabase (you can clear the previous script or open a new query).
4.  Click **Run**.
    -   This will create a new private storage bucket named `application-documents` and set up policies to allow users to upload their documents securely.

## Step 3: Configure Environment Variables
1.  Go to your Supabase Project Dashboard.
2.  Click on the **Settings** icon (cogwheel) at the bottom left.
3.  Click on **API** in the sidebar.
4.  Find the **Project URL** and copy it.
5.  Find the **Project API keys** section and copy the `anon` `public` key.
6.  Open the `.env.local` file in your project root locally.
7.  Update the values with your copied keys:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_project_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_public_key
    ```
8.  Save the file.
9.  Restart your development server (`npm run dev`) for the changes to take effect.

## Step 4: Verify Setup
1.  Go to the **Table Editor** in Supabase and check if `therapist_applications` table exists.
2.  Go to **Storage** in Supabase and check if `application-documents` bucket exists.

## Notes
-   **File Uploads**: The current implementation uses a placeholder upload function in the frontend code (`components/features/membership-form/components/review-and-submit.tsx`).
    -   *Why?* The current form state stores `fileName` (string) instead of the actual `File` object.
    -   *Next Step*: To enable actual large file uploads, you will need to refactor the form steps to store the `File` object in the central state, and then pass it to the `uploadFile` function in `ReviewAndSubmit`.
-   **RLS Policies**: The scripts include basic RLS policies.
    -   `anon` (public) users can **INSERT** applications and **UPLOAD** files.
    -   `authenticated` (logged in admins) users can **VIEW** and **UPDATE** applications and files.

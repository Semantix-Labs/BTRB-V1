-- Create a storage bucket for application documents
insert into storage.buckets (id, name, public)
values ('application-documents', 'application-documents', false); -- Private bucket, secure files

-- Policy: Allow public to upload files (for application form)
create policy "Allow public to upload documents"
on storage.objects
for insert
to anon
with check ( bucket_id = 'application-documents' );

-- Policy: Allow authenticated users (admins) to view files
create policy "Allow authenticated users to select documents"
on storage.objects
for select
to authenticated
using ( bucket_id = 'application-documents' );

-- Policy: Allow authenticated users to delete/update (optional, for management)
create policy "Allow authenticated users to update documents"
on storage.objects
for update
to authenticated
using ( bucket_id = 'application-documents' );

create policy "Allow authenticated users to delete documents"
on storage.objects
for delete
to authenticated
using ( bucket_id = 'application-documents' );

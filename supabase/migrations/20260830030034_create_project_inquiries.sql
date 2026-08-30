/*
# Create project_inquiries table (single-tenant, no auth)

1. New Tables
- `project_inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's name
  - `company` (text, nullable) — optional company name
  - `email` (text, not null) — submitter's email
  - `phone` (text, nullable) — optional phone/WhatsApp
  - `project_type` (text, nullable) — selected project type from dropdown
  - `description` (text, nullable) — what the user needs
  - `current_system` (text, nullable) — description of existing machine/product/process
  - `plc_controller` (text, nullable) — optional PLC/controller info
  - `budget` (text, nullable) — optional budget range
  - `file_url` (text, nullable) — optional uploaded file path
  - `status` (text, default 'new') — inquiry status for tracking
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `project_inquiries`.
- Allow anon + authenticated INSERT only (public can submit inquiries).
- No SELECT/UPDATE/DELETE for anon (inquiries are private to the site owner).
*/

CREATE TABLE IF NOT EXISTS project_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  email text NOT NULL,
  phone text,
  project_type text,
  description text,
  current_system text,
  plc_controller text,
  budget text,
  file_url text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE project_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON project_inquiries;
CREATE POLICY "anon_insert_inquiries" ON project_inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_project_inquiries_created_at ON project_inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_project_inquiries_status ON project_inquiries (status);

import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } from '$env/static/private';

/**
 * Server-only Supabase client using the service role key.
 * Never expose this to the browser — import only in +server.ts / +page.server.ts files.
 */
export const db = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

/**
 * SQL to create the contact_submissions table in Supabase.
 * Run once in the Supabase SQL editor:
 *
 * create table contact_submissions (
 *   id          uuid primary key default gen_random_uuid(),
 *   created_at  timestamptz default now(),
 *   name        text not null,
 *   email       text not null,
 *   phone       text,
 *   subject     text not null,
 *   message     text not null,
 *   ip          text,
 *   status      text default 'new'   -- new | read | replied
 * );
 *
 * -- Restrict access: only the service role can read/write
 * alter table contact_submissions enable row level security;
 * create policy "service role only" on contact_submissions
 *   using (auth.role() = 'service_role');
 */

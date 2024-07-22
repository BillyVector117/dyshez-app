import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://iyyligghubdlxazscfhj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5eWxpZ2dodWJkbHhhenNjZmhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5Mjg3OTAsImV4cCI6MjAzNjUwNDc5MH0.eVCSvUqrLwID2lblvcptrZ2I4CdF_UX3WtbEStgNYzY';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

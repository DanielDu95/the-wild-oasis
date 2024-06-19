import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fspzefwmxaamabhwvjms.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzcHplZndteGFhbWFiaHd2am1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwMzg0MDEsImV4cCI6MjAyMjYxNDQwMX0.V_NKAiBMRyUipwLqn7TkHr0hhvvctNEwo7znpNomo1w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

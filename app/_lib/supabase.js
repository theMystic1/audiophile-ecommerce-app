import { createClient } from "@supabase/supabase-js";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJobnBkenB0aXhmbnV6YWZqamNxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjAzMjE3MSwiZXhwIjoyMDI3NjA4MTcxfQ.HpFxhudrKRRq3_4aBu8rnsway-KhbnCqCufenniNb2I";
const supabaseUrl = "https://bhnpdzptixfnuzafjjcq.supabase.co";

// const supabaseKey = process.env.SUPABASE_KEY;
// const supabaseUrl = process.env.SUPABASE_URL;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or Key");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

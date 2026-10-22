import { ERRORS } from "@/lib/constants";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(ERRORS.MISSING_ENV_VAR);
}

export const supabase = createClient(supabaseUrl, supabaseKey);

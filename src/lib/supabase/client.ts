import { createClient } from "@supabase/supabase-js";
import { ENV_ERRORS } from "@/lib/constants";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(ENV_ERRORS.MISSING_REQUIRED);
}

export const supabase = createClient(supabaseUrl, supabaseKey);

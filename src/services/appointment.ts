import { DB_ERRORS, TABLES } from "@/lib/constants";
import type {
  Appointment,
  AppointmentInsert,
  AppointmentUpdate,
} from "@/types";
import { supabase } from "@/lib/supabase";

const table = TABLES.appointments;

export const AppointmentService = {
  getAll: async (): Promise<Appointment[]> => {
    const { data, error } = await supabase
      .from(table)
      .select("*")
      .order("appointment_date", { ascending: false });

    if (error) throw new Error(DB_ERRORS.QUERY_FAILED, { cause: error });

    return data;
  },

  getById: async (id: string): Promise<Appointment> => {
    const { data, error } = await supabase
      .from(table)
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw new Error(DB_ERRORS.QUERY_FAILED, { cause: error });

    return data;
  },

  create: async (payload: AppointmentInsert): Promise<Appointment> => {
    const { data, error } = await supabase
      .from(table)
      .insert(payload)
      .select()
      .single();

    if (error) throw new Error(DB_ERRORS.QUERY_FAILED, { cause: error });

    return data;
  },

  update: async (
    id: string,
    payload: AppointmentUpdate,
  ): Promise<Appointment> => {
    const { data, error } = await supabase
      .from(table)
      .update(payload)
      .eq("id", id)
      .select()
      .single();

    if (error) throw new Error(DB_ERRORS.QUERY_FAILED, { cause: error });

    return data;
  },

  remove: async (id: string): Promise<void> => {
    const { error } = await supabase.from(table).delete().eq("id", id);

    if (error) throw new Error(DB_ERRORS.QUERY_FAILED, { cause: error });
  },
};

import { TABLES } from "@/lib/constants";
import type { Tables, TablesInsert, TablesUpdate } from "@/types";

const table = TABLES.appointments;

export type Appointment = Tables<typeof table>;

export type AppointmentInsert = TablesInsert<typeof table>;

export type AppointmentUpdate = TablesUpdate<typeof table>;

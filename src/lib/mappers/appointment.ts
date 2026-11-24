import type { AppointmentFormOutput } from "@/lib/schema";
import { formatDate, formatTime } from "@/lib/utils";
import type { AppointmentInsert, AppointmentUpdate } from "@/types";

export const toAppointmentInsert = (
  data: AppointmentFormOutput,
): AppointmentInsert => ({
  appointment_date: data.date ? formatDate(data.date) : null,
  appointment_time: data.time ? formatTime(data.time) : null,

  pet_name: data.name,
  breed: data.breed,
  birth_date: formatDate(data.birthDate),
  gender: data.gender,
  size: data.size,
  weight: data.weight ?? null,

  owner_full_name: data.fullName,
  phone: data.phone,

  service: data.service,
  combined_options: data.combinedOptions,

  coat_condition: data.coatCondition,
  notes: data.notes,
});

export const toAppointmentUpdate = (
  data: Partial<AppointmentFormOutput>,
): AppointmentUpdate => ({
  ...(data.date !== undefined && {
    appointment_date: data.date ? formatDate(data.date) : null,
  }),

  ...(data.time !== undefined && {
    appointment_time: data.time ? formatTime(data.time) : null,
  }),

  ...(data.name !== undefined && { pet_name: data.name }),
  ...(data.breed !== undefined && { breed: data.breed }),

  ...(data.birthDate !== undefined && {
    birth_date: formatDate(data.birthDate),
  }),

  ...(data.gender !== undefined && { gender: data.gender }),
  ...(data.size !== undefined && { size: data.size }),
  ...(data.weight !== undefined && { weight: data.weight }),

  ...(data.fullName !== undefined && {
    owner_full_name: data.fullName,
  }),

  ...(data.phone !== undefined && { phone: data.phone }),
  ...(data.service !== undefined && { service: data.service }),

  ...(data.combinedOptions !== undefined && {
    combined_options: data.combinedOptions,
  }),

  ...(data.coatCondition !== undefined && {
    coat_condition: data.coatCondition,
  }),

  ...(data.notes !== undefined && { notes: data.notes }),
});

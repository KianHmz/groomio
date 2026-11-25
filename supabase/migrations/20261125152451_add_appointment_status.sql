CREATE TYPE public.appointment_status AS ENUM (
  'pending',
  'approved',
  'rejected'
);

ALTER TABLE public.appointments
ADD COLUMN status public.appointment_status
NOT NULL DEFAULT 'pending';
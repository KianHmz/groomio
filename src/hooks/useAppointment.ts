import { appointmentKeys } from "@/lib/constants";
import {
  toAppointmentInsert,
  toAppointmentUpdate,
} from "@/lib/mappers/appointment";
import type { AppointmentFormOutput } from "@/lib/schema";
import { AppointmentService } from "@/services/appointment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAppointments = () => {
  return useQuery({
    queryKey: appointmentKeys.lists(),
    queryFn: AppointmentService.getAll,
  });
};

export const useAppointment = (id: string) => {
  return useQuery({
    queryKey: appointmentKeys.detail(id),
    queryFn: () => AppointmentService.getById(id),
    enabled: !!id,
  });
};

export const useCreateAppointment = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: AppointmentFormOutput) =>
      AppointmentService.create(toAppointmentInsert(data)),

    onSuccess: () => {
      qc.invalidateQueries({ queryKey: appointmentKeys.all });
    },
  });
};

export const useUpdateAppointment = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<AppointmentFormOutput>;
    }) => AppointmentService.update(id, toAppointmentUpdate(data)),

    onSuccess: () => {
      qc.invalidateQueries({ queryKey: appointmentKeys.all });
    },
  });
};

export const useRemoveAppointment = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => AppointmentService.remove(id),

    onSuccess: () => {
      qc.invalidateQueries({ queryKey: appointmentKeys.all });
    },
  });
};

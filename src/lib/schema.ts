import {
  COAT_CONDITIONS,
  COMBINED_OPTIONS,
  GENDERS,
  IRAN,
  SERVICES,
  SIZES,
} from "@/lib/constants";
import i18n from "@/i18n";
import { z } from "zod";
import {
  getMaxBirthDate,
  getMinBirthDate,
  isTodayOrFuture,
} from "@/lib/utils/validators";
const { t } = i18n;

export const reservationSchema = z
  .object({
    // Date & Time
    date: z
      .date()
      .nullable()
      .optional()
      .refine((date) => !date || isTodayOrFuture(date), {
        message: t("validation:date", {
          field: t("reservation:DateTime.date"),
        }),
      }),

    time: z.date().nullable().optional(),

    // Pet details
    name: z
      .string()
      .trim()
      .min(
        1,
        t("validation:required", {
          field: t("reservation:petDetails.name"),
        }),
      )
      .min(
        2,
        t("validation:minLength", {
          field: t("reservation:petDetails.name"),
          min: 2,
        }),
      )
      .max(
        50,
        t("validation:maxLength", {
          field: t("reservation:petDetails.name"),
          max: 50,
        }),
      ),

    breed: z
      .string()
      .trim()
      .min(
        1,
        t("validation:required", {
          field: t("reservation:petDetails.breed"),
        }),
      )
      .min(
        2,
        t("validation:minLength", {
          field: t("reservation:petDetails.breed"),
          min: 2,
        }),
      )
      .max(
        50,
        t("validation:maxLength", {
          field: t("reservation:petDetails.breed"),
          max: 50,
        }),
      ),

    birthDate: z.coerce
      .date({
        error: t("validation:date", {
          field: t("reservation:petDetails.birthDate"),
        }),
      })
      .min(
        getMinBirthDate(),
        t("validation:min", {
          field: t("reservation:petDetails.birthDate"),
        }),
      )
      .max(
        getMaxBirthDate(),
        t("validation:max", {
          field: t("reservation:petDetails.birthDate"),
        }),
      ),

    gender: z.enum(GENDERS, {
      error: t("validation:requiredSelection", {
        field: t("reservation:petDetails.gender"),
      }),
    }),

    size: z.enum(SIZES, {
      error: t("validation:requiredSelection", {
        field: t("reservation:petDetails.size"),
      }),
    }),

    weight: z.preprocess(
      (value) =>
        typeof value === "string" && value.trim() === ""
          ? undefined
          : value === null || value === undefined
            ? undefined
            : value,
      z.coerce
        .number({
          error: t("validation:numeric", {
            field: t("reservation:petDetails.weight"),
          }),
        })
        .positive(
          t("validation:positive", {
            field: t("reservation:petDetails.weight"),
          }),
        )
        .max(
          200,
          t("validation:max", {
            field: t("reservation:petDetails.weight"),
            max: 200,
          }),
        ),
    ),

    // Owner details
    fullName: z
      .string()
      .trim()
      .min(
        1,
        t("validation:required", {
          field: t("reservation:ownerDetails.fullName"),
        }),
      )
      .min(
        3,
        t("validation:minLength", {
          field: t("reservation:ownerDetails.fullName"),
          min: 3,
        }),
      )
      .max(
        80,
        t("validation:maxLength", {
          field: t("reservation:ownerDetails.fullName"),
          max: 80,
        }),
      ),

    phone: z
      .string()
      .trim()
      .transform((value) => value.replace(/\D/g, ""))
      .pipe(
        z.string().regex(
          IRAN.regex,
          t("validation:valid", {
            field: t("reservation:ownerDetails.phone"),
          }),
        ),
      )
      .transform((phone) => `${IRAN.code}${phone}`),

    // Service
    service: z.enum(SERVICES, {
      error: t("validation:requiredSelection", {
        field: t("reservation:service.title"),
      }),
    }),

    combinedOptions: z.array(z.enum(COMBINED_OPTIONS)).default([]),

    coatCondition: z.enum(COAT_CONDITIONS, {
      error: t("validation:requiredSelection", {
        field: t("reservation:service.coatCondition.title"),
      }),
    }),

    // Notes
    notes: z
      .string()
      .trim()
      .max(
        500,
        t("validation:maxLength", {
          field: t("reservation:notes.title"),
          max: 500,
        }),
      )
      .default(""),
  })
  .superRefine((data, ctx) => {
    if (data.service === "combined" && data.combinedOptions.length === 0) {
      ctx.addIssue({
        code: "custom",
        path: ["combinedOptions"],
        message: t("validation:arrayMin", {
          field: t("reservation:service.combined.title"),
          min: 1,
        }),
      });
    }
  });

export type ReservationFormInput = z.input<typeof reservationSchema>;
export type ReservationFormOutput = z.output<typeof reservationSchema>;

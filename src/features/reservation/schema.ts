import i18n from "@/i18n";
import { z } from "zod";

const { t } = i18n;

const GENDERS = ["male", "female"] as const;
const SIZES = ["small", "medium", "large"] as const;
const SERVICES = ["haircutOnly", "combined"] as const;
const COMBINED_OPTIONS = ["haircut", "bath", "deMatting"] as const;
const COAT_CONDITIONS = ["none", "medium", "heavy", "felted"] as const;

export const reservationSchema = z
  .object({
    // Pet details
    name: z
      .string()
      .min(
        1,
        t("validation:required", { field: t("reservation:petDetails.name") }),
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
      .min(
        1,
        t("validation:required", { field: t("reservation:petDetails.breed") }),
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

    age: z
      .string()
      .min(
        1,
        t("validation:minLength", {
          field: t("reservation:petDetails.age"),
          min: 1,
        }),
      )
      .max(
        20,
        t("validation:maxLength", {
          field: t("reservation:petDetails.age"),
          max: 20,
        }),
      ),

    gender: z.enum(GENDERS, {
      message: t("validation:requiredSelection", {
        field: t("reservation:petDetails.gender"),
      }),
    }),

    size: z.enum(SIZES, {
      message: t("validation:requiredSelection", {
        field: t("reservation:petDetails.size"),
      }),
    }),

    weight: z.coerce
      .number({
        message: t("validation:numeric", {
          field: t("reservation:petDetails.weight"),
        }),
      })
      .positive(
        t("validation:positive", { field: t("reservation:petDetails.weight") }),
      )
      .max(
        200,
        t("validation:max", {
          field: t("reservation:petDetails.weight"),
          max: 200,
        }),
      ),

    // Owner details
    fullName: z
      .string()
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
      .min(
        1,
        t("validation:required", {
          field: t("reservation:ownerDetails.phone"),
        }),
      )
      .regex(
        /^(?:\+?98|0098|0)?9\d{9}$/, // fix later ...
        t("validation:valid", { field: t("reservation:ownerDetails.phone") }),
      ),

    // Service
    service: z.enum(SERVICES, {
      message: t("validation:requiredSelection", {
        field: t("reservation:service.title"),
      }),
    }),

    combinedOptions: z.array(z.enum(COMBINED_OPTIONS)).default([]),

    coatCondition: z.enum(COAT_CONDITIONS, {
      message: t("validation:requiredSelection", {
        field: t("reservation:service.coatCondition.label"),
      }),
    }),

    // Notes
    notes: z
      .string()
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
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  clinic: z.string().min(2, "Clinic name is required"),
  phone: z.string().optional(),
  patients: z.string().min(1, "Please select an option"),
  role: z.string().min(1, "Please select your role"),
});

type FormValues = z.infer<typeof schema>;

const patientRanges = [
  "< 50 active patients",
  "50–150 active patients",
  "150–500 active patients",
  "500+ active patients",
];

const roles = [
  "Physician / Medical Director",
  "Practice Owner / Administrator",
  "Nurse Practitioner / PA",
  "Other",
];

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormValues) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log(data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <CheckCircle2 className="h-12 w-12 text-accent" />
          <h3 className="text-xl font-semibold text-foreground">You&apos;re on the Calendar</h3>
          <p className="text-muted-foreground max-w-xs">
            We&apos;ll send a calendar invite to your email within a few minutes. See you soon!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold text-foreground">Request Your Demo</h2>
        <p className="text-sm text-muted-foreground">Fill in your details and we&apos;ll reach out to schedule your 30-minute session.</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Dr. Jane Smith" {...register("name")} />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Work Email</Label>
              <Input id="email" type="email" placeholder="jane@myclinic.com" {...register("email")} />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="clinic">Clinic Name</Label>
            <Input id="clinic" placeholder="Apex Longevity Center" {...register("clinic")} />
            {errors.clinic && <p className="text-xs text-destructive">{errors.clinic.message}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" {...register("phone")} />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="role">Your Role</Label>
            <select
              id="role"
              {...register("role")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Select your role</option>
              {roles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            {errors.role && <p className="text-xs text-destructive">{errors.role.message}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="patients">Active Patients</Label>
            <select
              id="patients"
              {...register("patients")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Select patient volume</option>
              {patientRanges.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            {errors.patients && <p className="text-xs text-destructive">{errors.patients.message}</p>}
          </div>

          <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
            {isSubmitting ? "Submitting..." : "Book My Free Demo"}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            We&apos;ll reach out within 1 business day to confirm your demo time.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

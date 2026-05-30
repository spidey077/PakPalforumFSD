import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const inputClassName =
  "mt-1 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]";

type FieldLabelProps = {
  id: string;
  label: string;
  children: ReactNode;
};

function FieldLabel({ id, label, children }: FieldLabelProps) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm text-[var(--color-text-muted)]">{label}</span>
      {children}
    </label>
  );
}

type TextFieldProps = {
  id: string;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function TextField({ id, label, className, ...props }: TextFieldProps) {
  return (
    <FieldLabel id={id} label={label}>
      <input id={id} className={cn(inputClassName, className)} {...props} />
    </FieldLabel>
  );
}

type TextAreaFieldProps = {
  id: string;
  label: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextAreaField({ id, label, className, ...props }: TextAreaFieldProps) {
  return (
    <FieldLabel id={id} label={label}>
      <textarea id={id} className={cn(inputClassName, "resize-y", className)} {...props} />
    </FieldLabel>
  );
}

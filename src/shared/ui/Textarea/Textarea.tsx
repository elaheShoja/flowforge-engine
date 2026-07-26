import { useEffect, useRef } from "react";
import clsx from "clsx";

import { FieldWrapper } from "@/shared/ui";

import type { TextareaProps } from "./Textarea.types";
import { textareaVariants } from "./Textarea.styles";

import "./Textarea.css";

export default function Textarea({
  label,
  helperText,
  error,

  fullWidth = false,

  autoResize = false,

  resize = "vertical",

  className,

  required,

  disabled,

  rows = 3,

  minRows,
  maxRows,

  ...props
}: TextareaProps) {

  const textareaRef =
    useRef<HTMLTextAreaElement>(null);

  const resizeTextarea = () => {
    if (!autoResize || !textareaRef.current) return;

    const textarea = textareaRef.current;

    textarea.style.height = "auto";

    const lineHeight = parseFloat(
      getComputedStyle(textarea).lineHeight
    );

    const minHeight =
      (minRows ?? rows) * lineHeight;

    const maxHeight =
      maxRows
        ? maxRows * lineHeight
        : Number.POSITIVE_INFINITY;

    const nextHeight = Math.min(
      Math.max(textarea.scrollHeight, minHeight),
      maxHeight
    );

    textarea.style.height = `${nextHeight}px`;

    textarea.style.overflowY =
      textarea.scrollHeight > maxHeight
        ? "auto"
        : "hidden";
  };

  useEffect(() => {
    resizeTextarea();
  }, [props.value, autoResize]);

  return (
    <FieldWrapper
      label={label}
      helperText={helperText}
      error={error}
      required={required}
      fullWidth={fullWidth}
    >
      <textarea
        ref={textareaRef}
        rows={rows}
        disabled={disabled}
        className={clsx(
          textareaVariants({
            error: !!error,
            disabled,
            fullWidth,
          }),
          className
        )}
        style={{
          resize: autoResize ? "none" : resize,
        }}
        {...props}
        onChange={(e) => {
          resizeTextarea();
          props.onChange?.(e);
        }}
      />
    </FieldWrapper>
  );
}
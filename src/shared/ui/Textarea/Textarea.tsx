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

  fullWidth = true,

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
    if (!autoResize || !textareaRef.current) {
      return;
    }

    const textarea = textareaRef.current;

    const styles = getComputedStyle(textarea);

    const lineHeight = parseFloat(
      styles.lineHeight
    );

    const padding =
      parseFloat(styles.paddingTop) +
      parseFloat(styles.paddingBottom);

    const border =
      parseFloat(styles.borderTopWidth) +
      parseFloat(styles.borderBottomWidth);

    if (!lineHeight) {
      return;
    }

    const minHeight =
      (minRows ?? rows) * lineHeight +
      padding +
      border;

    const maxHeight = maxRows
      ? maxRows * lineHeight +
        padding +
        border
      : Number.POSITIVE_INFINITY;

    textarea.style.height = "auto";

    const contentHeight =
      textarea.scrollHeight;

    const nextHeight = Math.min(
      Math.max(
        contentHeight,
        minHeight
      ),
      maxHeight
    );

    textarea.style.height =
      `${nextHeight}px`;

    textarea.style.overflowY =
      contentHeight > maxHeight
        ? "auto"
        : "hidden";
  };

  useEffect(() => {
    if (autoResize) {
      resizeTextarea();
    } else if (textareaRef.current) {
      textareaRef.current.style.height = "";
      textareaRef.current.style.overflowY = "";
    }
  }, [
    props.value,
    autoResize,
    rows,
    minRows,
    maxRows,
  ]);

  return (
    <FieldWrapper
      label={label}
      helperText={helperText}
      error={error}
      required={required}
      fullWidth={fullWidth}
      disabled={disabled}
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
          resize: autoResize
            ? "none"
            : resize,
        }}
        {...props}
        onChange={(event) => {
          resizeTextarea();

          props.onChange?.(event);
        }}
      />
    </FieldWrapper>
  );
}
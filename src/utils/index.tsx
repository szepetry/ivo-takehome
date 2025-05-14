import React from "react";
import type { Mark } from "../types";

/** Wraps content with HTML tags based on marks */
export function applyMarks(
  content: React.ReactNode,
  marks: Mark
): React.ReactNode {
  let wrapped = content;
  if (marks.bold) {
    wrapped = <strong>{wrapped}</strong>;
  }
  if (marks.italic) {
    wrapped = <em>{wrapped}</em>;
  }
  if (marks.underline) {
    wrapped = <u>{wrapped}</u>;
  }
  return wrapped;
}

/** Type guard for structured nodes */
export function isTypedNode(n: any): n is { type: string } {
  return n && typeof n.type === "string";
}

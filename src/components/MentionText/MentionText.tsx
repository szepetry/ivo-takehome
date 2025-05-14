import React from "react";
import type { MentionNode } from "../../types";
import { applyMarks } from "../../utils";

interface Props {
  node: MentionNode;
}

export default function MentionText({ node }: Props) {
  const children = node.children.map((child, i) => (
    <React.Fragment key={i}>{applyMarks(child.text, child)}</React.Fragment>
  ));

  return (
    <span className="text-gray-100"
      style={{
        backgroundColor: node.color,
        padding: "2px 8px",
        borderRadius: "4px",
      }}
    >
      {applyMarks(children, node)}
    </span>
  );
}

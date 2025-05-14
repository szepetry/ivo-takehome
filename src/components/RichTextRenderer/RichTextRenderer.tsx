import React from "react";
import type { Node } from "../../types";
import { applyMarks, isTypedNode } from "../../utils";
import MentionText from "../MentionText";
import ClauseBlock from "../ClauseBlock";

interface Props {
  node: Node;
  clauseCounter: React.RefObject<number>;
}

export default function RichTextRenderer({ node, clauseCounter }: Props) {
  if ("text" in node) {
    return <>{applyMarks(node.text, node)}</>;
  }

  if (!isTypedNode(node)) return null;

  const children = (
    <>
      {node.children.map((child: Node, i: number) => (
        <RichTextRenderer key={i} node={child} clauseCounter={clauseCounter} />
      ))}
    </>
  );

  let rendered: React.ReactNode;
  switch (node.type) {
    case "mention":
      rendered = <MentionText node={node} />;
      break;
    case "clause":
      rendered = <ClauseBlock node={node} clauseCounter={clauseCounter} />;
      break;
    case "h1":
      rendered = <h1 style={{ whiteSpace: 'pre-wrap' }}>{children}</h1>;
      break;
    case "h4":
      rendered = <h4 style={{ whiteSpace: 'pre-wrap' }}>{children}</h4>;
      break;
    case "p":
      rendered = <p style={{ whiteSpace: 'pre-wrap' }}>{children}</p>;
      break;
    case "ul":
      rendered = <ul style={{ whiteSpace: 'pre-wrap' }}>{children}</ul>;
      break;
    case "li":
      rendered = <li style={{ whiteSpace: 'pre-wrap' }}>{children}</li>;
      break;
    case "lic":
      rendered = <>{children}</>;
      break;
    case "block":
      rendered = <div style={{ whiteSpace: 'pre-wrap' }}>{children}</div>;
      break;
    default:
      rendered = <>{children}</>;
  }

  return <>{applyMarks(rendered, node)}</>;
}

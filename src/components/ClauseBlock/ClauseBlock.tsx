import React from "react";
import type { ClauseNode } from "../../types";
import RichTextRenderer from "../RichTextRenderer";
import { applyMarks } from "../../utils";

interface Props {
  node: ClauseNode;
  clauseCounter: React.RefObject<number>;
}

export default function ClauseBlock({ node, clauseCounter }: Props) {
  const num = clauseCounter.current!;
  clauseCounter.current = num + 1;

  const content = (
    <div className="clause-block" style={{ marginBottom: "1em" }}>
      <span
        className="clause-number"
        style={{ fontWeight: "bold", marginRight: "0.5em" }}
      >
        {num}.
      </span>
      <div className="clause-content">
        {node.children.map((child, i) => (
          <RichTextRenderer
            key={i}
            node={child}
            clauseCounter={clauseCounter}
          />
        ))}
      </div>
    </div>
  );

  return <>{applyMarks(content, node)}</>;
}

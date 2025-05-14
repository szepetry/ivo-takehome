import { useRef } from "react";
import input from "../../assets/input.json";
import RichTextRenderer from "../../components/RichTextRenderer";

export default function ServiceAgreement() {
  const clauseCounter = useRef(1);

  return (
    <div className="contract" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      {input.map((block: any, i: number) => (
        <RichTextRenderer key={`${i}-${block.type}`} node={block} clauseCounter={clauseCounter} />
      ))}
    </div>
  );
}

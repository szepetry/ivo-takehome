export type Mark = {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

export type TextNode = Mark & {
  text: string;
};

export type MentionNode = Mark & {
  type: 'mention';
  color: string;
  title: string;
  variableType?: string;
  id: string;
  value: string;
  children: TextNode[];
};

export type ClauseNode = Mark & {
  type: 'clause';
  title?: string;
  children: Node[];
};

export type BlockNode = Mark & {
  type: 'block' | 'p' | 'h1' | 'h4' | 'ul' | 'li' | 'lic';
  title?: string;
  children: Node[];
};

export type Node = TextNode | MentionNode | ClauseNode | BlockNode;
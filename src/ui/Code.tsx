import { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Code: FC<{
  code: string;
  language?: string
}> = (props) => {
  const { code, language= "javascript" } = props;
  return (
    <SyntaxHighlighter language={language} style={dracula}>
      {code}
    </SyntaxHighlighter>
  );
};

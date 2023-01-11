import { FC } from "react";

export const Code: FC<{
  content: string;
  language?: string
}> = (props) => {
  const {  language= "javascript", content } = props;
  return (
   <pre className="bg-black text-gray-400 text-left p-2">
    <code >
      {content}
    </code>
    </pre> 
  );
};
